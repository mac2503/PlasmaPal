
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const sendEmail = require('../utils/sendEmail');
const User = require('../models/User');
const Eligiblty = require('../models/eligiblty')



exports.check = asyncHandler(async (req, res, next) => {
  const {  age,weight,covidnegative,healthissue,belongsTo} = req.body;
  if((age>=18) && (weight >=50) && (covidnegative >=14))
  {
    const eligiblty = new Eligiblty({
        status:true,
        age,
        weight,
        covidnegative,
        healthissue,
        belongsTo:req.user.id
      })

      await eligiblty.save();
      return res.json("You are ELIGIBLE for plasma donation .Kindly book a slot").status(200)
  }
  else{
    const eligiblty = new Eligiblty({
        status:false,
        age,
        weight,
        covidnegative,
        healthissue,
        belongsTo:req.user.id
      })
      await eligiblty.save();
      return res.json("You are NOT ELIGIBLE for plasma donation").status(200)
  }
  
  
});


