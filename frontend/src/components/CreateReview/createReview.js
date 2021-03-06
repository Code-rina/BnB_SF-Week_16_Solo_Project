import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { createReview } from "../../store/reviews";
import '../ReviewsPage/reviews.css'

function Reviews({ closeModal }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { spotId } = useParams();

  const userId = useSelector((state) => state.session.user?.id);
  const [errors, setErrors] = useState([]);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");


  const handleSubmit = async (e) => {

    e.preventDefault();
    const payload = {
      userId,
      spotId,
      rating,
      review,
    };

    const newReview = await dispatch(createReview(payload));

    if (newReview) {
      closeModal(false)
    }
  };


  return (
    <div className="reviews_main_container">
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
    </div>
  );
}

export default Reviews;
