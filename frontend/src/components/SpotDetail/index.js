import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {getOneSpot} from '../../store/spots'
import './spotsdetail.css';


function SpotDetail(){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()
  const {spotId} = useParams()

useEffect(()=> {
    dispatch(getOneSpot(spotId))
}, [dispatch, spotId])

    return (
        <div className="main_spotdetail_container">
            <h1>Spot Detail Page</h1>
            
        </div>
    )
}

export default SpotDetail;