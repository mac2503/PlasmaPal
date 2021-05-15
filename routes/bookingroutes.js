const express = require('express');
const { 
 booknow,
 getbook,
 gethospitals,
 searchcentre,
 getallcentres
} = require('../controllers/booking');

const router = express.Router();

const {protect} = require('../middleware/userAuth');

router.post('/booknow',[protect], booknow);
router.get('/getbook', [protect], getbook);
router.get('/getcentres',[protect],getallcentres)
router.get('/searchcentre',[protect],searchcentre)
module.exports = router;