import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { updateReview } from "../../store/reviews";

const EditReviewForm = ({ review, closeModal }) => {
  const dispatch = useDispatch();
  const { spotId } = useParams();   
  const user = useSelector((state) => state.session.user);

  const [rating, setRating] = useState(review?.rating);
  const [reviews, setReviews] = useState(review?.review);
  const [errorValidator, setErrorValidator] = useState([]);

  useEffect(() => {
    const errors = [];
    
    if (!reviews?.length) errors.push("Please provide a review");
    setErrorValidator(errors);
  }, [rating, reviews]);
  
  const handleSubmit = async (e) => {

    e.preventDefault();
    const payload = {
      id: review.id,
      userId: user.id,
      spotId: +spotId,
      rating,
      review: reviews,
    };
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
        <h3 className="share-h3">Edit your review</h3>
        <form className="edit-review" onSubmit={handleSubmit}>
          <ul>
            {errorValidator.map((error) => (
              <li className="errors-modals" key={error}>
                • {error}
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
          <div className="edit-review-div">
            <label id="ed_rev"></label>
            <textarea
              id="edit_review_texty"
              type="text"
              placeholder="Review"
              value={reviews}
              onChange={(e) => setReviews(e.target.value)}
            />
          </div>
          <div className="edit_review_div">
            <button
              className="edit-review-button-edit"
              type="submit"
              // disabled={errorValidator.length > 0}
            >
              Edit Review
            </button>
          </div>
          <div className="cancel_review_div">
            <button
              className="edit-cancel-review-button"
              type="true"
              onClick={ closeModal }
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditReviewForm;
