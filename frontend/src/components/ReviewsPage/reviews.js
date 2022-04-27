import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux'



function Reviews({review, spotId}) {
    const sessionUser = useSelector((state) => state.session.user)
    const [sessionId, setSessionId] = useState()
    const [formData, setFormData] = useState({ reviews: "" })

    const user = useSelector((state) => state.session.user);
    useEffect(() => {
        if (sessionUser) {
            setSessionId(sessionUser.id)
        }
    }, [sessionUser])


    const handleReview = (e) => {
        setFormData({formData, [e.target.name]: e.target.value})
    }


    if (!user || !user.id) return null;
    return (
        <div className="reviews_main_container">
            <div className="all_reviews_container">

                <h3>Share your review</h3>
                <form id="ed_form">
                    <input
                     name="content"
                     type='text'
                     value={review}
                     onChange={handleReview}
                     />
                </form>
                <button className='review-submit' type="submit">
                    Submit
                </button>
            </div>


        </div>
    )

}

export default Reviews;











