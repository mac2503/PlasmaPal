const multer = require('multer');
const upload = multer({dest:'./uploads/'}).single("report");


var express = require('express');
var router = express.Router();    
var storage = multer.diskStorage({   
    destination: function(req, file, cb) { 
       cb(null, './uploads');    
    }, 
    filename: function (req, file, cb) { 
       cb(null , file.originalname);   
    }
  });
  
router.post('/report',(req, res)=> {
    upload(req, res, (err) => {
        if(err) {
          res.status(400).send("Something went wrong!");
        }
        res.send(req.file);
      });
});

module.exports=router;