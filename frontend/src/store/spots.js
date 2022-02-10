import { csrfFetch } from './csrf';

const LOAD_ALL = 'spots/LOAD_ALL';
const LOAD_ONE = 'spots/LOAD_ONE';
const ADD_SPOT = "spots/ADD_SPOT"
const REMOVE_SPOT = "spots/REMOVE_SPOT"

const loadAll = (list) => ({
    type: LOAD_ALL,
    list
})

const loadOne = (spot) => ({
    type: LOAD_ONE,
    spot
})

const addOneSpot = (spot) => ({
    type: ADD_SPOT,
    spot,
});

 const removeOneSpot = (spotId) => ({
     type: REMOVE_SPOT,
     spotId,
 })

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
export const addSpot = (spot) => async (dispatch) => {
    const res = await csrfFetch(`/api/spots/host`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(spot)
    })
    if (!res.ok) {
        let error = await res.json();
        return error;
    }
    const payload = await res.json()
    dispatch(addOneSpot(payload))
    return payload;
}

export const editSpot = (spot, id) => async (dispatch) => {
    const res = await csrfFetch(`/api/spots/${id}/host`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(spot)
    })
    if(!res.ok) {
        let error = await res.json();
        return error
    }
    const payload = await res.json();
    await dispatch(addOneSpot(payload))

    return payload;
}

export const removeSpot = (payload, id) => async (dispatch) => {
    const res = await csrfFetch(`/api/spots/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': "application/json"},
        body: JSON.stringify(payload,id)
    })
    if (res.ok) {
        const spot = await res.json()
        await dispatch(removeOneSpot(spot))
        return spot
    }
}


const initialState = { 
    list : [],
 };

const spotsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ALL: {
            const allSpots = {}
            action.list.forEach(spot => {
                allSpots[spot.id] = spot
            });
            return{
                ...allSpots,
                ...state.list, 
                list: action.list
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
            const spotList = newState.list.map(id => newState[id]);
            spotList.push(action.spot)
            newState.list = action.list;
            return newState;
        }
        return {...state, [action.spot.id]: {...state[action.spot.id], ...action.spot}}
    }
    case REMOVE_SPOT: {
        const newState = {...state}
        delete newState[action.spotId];
        return newState;
    }
    default:
        return state;
    }
}

export default spotsReducer;