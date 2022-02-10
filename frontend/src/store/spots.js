import { csrfFetch } from './csrf';

const LOAD_ALL = 'spots/LOAD_ALL';
const LOAD_ONE = 'spots/LOAD_ONE';
const ADD_SPOT = "spots/ADD_SPOT"
// export const REMOVE_SPOT = "spots/REMOVE_SPOT"

const loadAll = (spotslist) => ({
    type: LOAD_ALL,
    spotslist
})

const loadOne = (spot) => ({
    type: LOAD_ONE,
    spot
})

const addOneSpot = (spot) => ({
    type: ADD_SPOT,
    spot,
});

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
export const addSpot = (payload) => async (dispatch) => {
    const res = await csrfFetch(`/api/spots/host`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    // if (!res.ok) {
    //     let error = await res.json();
    //     return error;
    // }
    const spot = await res.json()
    dispatch(addOneSpot(spot))
    return spot;
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
    
        case ADD_SPOT: {
            if(!state[action.spot.id]) {
                const newState = {...state, [action.spot.id]: action.spot}
            const list = newState.spotslist.map(id => newState[id]);
            list.push(action.spot)
            newState.spotslist = list;
            return newState;
        }
    }
    default:
        return state;
    }
}

export default spotsReducer;