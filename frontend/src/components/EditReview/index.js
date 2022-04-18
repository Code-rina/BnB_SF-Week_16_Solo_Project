import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getReviews, updateReview } from "../../store/reviews";

const EditReviewForm = ({ review, closeModal }) => {
  const dispatch = useDispatch();
  const { spotId } = useParams();   
  const user = useSelector((state) => state.session.user);
  //   const spotId = useSelector((state) => state.spots[id].id);
  let rev = useSelector((state) => state?.reviews)
  console.log("rev", rev)
  const [rating, setRating] = useState(review?.rating);
  const [reviews, setReviews] = useState(review?.review);
  const [errorValidator, setErrorValidator] = useState([]);
  
  // console.log("reviewId", reviewId)
  // console.log("id", id)
  
  useEffect(() => {
    const errors = [];
    
    // if (!rating?.rate) errors.push("Please provide a rating");
    if (!reviews?.length) errors.push("Please provide a review");
    setErrorValidator(errors);
  }, [rating, reviews]);
  
  const handleSubmit = async (e) => {

    e.preventDefault();
    // console.log("33333333333", reviews);
    const payload = {
      id: review.id,
      userId: user.id,
      spotId: +spotId,
      rating,
      review: reviews,
    };
    // console.log("payload - 1st", payload);
    const updatedReview = await dispatch(updateReview(payload));
    if (updatedReview) {
      closeModal(false)
    }
  };
  //   const handleRating = (rate) => {
  //     setRating(rate);
  //   };
  // };

  return (
    <>
      <div className="edit-review-container">
        <form className="edit-review" onSubmit={handleSubmit}>
          <ul>
            {errorValidator.map((error) => (
              <li className="error-list" key={error}>
                {error}
              </li>
            ))}
          </ul>
          {/* <div className="rating">
            <label>Rating</label>
            <input
              type="number"
              placeholder="Rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div> */}
          <div className="review">
            <label id="ed_rev">Edit Your Review</label>
            <textarea
              id="texty"
              type="text"
              placeholder="Review"
              value={reviews}
              onChange={(e) => setReviews(e.target.value)}
            />
          </div>
          <button
            className="edit-review-button"
            type="submit"
            // disabled={errorValidator.length > 0}
          >
            Edit Review
          </button>
          <button
            className="cancel-edit-button"
            type="true"
            onClick={ closeModal }
          >
            Cancel
          </button>
        </form>
      </div>
    </>
  );
};

export default EditReviewForm;
