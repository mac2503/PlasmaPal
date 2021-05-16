const express = require('express');
const { 
 check
} = require('../controllers/eligiblty.js');

const router = express.Router();

const {protect} = require('../middleware/userAuth');

router.post('/check',[protect], check);


module.exports = router;