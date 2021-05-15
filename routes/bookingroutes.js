const express = require('express');
const { 
 booknow,
 getbook
} = require('../controllers/booking');

const router = express.Router();

const {protect} = require('../middleware/userAuth');

router.post('/booknow',[protect], booknow);
router.get('/getbook', [protect], getbook);

module.exports = router;