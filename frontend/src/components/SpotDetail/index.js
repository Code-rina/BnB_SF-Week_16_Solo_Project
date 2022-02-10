import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {getOneSpot} from '../../store/spots'
import {removeSpot} from '../../store/spots'
import './spotsdetail.css';


function SpotDetail(){
    const dispatch = useDispatch()
    const {spotId} = useParams()
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user);
    const oneSpot = useSelector(state => state.spots[spotId])

useEffect(()=> {
    dispatch(getOneSpot(spotId))
}, [dispatch, spotId])

const deleteButton = async (e) => {
    e.preventDefault()
    let deleteForm;
    try {
        deleteForm = await dispatch(removeSpot(oneSpot, spotId))
    }catch(error) {
        throw new Error("Something went wrong")
    }
    if(deleteForm.message === "Successfuly deleted") {
        history.push("/spots")
    }
}

    return (
        <div className="main_spotdetail_container">
            <h1 id="detail_title">{oneSpot?.title}</h1>
            <img className="detail_spot_image" src={oneSpot?.Images[0].url} alt="detail_img" />
            <h2 id="hosted_by">Hosted By: {oneSpot?.User?.username}</h2>
            <p id="spot_price">{`$${oneSpot?.price}`} <>/night</></p>
            <div>
                <p id="detail">{`${oneSpot?.guests} guests · ${oneSpot?.bedrooms} bedrooms · ${oneSpot?.bathrooms} `}
                    {(oneSpot?.bathrooms !== 1) ? "baths" : "bath"}
                </p>
            <h3>{oneSpot?.city}, {oneSpot?.state}</h3>
            </div>
            {sessionUser?.id === oneSpot?.userId &&
            <div id="edit_delete_btn">
                <Link className="edit_spot_button" to={`/spots/${spotId}/host`}>Edit</Link>
                <button className="delete_spot_button" onClick={deleteButton}>Delete</button>
            </div>
            }
            <div id="information">
                <h3><i className="fa-thin fa-house"></i>Entire Home</h3>
                <p className="details">You'll have the entire home to yourself.</p>
                <h3><i className="fa-thin fa-sparkles"></i>Enhanced Clean</h3>
                <p className="details">This Host committed to BnB SF's  enhanced cleaning process.</p>
                <h3><i className="fa-thin fa-key"></i>Great check-in experience</h3>
                <p className="details">100% of recent guests gave the check-in process a 5-star rating.</p>
                <h3><i className="fa-thin fa-calendar"></i>Free cancellation for 48 hours</h3>
            </div>   
            <p id="description">{oneSpot?.description}
            <h2 id="spot"></h2></p> 

            <h3>What amenities this place offers</h3> 
            <div className="icons_amenities">
                <div className="left_side_amenities">

                    <p>{(oneSpot?.Amenities[0]?.parking) ? <p><i className="fa-thin fa-square-parking"></i>   Parking</p>: ''}</p>
                    <p>{(oneSpot?.Amenities[0]?.kitchen) ? <p><i className="fa-thin fa-oven"></i>   Kitchen</p>: ''}</p>
                    <p>{(oneSpot?.Amenities[0]?.patio) ? <p><i className="fa-thin fa-cloud-sun"></i>   Patio</p>: ''}</p>
                    <p>{(oneSpot?.Amenities[0]?.pets) ? <p><i className="fa-thin fa-paw"></i>   Pets</p>: ''}</p>
                </div>
                <div className="right_side_amenities">
                    <p>{(oneSpot?.Amenities[0]?.gym) ? <p><i className="fa-thin fa-dumbbell"></i>   Gym</p>: ''}</p>
                    <p>{(oneSpot?.Amenities[0]?.pool) ? <p><i className="fa-thin fa-person-swimming"></i>   Pool</p>: ''}</p>
                    <p>{(oneSpot?.Amenities[0]?.hotTub) ? <p><i className="fa-thin fa-hot-tub-person"></i>   Hot Tub</p>: ''}</p>
                </div>
            </div>
            
        </div>
    )
}

export default SpotDetail;