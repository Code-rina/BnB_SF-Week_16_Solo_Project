import { csrfFetch } from "./csrf";

const GET_BOOKINGS = '/bookings/GET_BOOKINGS';
const CREATE_BOOKING = '/bookings/CREATE_BOOKING'
const DELETE_BOOKING = '/bookings/DELETE_BOOKING'


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

const deleteBookingAction = (booking) => {
  return {
    type: DELETE_BOOKING,
    booking,
  }
}



// ---------------------------------

export const getBookingsThunk = (bookings) => async (dispatch) => {

    const response = await csrfFetch(`/api/bookings/`);

    if (response.ok) {
      const data = await response.json();
      dispatch(getAllBookingsAction(data));

    }
  };

  export const createBookingThunk = (booking) => async (dispatch) => {
   
    const response = await csrfFetch(`/api/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(booking)
    });
    
    if(response.ok) {
      const data = await response.json();
      dispatch(createBookingAction(data))
      return data
    }
  }

  export const deleteBookingThunk = (bookingId) => async (dispatch) => {
    console.log("THUNK - bookingId-----", bookingId)
    const response = await csrfFetch(`/api/bookings/${bookingId}`, {
      method: "DELETE",
    });
    console.log("response-----", response)
    if (response.ok) {
      const data = await response.json();
      dispatch(deleteBookingAction(bookingId));
      console.log("data----", data)
      return data;
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
          newState[action.booking.id] = action.booking;     
        return newState;
      case DELETE_BOOKING:
        const removeState = { ...state };
        delete removeState[action.booking];
        console.log("removeState-----", removeState)
        return removeState;
      default:
        return { ...state };
    }
  };
  
  export default bookingsReducer;