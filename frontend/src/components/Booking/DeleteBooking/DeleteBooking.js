import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { deleteBookingThunk } from '../../../store/bookings'
import { GoTrashcan } from 'react-icons/go'
import './DeleteBooking.css'



function DeleteBooking({booking}) {
    const dispatch = useDispatch();

    const handleDeleteBooking = () => async(e) => {
        e.preventDefault()

        await dispatch(deleteBookingThunk(booking))
           
    }
    console.log("booking-----", booking)



return (

    <div className="booking-delete-div">
        <button
        className="delete-booking-button"
        onClick={handleDeleteBooking(booking)}
        >
        Delete Booking
        </button>
    </div>

)
}
export default DeleteBooking;