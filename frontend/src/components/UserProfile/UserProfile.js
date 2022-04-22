import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getAllSpots } from '../../store/spots';
import { getBookingsThunk } from '../../store/bookings'
import { NavLink } from 'react-router-dom';
import { FaUserCircle, FaSuitcase } from 'react-icons/fa'
// import ErrorPage from '../components/ErrorPage/ErrorPage';
import moment from 'moment';
import './UserProfile.css'

function UserProfile() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [user, setUser] = useState({});
    const oneUser = useSelector((state) => state?.session?.user)
    const allSpots = useSelector((state) => state?.spots?.list)
    console.log("allSpots---------", allSpots)
    // const spots = useSelector((state) => state?.spots)
    // console.log("spots---------", spots)
    const { id }  = useParams();
    //   console.log("allSpots!!!!!", allSpots)
    //   console.log("oneUser!!!!!", oneUser)
    const userSpots = allSpots.filter((spot) => spot?.userId === +oneUser.id)
//   console.log("userSpots!!!!!", userSpots)
    const allBookings = useSelector((state) => state?.bookings)
    console.log("1st - allBookings!!!!!", allBookings)

    const allBookingsArray = Object.values(allBookings)
    console.log("allBookingsArray!!!!!", allBookingsArray)

    const userBookings = allBookingsArray?.filter(booking => booking?.userId === oneUser?.id)
    console.log("userBookings::::", userBookings)
    // const startDate = useSelector((state) => state?.bookings?.startDate)
    // console.log("startDate:::::", startDate);

    // const endDate = useSelector((state) => state?.bookings?.endDate)
    // console.log("endDate:::::", endDate);

    // console.log("TODAY:::::", today.format());
    
    const pastAndFutureBookings = (pastAndFutureBooking) => {
        const today = moment().format()
        console.log("today-----", today)
        let pastBookings = []
        let futureBookings = []
        allBookingsArray.forEach((singleBooking) => {
            console.log("singleBooking-------------", singleBooking.startDate < today)
        if(singleBooking.startDate < today) {
            pastBookings.push([singleBooking.startDate, singleBooking])
        } else if (singleBooking.startDate > today) {
            futureBookings.push([singleBooking.startDate, singleBooking])
        }
        })
        console.log("{ pastBookings: pastBookings, futureBookings: futureBookings}", { pastBookings: pastBookings, futureBookings: futureBookings})
        return { pastBookings: pastBookings, futureBookings: futureBookings}
    }
    console.log("userBookings && pastAndFutureBookings(userBookings).futureBookings", userBookings && pastAndFutureBookings(userBookings).futureBookings)
    // const userBookings = allBookings.filter((oneBooking) => oneBooking?.userId === +oneUser.id)
    // console.log("userBookings!!!!!", userBookings)
    const [none, setNone] = useState(false)

//   if (oneUser && oneUser.id !== +id) {
//     history.push('/404-page-not-found')
//   }
  // console.log("OneUser.id:::::", oneUser.id)
  // console.log("userId::::", id)
    useEffect(() => {
        (async () => {
        await dispatch(getAllSpots())
        await dispatch(getBookingsThunk())
        })();
    }, [dispatch])



  // useEffect(() => {
  //   if (!userId) {
  //     return;
  //   }
  //   (async () => {
  //     const response = await fetch(`/api/users/${userId}`);
  //     const user = await response.json();
  //     setUser(user);
  //   })();
  // }, [userId]);

  // if (none) {
  //   return <ErrorPage/>
  // }

  if (!user) {
    return null;
  }

  return (
    <div className="profile-main-div">
        <div className="profile-upper-div">
            {/* <div className="profile-upper-head"> */}
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
            {/* </div> */}
          <h5 className="profile-your-listings">Your listings: </h5>
            <div className="profile-lower-div">
            {/* {userSpots && } */}
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
                                        onError={(e) =>
                                            (e.target.src = "https://i.gyazo.com/953eaecab771a2f8f4e514e5750531cb.jpg")} 
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
            {/* {userSpots && } */}
                <div className="profile-spots">
                    <div className="profile-spots-div">
                    {!pastAndFutureBookings(userBookings).futureBookings.length ?
                        <div className="profile-user-spots">
                            <h4>No upcoming trips</h4>
                                <NavLink to={'/spots'}><FaSuitcase />Explore</NavLink>
                        </div> :
                        <div className="profile-user-spots">
                            {userBookings && pastAndFutureBookings(userBookings).futureBookings.map(date => {
                                <div className="profile-listing-spots-div">
                                    <NavLink className="profile-nav" to={`/spots/${date[0].spotId}`}>
                                        <div className="profile-spot-img-div">
                                            <img className="profile-booking-img"
                                            alt="booking"
                                            src={`${allSpots[date[0].spotId]?.Images[0]?.url}`}
                                            onError={(e) =>
                                                (e.target.src = "https://i.gyazo.com/953eaecab771a2f8f4e514e5750531cb.jpg")} 
                                                />
                                            <div className="profile-title-address">
                                                <div className="profile-title-div">
                                                    <p className="profile-title">{allSpots[date[0].spotId]?.title}</p>
                                                </div>    
                                                <div className="profile-address-div">
                                                    <p className="profile-address">{allSpots[date[0].spotId]?.address},</p>
                                                </div>
                                                <div className="profile-address-div">
                                                    <p className="profile-address">{allSpots[date[0].spotId]?.city},</p>
                                                </div>
                                                <div className="profile-address-div">
                                                    <p className="profile-address">{allSpots[date[0].spotId]?.zipCode}</p>
                                                </div>
                                            </div>    
                                        </div>
                                    </NavLink>
                                </div>
                            })}
                        </div>
                    }
                    </div>
                </div> 
            </div>
            <h5 className="profile-your-listings">Where you've been: </h5>
            <div className="profile-lower-div">
            {/* {userSpots && } */}
                <div className="profile-spots">
                    <div className="profile-spots-div">
                    {!pastAndFutureBookings(userBookings).pastBookings.length ?
                        <div className="profile-user-spots">
                            <h4>No upcoming trips</h4>
                                <NavLink to={'/spots'}><FaSuitcase />Explore</NavLink>
                        </div> :
                        <div className="profile-user-spots">
                            {userBookings && pastAndFutureBookings(userBookings).pastBookings.map(date => {
                                <div className="profile-listing-spots-div">
                                    <NavLink className="profile-nav" to={`/spots/${date[0].spotId}`}>
                                        <div className="profile-spot-img-div">
                                            <img className="profile-booking-img"
                                            alt="booking"
                                            src={`${allSpots[date[0].spotId]?.Images[0]?.url}`}
                                            onError={(e) =>
                                                (e.target.src = "https://i.gyazo.com/953eaecab771a2f8f4e514e5750531cb.jpg")} 
                                                />
                                            <div className="profile-title-address">
                                                <div className="profile-title-div">
                                                    <p className="profile-title">{allSpots[date[0].spotId]?.title}</p>
                                                </div>    
                                                <div className="profile-address-div">
                                                    <p className="profile-address">{allSpots[date[0].spotId]?.address},</p>
                                                </div>
                                                <div className="profile-address-div">
                                                    <p className="profile-address">{allSpots[date[0].spotId]?.city},</p>
                                                </div>
                                                <div className="profile-address-div">
                                                    <p className="profile-address">{allSpots[date[0].spotId]?.zipCode}</p>
                                                </div>
                                            </div>    
                                        </div>
                                    </NavLink>
                                </div>
                            })}
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