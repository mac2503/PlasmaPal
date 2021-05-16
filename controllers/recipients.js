const path = require('path');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const geocoder = require('../utils/geocoder');
const Recipient = require('../models/Recipient');

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