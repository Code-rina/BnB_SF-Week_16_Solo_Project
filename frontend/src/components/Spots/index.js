import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getAllSpots } from '../../store/spots'
import { useDispatch } from 'react-redux';
import './spots.css';


function Spots(){
    const dispatch = useDispatch()
    const allSpots = useSelector(state => state.spots.spotsList)

    useEffect(() => {
        dispatch(getAllSpots())
    }, [])

    return (
        <div className="main_container">
            {allSpots?.map}
            <div className="top_spots_container">
                <div className="top_left"></div> 
                <div className="top_middle"></div> 
                <div className="top_right"></div> 
            </div>
            <div className="middle_spots_container">
                <div className="middle_left"></div> 
                <div className="middle_middle"></div> 
                <div className="middle_right"></div> 
            </div>
            <div className="bottom_spots_container">
                <div className="bottom_left"></div> 
                <div className="bottom_middle"></div> 
                <div className="bottom_right"></div> 
            </div>
        </div>
    )
}

export default Spots;