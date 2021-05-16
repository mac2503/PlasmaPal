const mongoose = require('mongoose');
const BookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  bloodgroup:{
    type: String,
    required: [true, 'Please add a Blood group']  
},
age:{
    type: Number,
    required: [true, 'Please add age']
},
location:{
    type: String,
    required: [true, 'Please add your address']
},
contact:{
    type: Number,
    required: [true, 'Please add contact number']
},
date:{
    type: Date,
    default:Date.now(),
    required: [true, 'Please select date']
},
time:{
    type: String,
    required: [true, 'Please select time']
},
belongsTo:{
    type: mongoose.Schema.ObjectId,
    ref: 'users',
    required: true,
}

});

module.exports = mongoose.model('Booking', BookingSchema)