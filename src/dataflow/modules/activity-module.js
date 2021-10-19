// Action Type
const SELECTED_ACTIVITY = 'almanaque/activity/SELECTED_ACTIVITY';
const CLEAR_ACTIVITY = 'almanaque/activity/CLEAR_ACTIVITY';

// Store
const initialState = {
  selectedActivity: undefined,
};

// Reducer
export default function foo(state = initialState, action) {
  switch (action.type) {
    case SELECTED_ACTIVITY: {
      return Object.assign({}, state, {
        selectedActivity: action.info,
      });
    }

    case CLEAR_ACTIVITY: {
      return {
        initialState
      };
    }

    default:
      return state;
  }
}


// Actions
export const selectedActivity = (info) => {
  return {
    type: SELECTED_ACTIVITY,
    info,
  }
};

export const clearActivity = () => {
  return {
    type: CLEAR_ACTIVITY,
  }
}
