import { csrfFetch } from './csrf'

export const LOAD_SPOTS = "spots/LOAD_SPOTS"
// export const LOAD_SPOT = "spots/LOAD_SPOT"
// export const ADD_SPOT = "spots/ADD_SPOT"
// export const REMOVE_SPOT = "spots/REMOVE_SPOT"

export const loadSpots = (spotsList) => {
     return {
        type: LOAD_SPOTS,
        spotsList,
     }
 }

//  const loadOneSpot = (spot) => ({
//      type: LOAD_SPOT,
//      spot,
//  });

//  const addOneSpot = (spot) => ({
//      type: ADD_SPOT,
//      spot,
//  });
//  const removeSpot = (spot) => ({
//      type: REMOVE_SPOT,
//      spot
//  })

export const getAllSpots = () => async (dispatch) => {
    const res = await csrfFetch('api/spots')
    if(res.ok) {
        const spots = await res.json()
        dispatch(loadSpots(spots))
    }
}

// export const getOneSpot = (id) => async (dispatch) => {
//     const res = await csrfFetch(`/api/spots/${id}`)
//     if(res.ok) {
//         const spot = await Response.json()
//         dispatch(loadOneSpot(spot))
//     }
// }

const initialState = {
    spotsList: []
}

export default function spotsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_SPOTS: {
            const allSpots = {}
            action.spotsList.forEach(spot => {
                allSpots[spot.id] = spot
            })
            return{...allSpots, ...state.spotsList, spotsList: action.spotsList}  
        }
        // case LOAD_SPOT: {
        //     const newState = {...state,[action.spot.id]: action.spot}
        //     return newState;
        // }
        default:
            return state;
    }    
}
