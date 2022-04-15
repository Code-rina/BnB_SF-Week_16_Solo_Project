import React, { useState } from 'react'
import { Modal } from '../../context/Modal';
import EditReviewForm from './EditReviewForm';
import "./EditReviewForm"


function EditReviewModal() {
    const [showModal, setShowModal] = useState(false);

    return (
      <div>
        <button className='edit-review-button' onClick={() => setShowModal(true)}>Edit Review</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <EditReviewForm className='add-review-modal' closeModal={() => setShowModal(false)}/>
          </Modal>
        )}
      </div>
    );
  }

  export default EditReviewModal;