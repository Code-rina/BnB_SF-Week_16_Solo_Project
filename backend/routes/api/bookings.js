const express = require('express');
const asyncHandler = require('express-async-handler');
const { handleValidationErrors } = require('../../utils/validation')
const db = require('../../db/models');
const { requireAuth, setTokenCookie } = require('../../utils/auth');
const { Spot, User, Booking } = db;
const router = express.Router()



// Getting all bookings
router.get(
    '/',
    asyncHandler(async (req, res) => {
        const bookings = await Booking.findAll()
        // console.log("3rd - back-bookings", bookings)
        return res.json(bookings)
    })
)


//Creating a booking
router.post(
    '/',
    requireAuth,
    asyncHandler(async (req, res) => {
        const { spotId, userId, numberOfGuests, startDate, endDate } = req.body
        const booking = await Booking.create(req.body)
        console.log("POST-backend-booking***********", booking)
        return res.json(booking)
    })
)

// router.put(
//     '/:id/host',
//     requireAuth,
//     // hostFormValidator,
//     asyncHandler(async (req, res) => {
//         const spotId = parseInt(req.params.id, 10)
//         const currentSpot = await Spot.findByPk(spotId)

//         const {image, spots, amenities} = req.body

//         const id = await currentSpot.update(spots)

//         const newUrlImage = {
//             id: image.id,
//             spotId: id.id,
//             url: image.url
//         }
//         const currentImage = await Image.findByPk(image.id);

//         await currentImage.update(newUrlImage)

//         const newListAmenity = {
//             id: amenities.id,
//             spotId: id.id,
//             parking: amenities.parking,
//             kitchen: amenities.kitchen,
//             patio: amenities.patio,
//             gym: amenities.gym,
//             pool: amenities.pool,
//             hotTub: amenities.hotTub,
//             pets: amenities.pets
//         }
//         const currentAmenity = await Amenity.findByPk(amenities.id)
//         await currentAmenity.update(newListAmenity)

//         return res.json({id})
//     }))

//     router.delete(
//     '/:id',
//     asyncHandler(async (req, res) => {
//         const {id, Images, Amenities} = req.body
//         const spotId = parseInt(req.params.id, 10)
//         // const imageId = Images[0].id;
//         // const amenitiesId = Amenities[0].id;

//         const currentSpot = await Spot.findByPk(spotId)
//         // const currentImage = await Image.findByPk(imageId)
//         // const currentAmenity = await Amenity.findByPk(amenitiesId)

//         // console.log(currentSpot, currentImage, currentAmenity)
//         if(currentSpot) {
//             // await currentAmenity.destroy();
//             // await currentImage.destroy();
//             await currentSpot.destroy();

//             res.json({message: "Successfuly deleted"});
//         // } else {
//         //     console.log("We could not delete your form")
//         } 
//         res.json({message: "Deleting was unsuccessful"})
//         // }
//     }))

// //Creating a new review on a specific spot
// router.post(
//     "/spots/:id",
//     asyncHandler(async (req, res) => {
//       const review = await Review.create(req.body);
  
//       console.log;
  
//       const newReview = await Review.findByPk(review.id, {
//         include: [User],
//       });
//       res.json(newReview);
//     })
//   );
  



module.exports = router;
