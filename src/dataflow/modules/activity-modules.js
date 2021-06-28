// Action Type
const SELECTED_ACTIVITY = 'almanaque/trails/SELECTED_ACTIVITY';

// Store
const initialState = {
    activity: [],
};

// Reducer
export default function foo(state = initialState, action) {
  switch (action.type) {
      
    case SELECTED_ACTIVITY: {
      return Object.assign({}, state, {
        activity: action.info,
      });
    }

    default:
      return state;
  }
}


// Actions
export const selectedTrails = (info) => {
  return {
    type: SELECTED_ACTIVITY,
    info,
  }
};
