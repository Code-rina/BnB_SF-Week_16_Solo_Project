import React from 'react';
import { useSelector } from 'react-redux';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './spots.css';


function Spots(){

        const dispatch = useDispatch()
        const spotsAll = useSelector(state => state.spots.list)

    return (
        <div className="main_spots_container">
            <h1>Spots</h1>
        </div>
    )
}

export default Spots;