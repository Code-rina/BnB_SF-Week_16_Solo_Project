import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import {addSpot} from '../../store/spots'
import {useEffect} from 'react'
import { DateRangePicker, DateRange } from "mui-daterange-picker";
import './CreateBooking.css';


function CreateBookingForm(){
//   const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    // const history = useHistory();
    // const session = useSelector(state => state.session)
    
    const [open, setOpen] = useState(false);
    const [dateRange, setDateRange] = useState(false);
    const [numberOfGuests, setNumberOfGuests] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");


    const toggle = () => setOpen(!open);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const payload = {
        //     amenities: {
        //         parking,
        //         kitchen,
        //         patio,
        //         gym,
        //         pool,
        //         hotTub,
        //         pets
        //     },
        //     spots: {
        //         userId: session.user.id,
        //         address,
        //         city,
        //         zipCode,
        //         state,
        //         country,
        //         title,
        //         description,
        //         price,
        //         guests,
        //         bedrooms,
        //         bathrooms
        //     },
        //     image: {
        //         url
        //     }
        // }
        // let spotCreated;
        // spotCreated = await dispatch(addSpot(payload));
        // console.log("spotCreated", spotCreated)
        // try {
        // } catch (error) {
        //     throw new Error("Something went wrong")
        // }
        // if (spotCreated) {
        //     history.push(`/spots/${spotCreated.id.id}`)
        // }
    };

    return (
        <div className="create_booking_main_div">
            <form className="create_booking_form" onSubmit={handleSubmit}>
              {/* <div className="create_booking_sub_div"> */}
                    {/* <ul>
                        {errorValidator.map(error => (
                        <li className="error_list" key={error}>{error}</li>
                        ))}
                    </ul> */}
            {/* </div> */}
                <div className="create_booking_sub_div">
                    <DateRangePicker
                    open={open}
                    toggle={toggle}
                    onChange={(range) => setDateRange(range)}
                    />
                </div>
                <select 
                className="select_number_guests"
                onChange={event => setNumberOfGuests(event.target.value)}
                value={numberOfGuests}
                >
                </select>
            </form>
        </div>
         
  );
      
}

export default CreateBookingForm;