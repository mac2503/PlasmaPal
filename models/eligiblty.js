const mongoose = require('mongoose');
const EligibltySchema = new mongoose.Schema({
 status:{
     type: Boolean,
     default:false,
     required:true
 },
 age:{
      type: Number,
      required:true
 },
 weight:{
    type: Number,
    required:true
 },
covidnegative:{
    type: Number,
    required:true
},
healthissue:{
    type: String,
    required:true
},
belongsTo:{
    type: mongoose.Schema.ObjectId,
    ref: 'users',
    required: true,
}

});

module.exports = mongoose.model('Eligiblty', EligibltySchema)