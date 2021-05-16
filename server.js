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

//Socket work for chats
// Run when client connects
io.on("connection", (socket) => {
  socket.on("join", (room) => {
    socket.join(room);
    console.log("conversation started!");
    // Listen for chat message
    socket.on("messageServer", async (msg) => {
      console.log("Received", msg);
      socket.to(room).emit("messageClient", msg);
      console.log("Emited", msg);
      await Message.create(msg);
    });
  });
  // Run when a client disconnects
  socket.on("disconnect", () => {
    console.log("Socket io disconnected");
  });
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server and exit process
  server.close(() => process.exit(1));
});