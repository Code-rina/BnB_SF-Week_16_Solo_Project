import { csrfFetch } from "./csrf";

const GET_BOOKINGS = '/bookings/GET_BOOKINGS';
const CREATE_BOOKING = '/bookings/CRETAE_BOOKING'



// ---------------------------------
const getAllBookingsAction = (bookings) => {
    return {
        type: GET_BOOKINGS,
        bookings,
    };
};

const createBookingAction = (booking) => {
  return {
    type: CREATE_BOOKING,
    booking,
  }
}



// ---------------------------------

export const getBookingsThunk = (bookings) => async (dispatch) => {
    // console.log("2nd - bookings", bookings)
    const response = await csrfFetch(`/api/bookings/`);
    // console.log("4th - response", response)
    if (response.ok) {
      const data = await response.json();
      dispatch(getAllBookingsAction(data));
      // console.log("5th - bookings-data", data)
    }
  };

  export const createBookingThunk = (booking) => async (dispatch) => {
    console.log("POST-booking********", booking)
    const response = await csrfFetch(`/api/bookings/`);
    console.log("POST-response********", response)
    if(response.ok) {
      const data = await response.json();
      dispatch(createBookingAction(data))
    }
  }


  // ----------------------------------

  const bookingsReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
      case GET_BOOKINGS:
        newState = {};
        action.bookings.forEach((booking) => {
          newState[booking.id] = booking;
        });
        return newState;
        case CREATE_BOOKING:
          newState = { ...state };
          newState[action.booking.id] = action.bookings;
          console.log("POST-newState*****", newState)
        return newState;
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