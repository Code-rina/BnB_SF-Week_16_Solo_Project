import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
import { getAllSpots } from "../../store/spots"
import { Link, Route, useParams } from 'react-router-dom';
import "./spots.css"

function Spots() {
    const dispatch = useDispatch()
    const allSpots = useSelector(state => state.spots.list)

    

    useEffect(() => {
        dispatch(getAllSpots())
    }, [])

    return (
            <div className="all_container">
                {allSpots?.map(spot => (
                    <div key={`${spot?.title}1`} className="spots_container">
                        <div key={`${spot?.title}2`} className="image_container">
                            <Link key={`${spot?.title}13`} to={`/spots/${spot.id}`}>
                                <img crossOrigin="anonymous" alt="spot_img" id='spot_image' key={spot?.id} src={spot?.Images[0]?.url} />
                            </Link>
                        </div>
                        <div key={`${spot?.title}4`} className="information">
                            <Link key={`${spot?.title}5`}  to={`/spots/${spot.id}`}>
                                <h2 id="spot_name" key={spot?.title}>{spot?.title}</h2>
                                <div id="line"></div>
                            </Link>
                                <div className="detail_container_all">
                                   <p id="detail_p_tag">
                                       {`${spot?.guests} guests • ${spot?.bedrooms} beds • ${spot?.bathrooms} `}
                                       {(spot?.bathrooms !== 1) ? "baths" : "bath"}
                                   </p>
                            
                               <div className="amenities_container_all">
                                   <p id='amenities_all'>
                                       {(spot?.Amenities[0]?.parking) ? 'Parking • ' : (spot?.Amenities[0]?.fireplace) ? 'Fireplace • ' : ''}
                                    {(spot?.Amenities[0]?.privateBeachAccess) ? 'Private beach access • ' : (spot?.Amenities[0]?.pool) ? 'Pool • ' : ''}
                                       {(spot?.Amenities[0]?.pets) ? 'Pets • ' : (spot?.Amenities[0]?.pets) ? 'Pets • ' : ''}
                                       {(spot?.Amenities[0]?.hotTub) ? 'Hot tub' : (spot?.Amenities[0]?.kitchen) ? 'Kitchen' : ''}</p>
                               </div>
                               </div>
                                <ul key={`${spot?.title}7`} className="details">
                                    <li id="price" key={`${spot?.title}8`}>${spot?.price} / night</li>
                                </ul>
                            </div>
                    </div>
                ))}
            </div>
    )
}
export default Spots;