import React, { useState } from 'react'
import { Modal } from '../../context/Modal';
import Reviews from './createReview';
import "../ReviewsPage/reviews.css"
  

function CreateReviewModal({ review, closeModal }) {
    const [showModal, setShowModal] = useState(false);

    return (
      <div className="create-review-btn-div">
        <button className='create-review-button'  onClick={() => setShowModal(true)}>Create a Review</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <Reviews className='add-review-modal' review={review} closeModal={() => setShowModal(false)}/>
          </Modal>
        )}
      </div>
    );
  }

  export default CreateReviewModal;