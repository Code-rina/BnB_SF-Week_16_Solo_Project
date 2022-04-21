import { csrfFetch } from "./csrf";

const GET_BOOKINGS = '/bookings/GET_BOOKINGS';



// ---------------------------------
const getAllBookingsAction = (bookings) => {
    return {
        type: GET_BOOKINGS,
        bookings,
    };
};



// ---------------------------------

export const getBookingsThunk = (bookings) => async (dispatch) => {
    console.log("2nd - bookings", bookings)
    const response = await csrfFetch(`/api/bookings/`);
    console.log("4th - response", response)
    if (response.ok) {
      const data = await response.json();
      dispatch(getAllBookingsAction(data));
      console.log("5th - bookings-data", data)
    }
  };


  // ----------------------------------

  const bookingsReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_BOOKINGS:
        const newState = {};
        action.bookings.forEach((booking) => {
          newState[booking.id] = booking;
        });
        console.log("6th - newState", newState)
        return newState;
    //   case CREATE_REVIEW:
    //     const newState = { ...state };
    //     newState[action.review.id] = action.review;
    //     return newState;
    //   case EDIT_REVIEW:
    //     const editState = { ...state };
    //     editState[action.reviewId.id] = action.reviewId;
    //     console.log("editState", editState)
    //     return editState;
    //   case DELETE_REVIEW:
    //     const removeState = { ...state };
    //     delete removeState[action.reviewId];
    //     return removeState;
      default:
        return { ...state };
    }
  };
  
  export default bookingsReducer;