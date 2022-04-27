const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation')
const db = require('../../db/models');
const { requireAuth, setTokenCookie } = require('../../utils/auth');
const { Spot, Amenity, User, Image, Review } = db;
const csrf = require("csurf");
const router = express.Router()
const csrfProtection = csrf({ cookie: true });


// const hostFormValidator = [
//     check('address')
//         .exists({ checkFalsy: true })
//         .withMessage('Please provide a value.')
//         .isLength({ max: 255 })
//         .withMessage('Please provide an address.'),
//     check('city')
//         .exists({ checkFalsy: true })
//         .withMessage('Please provide a value.')
//         .isLength({ max: 255 })
//         .withMessage('Please provide a city.'),
//     check('zipCode')
//         .exists({ checkFalsy: true })
//         .withMessage('Please provide a zip code.'),
//     check('state')
//         .exists({ checkFalsy: true })
//         .withMessage('Please provide a value.')
//         .isLength({ max: 30 })
//         .withMessage('Please provide a state.'),
//     check('country') 
//         .exists({ checkFalsy: true })
//         .withMessage('Please provide a value.')
//         .isLength({ max: 100 })
//         .withMessage('Please provide a country.'),
//     check('title')
//         .exists({ checkFalsy: true })
//         .withMessage('Please provide a value.')
//         .isLength({ max: 50 })
//         .withMessage('Please provide a title.'),
//     check('description')
//         .exists({ checkFalsy: true })
//         .withMessage('Please provide a description.'),
//     check('price')
//         .exists({ checkFalsy: true })
//         .withMessage('Please provide a price.'),
//     check('guests')
//         .exists({ checkFalsy: true })
//         .withMessage('Please provide a number of guests allowed.'),
//     check('bedrooms')
//         .exists({ checkFalsy: true })
//         .withMessage('Please provide a number of bedrooms.'),
//     check('bathrooms')
//         .exists({ checkFalsy: true })
//         .withMessage('Please provide a number of bathrooms.'),
//     check('url')
//         .exists({ checkFalsy: true })
//         .withMessage('Please provide url for your image'),
//     handleValidationErrors,
// ];


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

//Creating a host form
router.post(
    '/host',
    requireAuth,
    // hostFormValidator,
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

router.put(
    '/:id/host',
    requireAuth,
    // hostFormValidator,
    asyncHandler(async (req, res) => {
        const spotId = parseInt(req.params.id, 10)
        const currentSpot = await Spot.findByPk(spotId)

        const {image, spots, amenities} = req.body

        const id = await currentSpot.update(spots)

        const newUrlImage = {
            id: image.id,
            spotId: id.id,
            url: image.url
        }
        const currentImage = await Image.findByPk(image.id);

        await currentImage.update(newUrlImage)

        const newListAmenity = {
            id: amenities.id,
            spotId: id.id,
            parking: amenities.parking,
            kitchen: amenities.kitchen,
            patio: amenities.patio,
            gym: amenities.gym,
            pool: amenities.pool,
            hotTub: amenities.hotTub,
            pets: amenities.pets
        }
        const currentAmenity = await Amenity.findByPk(amenities.id)
        await currentAmenity.update(newListAmenity)

        return res.json({id})
    }))

    router.delete(
    '/:id',
    asyncHandler(async (req, res) => {
        const {id, Images, Amenities} = req.body
        const spotId = parseInt(req.params.id, 10)


        const currentSpot = await Spot.findByPk(spotId)

        if(currentSpot) {

            await currentSpot.destroy();

            res.json({message: "Successfuly deleted"});

        } 
        res.json({message: "Deleting was unsuccessful"})

    }))

//Creating a new review on a specific spot
router.post(
    "/spots/:id",
    asyncHandler(async (req, res) => {
      const review = await Review.create(req.body);
  
      console.log;
  
      const newReview = await Review.findByPk(review.id, {
        include: [User],
      });
      res.json(newReview);
    })
  );
  



module.exports = router;
