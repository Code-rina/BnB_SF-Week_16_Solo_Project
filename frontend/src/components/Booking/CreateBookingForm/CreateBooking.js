import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import {addSpot} from '../../store/spots'
import {useEffect} from 'react'
import DatePicker from "react-datepicker";
import { createBookingThunk } from '../../../store/bookings'
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import './CreateBooking.css';


function CreateBookingForm({spotId, oneSpot, sessionUser, reviewsObj}){
    const dispatch = useDispatch();
    const history = useHistory();
    
    const allBookings = useSelector(state => state?.bookings)
    // console.log("allBookings!!!!!", allBookings)
    console.log("OneSpot", oneSpot)
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(false);
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");


    // console.log("array", [...Array(oneSpot?.guests).keys()])
    console.log("sessionUser", sessionUser)
//    const today = moment().format()
   const today = new Date()
   console.log("today------",today)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            spotId: +spotId,
            userId: sessionUser?.id,
            startDate: startDate,
            endDate: endDate,
            numberOfGuests: +numberOfGuests
        }
        console.log("payload------",payload)
        let response;
        response = await dispatch(createBookingThunk(payload))
        console.log("response------",response)
        if (response) {
            history.push(`/users/${sessionUser?.id}`)
        }
    };


    return (
        <div className="create_booking_main_div">
            <div className="create_booking_upper_div">
                <h4 className="booking-spot-price">${oneSpot?.price}/night</h4>
            </div>
            <form className="create_booking_form" onSubmit={handleSubmit}>
                {/* <div className="create_booking_sub_div"> */}
                        {/* <ul>
                            {errorValidator.map(error => (
                            <li className="error_list" key={error}>{error}</li>
                            ))}
                        </ul> */}
                {/* </div> */}

            {sessionUser && 
                <>
                <div className="create_booking_sub_div">
                    <DatePicker
                    className="booking-startDate-input"
                    startDate={startDate}
                    endDate={endDate}
                    selected={startDate}
                    selectsStart
                    // closeCalendar={true}
                    // placeholderText='Check-in Date'
                    // autoFocus={true}
                    minDate={new Date ()}
                    onChange={(range) => setStartDate(range)}
                    />
                </div>
                <div className="create_booking_sub_div">
                    <DatePicker
                    className="booking-endDate-input"
                    startDate={startDate}
                    endDate={endDate}
                    selected={endDate}
                    selectsEnd
                    // closeCalendar={true}
                    // calendarIcon={null}
                    // placeholderText='Check-out Date'
                    minDate={new Date(+1)}
                    onChange={(range) => setEndDate(range)}
                    />
                </div>
                <div className="booking-guests"></div>
                <label>Guests</label>
                <select  
                className="select_number_guests"
                defaultValue={numberOfGuests}
                onChange={event => setNumberOfGuests(event.target.value)}>
                {[...Array(oneSpot?.guests).keys()].map((number, i) => (
                    <option key={i}>{number + 1}</option>
                    ))}
                </select>
                </>}
                {sessionUser &&
                <button className="booking-reserve-button" type="submit">Reserve</button>
                }
            </form>
        </div>
         
  );
      
}

export default CreateBookingForm;