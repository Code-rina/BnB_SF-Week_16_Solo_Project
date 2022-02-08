const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const router = express.Router()
const { handleValidationErrors } = require('../../utils/validation')
const db = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

const { Spot, Amenity, User, Image } = db;

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
        const allSpots = await Spot.findAll({
            include: [Image, Amenity, User]
        })
        return res.json(allSpots)
    })
    )

// Getting one spot
router.get(
    '/:id', 
    asyncHandler(async (req, res) => {
        const spotId = parseInt(req.params.id, 10)
        const oneSpot = await Spot.findByPk(spotId, {
            include: [Image, Amenity, User]
        })
        return res.json(spot)
    })
)

router.post(
    '/host',
    requireAuth,
    hostFormValidator,
    asyncHandler(async (req, res) => {
        const {image, amenities, spots } = req.body
        const id = await Spot.create(spots)
        const newUrlImage = {
            spotId: id.id,
            url: image.url
        }
        await Image.create(newUrlImage)
        const newListAmenity = {
            spotId: id.id,
            parking: amenities.parking,
            kitchen: amenities.kitchen,
            patio: amenities.patio,
            gym: amenities.gym,
            pool: amenities.pool,
            hotTub: amenities.hotTub,
            pets: amenities.pets
        }
        await Amenity.create(newListAmenity)
        return res.json({id})
    })
)

module.exports = router;
