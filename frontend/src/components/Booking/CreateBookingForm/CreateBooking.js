import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DatePicker from "react-datepicker";
import { IoCalendarClearOutline } from 'react-icons/io5'
import { createBookingThunk } from '../../../store/bookings'
import "react-datepicker/dist/react-datepicker.css";
import './CreateBooking.css';


function CreateBookingForm({spotId, oneSpot, sessionUser, reviewsObj}){
    const dispatch = useDispatch();
    const history = useHistory();
    
    const allBookings = useSelector(state => state?.bookings)
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(false);
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

   const today = new Date()
   const tomorrow = new Date()
   tomorrow.setDate(today.getDate() + 1)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            spotId: +spotId,
            userId: sessionUser?.id,
            startDate: startDate,
            endDate: endDate,
            numberOfGuests: +numberOfGuests
        }
        let response;
        response = await dispatch(createBookingThunk(payload))
        if (response) {
            history.push(`/users/${sessionUser?.id}`)
        }
    };


    return (
        <div className="create_booking_main_div">
            <div className="create_booking_upper_div">
                <h4 className="booking-spot-price">${oneSpot?.price} /night</h4>
            </div>
            <form className="create_booking_form" onSubmit={handleSubmit}>
            {sessionUser && 
                <>
                <div className="create_booking_sub_div">
                    <label className="booking-calendar-icon">
                        <IoCalendarClearOutline/></label>
                    <DatePicker
                    className="booking-startDate-input"
                    startDate={startDate}
                    endDate={endDate}
                    selected={startDate}
                    selectsStart
                    placeholderText='Check-in Date'
                    minDate={new Date ()}
                    onChange={(range) => setStartDate(range)}
                    />
                    <label className="booking-calendar-icon2">
                        <IoCalendarClearOutline/></label>
                    <DatePicker
                    className="booking-endDate-input"
                    startDate={startDate}
                    endDate={endDate}
                    selected={endDate}
                    selectsEnd
                    placeholderText='Check-out Date'
                    minDate={tomorrow}
                    onChange={(range) => setEndDate(range)}
                    />
                </div>
                <div className="booking-guests">
                    <label className="booking-guests-label">Guests</label>
                        <select  
                        className="select_number_guests"
                        defaultValue={numberOfGuests}
                        onChange={event => setNumberOfGuests(event.target.value)}>
                        {[...Array(oneSpot?.guests).keys()].map((number, i) => (
                            <option key={i}>{number + 1}</option>
                            ))}
                        </select>
                </div>
                </>}
                {sessionUser &&
                <button className="booking-reserve-button" type="submit">Reserve</button>
                }
            </form>
        </div>
         
  );
      
}

export default CreateBookingForm;