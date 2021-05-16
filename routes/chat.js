const express = require('express');
const { 
  addConversation,
  getConversation,
  getConversationById
} = require('../controllers/chat');

const router = express.Router();

const {protect} = require('../middleware/userAuth');

router.post('/add_conversation/:id', protect, addConversation);
router.get('/my_conversation', protect, getConversation);
router.get('/conversation/:id', protect, getConversationById);

module.exports = router;