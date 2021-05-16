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
    required: [true, 'Please add your']
},
contact:{
    type: Number,
    required: [true, 'Please add contact number']
},
belongsTo:{
    type: mongoose.Schema.ObjectId,
    ref: 'users',
    required: true,
}

});

module.exports = mongoose.model('Booking', BookingSchema)