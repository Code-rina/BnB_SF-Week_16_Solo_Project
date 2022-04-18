import React, { useState } from 'react'
import { Modal } from '../../context/Modal';
import EditReviewForm from './index.js';
import "./EditReview.css"


function EditReviewModal({review}) {
  console.log("Modal-review", review)
    const [showModal, setShowModal] = useState(false);

    return (
      <div>
        <button className='edit-review-button'  onClick={() => setShowModal(true)}>Edit Review</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <EditReviewForm className='add-review-modal' review={review} closeModal={() => setShowModal(false)}/>
          </Modal>
        )}
      </div>
    );
  }

  export default EditReviewModal;