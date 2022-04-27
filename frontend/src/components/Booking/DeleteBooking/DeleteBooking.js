import React from 'react';
import { useDispatch } from "react-redux";
import { deleteBookingThunk } from '../../../store/bookings'
import './DeleteBooking.css'


function DeleteBooking({booking}) {
    const dispatch = useDispatch();

    const handleDeleteBooking = () => async(e) => {
        e.preventDefault()

        await dispatch(deleteBookingThunk(booking))       
    }

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