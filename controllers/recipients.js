const path = require('path');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const geocoder = require('../utils/geocoder');
const Recipient = require('../models/Recipient');
const Donor = require('../models/Donor');

// @desc    Get all posts of recipients
// @route   GET /api/v1/recipient/get-all
// @access  Public
exports.getRecipients = asyncHandler(async (req, res, next) => {
  const recipients = await Recipient.find().populate({
    path: 'user',
    select: 'name email'
});
        return res.status(200).json({
            success: true,
            count: recipients.length,
            data: recipients
        });
});

// @desc    Get single post of recipient
// @route   GET /api/v1/recipient/get-single/:id
// @access  Public
exports.getSingleRecipient = asyncHandler(async (req, res, next) => {
        const recipient = await Recipient.findById(req.params.id).populate({
            path: 'user',
            select: 'name email'
        });
        if (!recipient) {
            return next(new ErrorResponse(`Recipient not found with id of ${req.params.id}`, 404));
        }
        res.status(200).json({ success: true, data: recipient });
});

// @desc    Create new post by recipient
// @route   POST /api/v1/recipient/create-recipient
// @access  Private
exports.createRecipient = asyncHandler(async (req, res, next) => {
    // Add user to req.body
    req.body.user = req.user.id;

        const recipient = await Recipient.create(req.body);
        res.status(201).json({
        success: true,
        data: recipient
    });
});

// @desc    Get donors for recipient having same blood group and nearby location
// @route   GET /api/v1/recipient/search/:id/:zipcode/:distance
// @access  Public
exports.getDonorsBySearching = asyncHandler(async (req, res, next) => {
    const { id, zipcode, distance } = req.params;
    const recipient = await Recipient.findById(id).populate({
        path: 'user',
        select: 'name email'
    });
    if (!recipient) {
        return next(new ErrorResponse(`Recipient not found with id of ${req.params.id}`, 404));
    }

    // Get latitude/longitude from geocoder
    const loc = await geocoder.geocode(zipcode);
    const lat = loc[0].latitude;
    const lng = loc[0].longitude;
    // Calculate radius using radians
    // Divide distance by radius of Earth
    // Earth Radius = 3,963 miles/ 6,378 km
    const radius = distance/3963;
    const donors = await Donor.find({
        location: { $geoWithin: { $centerSphere: [ [ lng, lat ], radius ] } },
        bloodGroup: recipient.bloodGroup
    }).populate({
        path: 'user',
        select: 'name email'
    });
    if (donors.length === 0) {
        return next(new ErrorResponse(`No donor found with the same blood group and nearby location`, 404));
    }
    res.status(200).json({
        success: true,
        count: donors.length,
        data: {recipient, donors}
    });
});