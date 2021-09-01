// Action type
const REGISTER = 'REGISTER';
const CLEAR = 'CLEAR';

const initialState = []

// Reducer
export default function main(state=initialState, action) {
  switch (action.type) {
    case REGISTER:
      return [
        ...state,
        action.info
      ];

    case CLEAR:
      return []
  
    default:
      return state;
  }
}

// Actions
export function register (info) {
  return {
    type: REGISTER,
    info
  }
}

export function clearActionsBook () {
  return {
    type: CLEAR,
  }
}