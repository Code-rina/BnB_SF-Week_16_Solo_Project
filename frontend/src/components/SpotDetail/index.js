import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {getOneSpot} from '../../store/spots'
import {removeSpot} from '../../store/spots'
import CreateReviewModal from "../CreateReview/CreateReviewModal";
import EditReviewModal from "../EditReview/EditReviewModal";
import {getReviews} from '../../store/reviews'
import {deleteReview} from '../../store/reviews'
import CreateBookingForm from '../Booking/CreateBookingForm/CreateBooking'
import './spotsdetail.css';


function SpotDetail({spot, user}){

    const dispatch = useDispatch()
    const {spotId} = useParams()

    const history = useHistory()
    const userId = useSelector((state) => state.session.user?.id);
    const allUsers = useSelector((state) => state?.session?.user)
    const sessionUser = useSelector(state => state.session?.user);
    const oneSpot = useSelector(state => state.spots[spotId])
    const review = useSelector((state) => {
        return state.reviews;
      });
  

      const reviewsObj = Object.values(review);

      useEffect(() => {
        window.scrollTo(0, 0);
      }, [dispatch])

  useEffect(()=> {
      dispatch(getOneSpot(spotId))
      dispatch(getReviews(spotId))
  }, [dispatch, spotId])

  const handleDeleteReview = (id) => {
    reviewsObj.forEach(async (review) => {
      if (id === review.id) {
        return await dispatch(deleteReview(review?.id));
      }
    });
    history.replace(`/spots/${spotId}`);
  };

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
              <div id="title_div">
                <h1 id="detail_title">{oneSpot?.title}</h1>
              </div>
              <img className="detail_spot_image" src={oneSpot?.Images[0].url} alt="detail_img" /> 
              <div className="detail-content-main">
                <div className="detail-content-sub">
                  <h2 id="hosted_by">Hosted By: {oneSpot?.User?.username}</h2>
                <div>
                  <p id="detail">{`${oneSpot?.guests} guests ?? ${oneSpot?.bedrooms} bedrooms ?? ${oneSpot?.bathrooms} `}
                      {(oneSpot?.bathrooms !== 1) ? "baths" : "bath"}
                  </p>
                </div>
              {sessionUser?.id === oneSpot?.userId &&
              <div id="edit_delete_btn">
                <Link className="edit_spot_button" to={`/spots/${spotId}/host`}>Edit</Link>
                <button className="delete_spot_button" onClick={deleteButton}>Delete</button>
              </div>
              }
              <div id="det_information">
                <h3 className="detail-h3"><i className="fas i-list fa-home"></i>Entire Home</h3>
                <p className="details-spot">You'll have the entire home to yourself.</p>
                <h3 className="detail-h3"><i className="fas i-list fa-hand-sparkles"></i>Enhanced Clean</h3>
                <p className="details-spot">This Host committed to BnB SF's  enhanced cleaning process.</p>
                <h3 className="detail-h3"><i className="fas i-list fa-map-marker-alt"></i>Great check-in experience</h3>
                <p className="details-spot">100% of recent guests gave the check-in process a 5-star rating.</p>
                <h3 className="detail-h3"><i className="fas i-list fa-map-marker-alt"></i>Free cancellation for 48 hours</h3> 
              </div>
              <h2 id="desc">Description</h2> 
              <p id="description">{oneSpot?.description}
              <h2 id="spot"></h2></p> 
              <h3 id="amen">What amenities this place offers</h3> 
              <div className="icons_amenities">
                      <p>{(oneSpot?.Amenities[0]?.parking) ? <p><i className="fas symb fa-parking"></i>   Parking</p>: ''}</p>
                      <p>{(oneSpot?.Amenities[0]?.kitchen) ? <p><i className="fas symb fa-coffee"></i>   Kitchen</p>: ''}</p>
                      <p>{(oneSpot?.Amenities[0]?.patio) ? <p><i className="fas symb fa-sun"></i>   Patio</p>: ''}</p>
                      <p>{(oneSpot?.Amenities[0]?.pets) ? <p><i className="fas symb fa-paw"></i>   Pets</p>: ''}</p>
                
                      <p>{(oneSpot?.Amenities[0]?.gym) ? <p><i className="fas symb fa-dumbbell"></i>   Gym</p>: ''}</p>
                      <p>{(oneSpot?.Amenities[0]?.pool) ? <p><i className="fas symb fa-water"></i>   Pool</p>: ''}</p>
                      <p>{(oneSpot?.Amenities[0]?.hotTub) ? <p><i className="fas symb fa-water"></i>   Hot Tub</p>: ''}</p>
                  
              </div>
              <div className="rev-outer-div">
              <h2 id="user_rev"> User Reviews</h2>
              {reviewsObj.map((review) => (
                <div className="review-container" key={review?.id}>
                  {/* {review?.username} 
                  <div className="review-review"> */}
                  {review?.review}
                  <div className="buttons-container">
                  {review.userId === userId && (
                    <div className="edit-review-div">
                      <EditReviewModal review={review} />
                    </div>
                  )}
                  {review.userId === userId && (
                    <div className="delete-review-btn-div">
                      <button
                        className="delete-review-button"
                        onClick={() => handleDeleteReview(review?.id)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                  </div>
                </div>
            
              ))}
              <div>
                {(sessionUser?.id && sessionUser?.id !== oneSpot?.userId) &&
                <CreateReviewModal />}
              </div>
            </div>
            {(sessionUser?.id && sessionUser?.id !== oneSpot?.userId) &&
            <div className="booking-most-outer-div">
              <CreateBookingForm spotId={spotId} oneSpot={oneSpot} sessionUser={sessionUser} reviewsObj={reviewsObj}/>
            </div>}
          </div> 
        </div>
      </div>

    )
}

export default SpotDetail;