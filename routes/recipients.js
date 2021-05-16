const express = require('express');
const { 
  getRecipients,
  getSingleRecipient,
  createRecipient
} = require('../controllers/recipients');

const router = express.Router();

const {protect} = require('../middleware/userAuth');

router.get('/get-all', getRecipients);
router.get('/get-single/:id', getSingleRecipient);
router.post('/create-recipient', protect, createRecipient);

module.exports = router;