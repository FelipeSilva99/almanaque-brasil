// Action Type
const SAVE_THUNK = 'almanaque/trails/SAVE_THUNK';
const SELECTED_THUNK = 'almanaque/trails/SELECTED_THUNK';

// Store
const initialState = {
  data: [],
  selectedThunk: undefined,
};

// Reducer
export default function foo(state = initialState, action) {
  switch (action.type) {
    case SAVE_THUNK: {
      console.log()
      return Object.assign({}, state, {
        ...state,
        data: action.thunk
      });
    }

    case SELECTED_THUNK: {
      return Object.assign({}, state, {
        selectedTrails: action.info,
      });
    }

    default:
      return state;
  }
}


// Actions
export const saveThunk = (data) => {
  return {
    type: SAVE_THUNK,
    thunk: data
  }
};

export const selectedThunk = (info) => {
  return {
    type: SELECTED_THUNK,
    info,
  }
};
