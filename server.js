const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

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

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Mount routers
app.use('/api/v1/user', userAuth);
app.use('/api/v1/slot', bookingroutes);
app.use('/api/v1/donate', eligibltyroutes);
app.use('/api/v1/donor', donors);
app.use('/api/v1/recipient', recipients);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT, 
  console.log(`Server running on port ${PORT}`.yellow.bold)
  );

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server and exit process
  server.close(() => process.exit(1));
});