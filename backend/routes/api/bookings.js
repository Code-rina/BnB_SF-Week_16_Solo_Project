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

//Delete a booking
router.delete(
    '/:bookingId',
    requireAuth,
    asyncHandler(async (req, res) => {
        const {id, Bookings} = req.body
        const bookingId = parseInt(req.params.bookingId, 10)
        console.log("POST ROUTE - bookingId---------", bookingId)
        const currentBooking = await Booking.findByPk(bookingId)
 
        if(currentBooking) {
            await currentBooking.destroy();

            return res.json({message: "Successfuly deleted"});
       
        }
        return res.json({message: "Deleting was unsuccessful"})

}))



module.exports = router;
