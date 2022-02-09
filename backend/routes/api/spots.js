const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation')
const db = require('../../db/models');
const { requireAuth, setTokenCookie } = require('../../utils/auth');
const { Spot, Amenity, User, Image } = db;
const router = express.Router()

const hostFormValidator = [
    check('spots.address')
        .exists({ checkFalsy: true })
        .notEmpty()
        .isLength({ max: 255 })
        .withMessage('Please provide an address.'),
    check('spots.city')
        .exists({ checkFalsy: true })
        .notEmpty()
        .isLength({ max: 255 })
        .withMessage('Please provide a city.'),
    check('spots.zipCode')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide a zip code.'),
    check('spots.state')
        .exists({ checkFalsy: true })
        .notEmpty()
        .isLength({ max: 30 })
        .withMessage('Please provide a state.'),
    check('spots.country')
        .exists({ checkFalsy: true })
        .notEmpty()
        .isLength({ max: 100 })
        .withMessage('Please provide a country.'),
    check('spots.title')
        .exists({ checkFalsy: true })
        .notEmpty()
        .isLength({ max: 50 })
        .withMessage('Please provide a title.'),
    check('spots.description')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide a description.'),
    check('spots.price')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide a price.'),
    check('spots.guests')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide a number of guests allowed.'),
    check('spots.bedrooms')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide a number of bedrooms.'),
    check('spots.bathrooms')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide a number of bathrooms.'),
    check('image.url')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide url for your image'),
    handleValidationErrors,
];

// Getting all spots
router.get(
    '/',
    asyncHandler(async (req, res) => {
        const spots = await Spot.findAll({
            include: [Image, Amenity, User]
        })
        return res.json(spots)
    })
    )

// Getting one spot
router.get(
    '/:id', 
    asyncHandler(async (req, res) => {
        const spotId = parseInt(req.params.id, 10)
        const spot = await Spot.findByPk(spotId, {
            include: [Image, Amenity, User]
        })
        return res.json(spot)
    })
)




module.exports = router;
