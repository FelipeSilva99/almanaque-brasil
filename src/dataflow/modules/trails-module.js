// Action Type
const GET_TRAILS = 'almanaque/trails/GET_TRAILS';
const SELECTED_TRAILS = 'almanaque/trails/SELECTED_TRAILS';

// Store
const initialState = {
  data: [],
  selectedTrails: undefined,
};

// Reducer
export default function foo(state = initialState, action) {
  switch (action.type) {
    case GET_TRAILS: {
      return Object.assign({}, state, {
        ...state,
        data: action.trails
      });
    }

    case SELECTED_TRAILS: {
      return Object.assign({}, state, {
        selectedTrails: action.info,
      });
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

export const selectedTrails = (info) => {
  return {
    type: SELECTED_TRAILS,
    info,
  }
};
