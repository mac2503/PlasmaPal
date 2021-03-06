const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  from: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  to: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  body: {
    type: String,
    required: [true, "Please add a message"],
    maxlength: 500,
  },
  sentOn: {
    type: Date,
    default: new Date(),
  },
  seen: {
    type: Boolean,
    default: false,
  },
  conversationId: {
    type: mongoose.Schema.ObjectId,
    ref: "Conversation",
  },
});

MessageSchema.index({ conversationId: 1, sentOn: -1 }, { sparse: true });

module.exports = mongoose.model("Message", MessageSchema);