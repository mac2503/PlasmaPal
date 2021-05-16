const express = require('express');
const { 
  getDonors,
  getSingleDonor,
  createDonor
} = require('../controllers/donors');

const router = express.Router();

const {protect} = require('../middleware/userAuth');

router.get('/get-donors', getDonors);
router.get('/get-single/:id', getSingleDonor);
router.post('/create-donor', protect, createDonor);

module.exports = router;