import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
import { getAllSpots } from "../../store/spots"
// import { Link, Route, useParams } from 'react-router-dom';
import "./spots.css"

function Spots() {
    const dispatch = useDispatch()
    const allSpots = useSelector(state => state.spots.spotslist)



    useEffect(() => {
        dispatch(getAllSpots())
    }, [])

    return (
        <div className="main_container">
            
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