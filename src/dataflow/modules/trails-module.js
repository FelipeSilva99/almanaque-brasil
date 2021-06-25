// Action Type
const GET_TRAILS = 'almanaque/trails/GET_TRAILS';

// Store
const initialState = {
  data: [],
  trails: undefined,
};

// Reducer
export default function foo(state = initialState, action) {
  switch (action.type) {
    case GET_TRAILS: {
      return {
        ...state,
        data: action.trails
      }
    }

    default:
      return state;
  }
}


// Actions
export const getTrails = (data) => {
  return {
    type: GET_TRAILS,
    trails: data
  }
};
