import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createReview } from "../../store/reviews";
// import StarRating from "../StarComponent/starRating";
import '../ReviewsPage/reviews.css'

function Reviews({ closeModal }) {
  const dispatch = useDispatch();
  const { spotId } = useParams();
  const userId = useSelector((state) => state.session.user?.id);
//   const spotId = useSelector((state) => state?.spots[spotId]?.spotId);
//   console.log("id!!!!!!!!!!!!!!!!",id)
  const history = useHistory();
  const [errors, setErrors] = useState([]);

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");



  const handleSubmit = async (e) => {
    // console.log(spotId)
    e.preventDefault();
    const payload = {
      userId,
      spotId,
      rating,
      review,
    };
    // console.log("payload", payload)
    const newReview = await dispatch(createReview(payload));
    // console.log("newReview", newReview)
    if (newReview) {
      // history.push(`/spots/${spotId}`);
      // reset();
      closeModal(false)
    }
  };
  const reset = () => {
    // setRating(0);
    setReview("");
  };

  const cancelButton = (e) => {
    history.push(`/spots/`);
  };
  function log(value) {
    console.log(value);
  }
  return (
    <div className="reviews_main_container">
      {/* <div className="all_reviews_container"> */}
        <h3 className="share-h3">Share your review</h3>
        <form className="reviews_form" onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, index) => (
              <li className="errors-modals" key={index}>• {error}</li>
            ))}
          </ul>
          {/* <div>
            <StarRating onChange={log} />
          </div> */}
          <div className="review-div">
            <label id="ed_rev"></label>
            <textarea
              id="review_texty"
              type="text"
              placeholder="Write Your Review here..."
              required
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
          <div className="create_review_div">
            <button
              className="create-review-button"
              type="submit"
              //   disabled={errorValidator.length > 0}
            >
              Submit a Review
            </button>
          </div>
          <div className="cancel_review_div">
            <button
              className="cancel-review-button"
              type="true"
              onClick={ closeModal }
            >
              Cancel
            </button>
          </div>
        </form>
      {/* </div> */}
    </div>
  );
}

export default Reviews;
