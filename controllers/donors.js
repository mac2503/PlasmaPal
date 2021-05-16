const path = require('path');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const geocoder = require('../utils/geocoder');
const Donor = require('../models/Donor');

// @desc    Get all donors
// @route   GET /api/v1/donor/get-donors
// @access  Public
exports.getDonors = asyncHandler(async (req, res, next) => {
  const donors = await Donor.find().populate({
    path: 'user',
    select: 'name email'
});
        return res.status(200).json({
            success: true,
            count: donors.length,
            data: donors
        });
});

// @desc    Get single donor
// @route   GET /api/v1/donor/get-single/:id
// @access  Public
exports.getSingleDonor = asyncHandler(async (req, res, next) => {
        const donor = await Donor.findById(req.params.id).populate({
            path: 'user',
            select: 'name email'
        });
        if (!donor) {
            return next(new ErrorResponse(`Donor not found with id of ${req.params.id}`, 404));
        }
        res.status(200).json({ success: true, data: donor });
});

// @desc    Create donor
// @route   POST /api/v1/donor/create-donor
// @access  Private
exports.createDonor = asyncHandler(async (req, res, next) => {
    // Add user to req.body
    console.log(req.user.id);
    req.body.user = req.user.id;

        const donor = await Donor.create(req.body);
        res.status(201).json({
        success: true,
        data: donor
    });
});