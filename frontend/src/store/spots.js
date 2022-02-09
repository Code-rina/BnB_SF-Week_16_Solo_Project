import { csrfFetch } from './csrf';

const LOAD_ALL = 'spots/loadAll';
const LOAD_ONE = 'spot/lostOne';
// const ADD_SPOT = "spots/ADD_SPOT"
// export const REMOVE_SPOT = "spots/REMOVE_SPOT"

const loadAll = (spotslist) => ({
    type: LOAD_ALL,
    spotslist
})

const loadOne = (spot) => ({
    type: LOAD_ONE,
    spot
})



//  const removeOneSpot = (spotId) => ({
//      type: REMOVE_SPOT,
//      spotId,
//  })

export const getAllSpots = () => async (dispatch) => {
    const res = await csrfFetch(`/api/spots`);

    if (res.ok) {
        const spots = await res.json();
        dispatch(loadAll(spots));
    }
};

export const getOneSpot = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/spots/${id}`) 

    if(res.ok) {
        const spot = await res.json()
        dispatch(loadOne(spot))
    }
}



const initialState = { 
    spotslist : [],
 };

 const spotsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ALL: {
            const allSpots = {}
            action.spotslist.forEach(spot => {
                allSpots[spot.id] = spot
            });
            return{
                ...allSpots,
                ...state.spotslist, 
                spotslist: action.spotslist
            }
        }
        case LOAD_ONE: {
                const newState = {
                    ...state,
                    [action.spot.id]: action.spot
                };
            return newState;
        }
        default:
            return state;
        }
    }

    export default spotsReducer;