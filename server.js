const path = require('path');
const http = require('http');
const socketio = require('socket.io');

const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');
const multer = require('multer');
const upload = multer({dest:'uploads/'}).single("report");

const formatMessage = require('./utils/messages');
const {userJoin, getCurrentUser, userLeave, getRoomUsers} = require('./utils/users');

// Load environment variables
dotenv.config({path: './config/config.env'});

// Connect to database
connectDB();

// Route files
const userAuth = require('./routes/userAuth');
const bookingroutes = require('./routes/bookingroutes');
const eligibltyroutes = require('./routes/eligibltyroutes');
const donors = require('./routes/donors');
const recipients = require('./routes/recipients');
const report = require('./routes/report.js');
const chat = require('./routes/chat');   

const app = express();

const server = http.createServer(app);
const io = socketio(server);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const botName = 'ChatCord Bot';

// app.get('/api/v1/chat', (req, res) => {
//   res.sendFile(__dirname + '/public/index.html')
// })

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

var storage = multer.diskStorage({   
  destination: function(req, file, cb) { 
     cb(null, './uploads');    
  }, 
  filename: function (req, file, cb) { 
     cb(null , file.originalname);   
  }
});

//multer for uploading report 
app.post("/report", (req, res) => {
  upload(req, res, (err) => {
   if(err) {
     res.status(400).send("Something went wrong!");
   }
   res.send(req.file);
 });
});
// Mount routers
app.use('/api/v1/user', userAuth);
app.use('/api/v1/slot', bookingroutes);
app.use('/api/v1/donate', eligibltyroutes);
app.use('/api/v1/donor', donors);
app.use('/api/v1/recipient', recipients);
app.use('/report',report);
app.use('/api/v1/chat', chat);

app.use(errorHandler);

// Models
const Message = require("./models/Message");
const Conversation = require("./models/Conversation");

const PORT = process.env.PORT || 5000;

server.listen(
  PORT, 
  console.log(`Server running on port ${PORT}`.yellow.bold)
  );

// Run when client connects
io.on('connection', socket => {

  socket.on('joinRoom', ({username, room}) => {
      const user = userJoin(socket.id, username, room);

      socket.join(user.room);

  // Welcome current user
  // To emit to a single client which is connected 
  socket.emit('message', formatMessage(botName, 'Welcome to ChatCord!'));

  // Broadcast when a user connects
  // To broadcast to all clients except the client connecting
  socket.broadcast.to(user.room).emit('message', formatMessage(botName, `${user.username} has joined the chat`));

  // Send users and room info
  io.to(user.room).emit('roomUsers', {
      room: user.room,
      users: getRoomUsers(user.room)
  });

  });

  // Listen for chatMessage
  socket.on('chatMessage', msg => {
      const user = getCurrentUser(socket.id);
      io.to(user.room).emit('message', formatMessage(user.username, msg));
  });

  // Runs when a client disconnects
  socket.on('disconnect', () => {
      const user = userLeave(socket.id);
      if (user) {
          io.to(user.room).emit('message', formatMessage(botName,`${user.username} has left the chat`));

      // Send users and room info
      io.to(user.room).emit('roomUsers', {
      room: user.room,
      users: getRoomUsers(user.room)
  });
      }
  });
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server and exit process
  server.close(() => process.exit(1));
});