import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { getAllSpots } from '../../store/spots';
import { NavLink } from 'react-router-dom';
import DeleteBooking from '../Booking/DeleteBooking/DeleteBooking.js'

import moment from 'moment';
import './UserProfile.css'

function UserProfile() {
    const dispatch = useDispatch();

    const [user, setUser] = useState({});
    const oneUser = useSelector((state) => state?.session?.user)
    const allSpots = useSelector((state) => state?.spots?.list)

    const userSpots = allSpots.filter((spot) => spot?.userId === +oneUser.id)
    const allBookings = useSelector((state) => state?.bookings)

    const allBookingsArray = Object.values(allBookings)

    const userBookings = allBookingsArray?.filter(booking => booking?.userId === oneUser?.id)

    const pastBookings = userBookings.filter(past => moment(past.startDate) < moment())
    const futureBookings = userBookings.filter(future => moment(future.startDate) > moment())

  
    const [none, setNone] = useState(false)


    useEffect(() => {
        (async () => {
        await dispatch(getAllSpots())
        })();
    }, [dispatch])


  if (!user) {
    return null;
  }

  return (
    <div className="profile-main-div">
        <div className="profile-upper-div">
            <div className="profile-user-icon">
                <div className="profile-icon" color="red">
                    <img className="profile-picture" src="https://i.thecartoonist.me/thecartoonist-profile.png" alt="profile_picture"/>
                </div>
                <h3 className="profile-welcome">Nice to see you again, {oneUser?.username}!</h3>
                <div className="profile-above-ul-div">
                <div className="profile-username">Username: {oneUser?.username}</div>
                <div className="profile-email">Email: {oneUser?.email}</div>
                </div>
            </div>
          <h5 className="profile-your-listings">Your listings: </h5>
            <div className="profile-lower-div">
                <div className="profile-spots">
                    <div className="profile-spots-div">
                    {userSpots.map((spot) => (
                        <div className="profile-user-spots">
                            <div className="profile-listing-spots-div" key={`profile-user-spot ${spot.id}`}>
                                <NavLink className="profile-nav" key={`profile-user-spot ${spot.id}`} to={`/spots/${spot?.id}`}>
                                    <div className="profile-spot-img-div">
                                        <img className="profile-spot-img"
                                        alt={spot?.id}
                                        src={spot?.Images[0].url}
                                            />
                                        <div className="profile-title-address">
                                            <div className="profile-title-div">
                                                <p className="profile-title">{spot?.title}</p>
                                            </div>    
                                            <div className="profile-address-div">
                                                <p className="profile-address">{spot?.address},</p>
                                            </div>
                                            <div className="profile-address-div">
                                                <p className="profile-address">{spot?.city},</p>
                                            </div>
                                            <div className="profile-address-div">
                                                <p className="profile-address">{spot?.zipCode}</p>
                                            </div>
                                        </div>    
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <h5 className="profile-your-listings">Your upcoming trips: </h5>
            <div className="profile-lower-div">
                <div className="profile-spots">
                    <div className="profile-spots-div">
                    {!futureBookings.length ?
                        <div className="profile-user-spots">
                            <h4>No upcoming trips</h4>
                                <NavLink to={'/spots'}>...Explore</NavLink>
                        </div> :
                        <div className="profile-user-spots">
                            {userBookings && futureBookings.map(date => (
                                <div className="profile-listing-spots-div">
                                    <NavLink className="profile-nav" to={`/spots/${allSpots[date?.spotId]?.id}`}>
                                        <div className="profile-spot-img-div">
                                            <img className="profile-spot-img"
                                            alt="booking"
                                            src={`${allSpots[date.spotId]?.Images[0]?.url}`}
                                                />
                                            <div className="profile-title-address">
                                                <div className="profile-title-div">
                                                    <p className="profile-title">{allSpots[date?.spotId]?.title}</p>
                                                </div>    
                                                <div className="profile-address-div">
                                                    <p className="profile-address">{allSpots[date.spotId]?.address},</p>
                                                </div>
                                                <div className="profile-address-div">
                                                    <p className="profile-address">{allSpots[date.spotId]?.city},</p>
                                                </div>
                                                <div className="profile-address-div">
                                                    <p className="profile-address">{allSpots[date.spotId]?.zipCode}</p>
                                                </div>
                                            </div>    
                                        </div>
                                    </NavLink>
                                        <DeleteBooking booking={date?.id}/>
                                </div>
                            ))}
                        </div>
                    }
                    </div>
                </div> 
            </div>
            <h5 className="profile-your-listings">Where you've been: </h5>
            <div className="profile-lower-div">
                <div className="profile-spots">
                    <div className="profile-spots-div">
                    {!pastBookings.length ?
                        <div className="profile-user-spots">
                            <h4>No upcoming trips</h4>
                                <NavLink to={'/spots'}>...Explore</NavLink>
                        </div> :
                        <div className="profile-user-spots">
                            {userBookings && pastBookings.map(date => (
                                <div className="profile-listing-spots-div">
                                    <NavLink className="profile-nav" to={`/spots/${allSpots[date?.spotId]?.id}`}>
                                        <div className="profile-spot-img-div">
                                            <img className="profile-spot-img"
                                            alt="booking"
                                            src={`${allSpots[date.spotId]?.Images[0]?.url}`}
                                                />
                                            <div className="profile-title-address">
                                                <div className="profile-title-div">
                                                    <p className="profile-title">{allSpots[date.spotId]?.title}</p>
                                                </div>    
                                                <div className="profile-address-div">
                                                    <p className="profile-address">{allSpots[date.spotId]?.address},</p>
                                                </div>
                                                <div className="profile-address-div">
                                                    <p className="profile-address">{allSpots[date.spotId]?.city},</p>
                                                </div>
                                                <div className="profile-address-div">
                                                    <p className="profile-address">{allSpots[date.spotId]?.zipCode}</p>
                                                </div>
                                            </div>    
                                        </div>
                                    </NavLink>
                                </div>
                            ))}
                        </div>
                    }
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default UserProfile;