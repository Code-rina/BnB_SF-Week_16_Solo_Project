const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { handleValidationErrors } = require('../../utils/validation');
const { User, Review } = require('../../db/models');

const router = express.Router();

const reviewValidator = [
    check('review')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a review.')
        .isLength({ max: 255 })
        .withMessage('Review cannot be longer than 255 characters.'),
    check('rating')
        .isInt({ min: 1, max: 5 })
        .withMessage('Rating must be a number between 1 and 5.'),
    handleValidationErrors,
];

router.get('/:artistId(\\d+)', asyncHandler(async function (req, res) {
    const reviews = await Review.findAll({
        where: {
            artistId: req.params.artistId
        },
        include: [
            { model: User }
        ] 
    })
    res.json(reviews); 
}))