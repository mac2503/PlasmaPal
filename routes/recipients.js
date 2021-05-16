const express = require('express');
const { 
  getRecipients,
  getSingleRecipient,
  createRecipient,
  getDonorsBySearching
} = require('../controllers/recipients');

const router = express.Router();

const {protect} = require('../middleware/userAuth');

router.get('/get-all', getRecipients);
router.get('/get-single/:id', getSingleRecipient);
router.get('/search/:id/:zipcode/:distance', getDonorsBySearching);
router.post('/create-recipient', protect, createRecipient);

module.exports = router;