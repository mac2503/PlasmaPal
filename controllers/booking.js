
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const sendEmail = require('../utils/sendEmail');
const User = require('../models/User');
const Booking = require('../models/Bookings')

exports.booknow = asyncHandler(async (req, res, next) => {
  const { name,bloodgroup,age,location,contact  } = req.body;

  const booking = new Booking({
    name,
    bloodgroup,
    age,
    location,
    contact,
    belongsTo:req.user.id
  })
  await booking.save()
  return res.json(booking)
});


exports.getbook = asyncHandler(async (req, res, next) => {
   const user = await User.findById(req.user.id);
   if(!user)
   {
       return res.json("please login to get access").status(404)
   }
   const bookings=await Booking.find({belongsTo:req.user.id})
   if(!bookings)
   {
       return res.json("no bookings exist").status(404)
   }
   return res.json(bookings).status(404)

  });
  