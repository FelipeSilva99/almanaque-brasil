// Action type
const REGISTER = 'REGISTER';


const initialState = {
  actions: []
}

// Reducer
export default function main(state=initialState, action) {
  switch (action) {
    case REGISTER:
      let newActionsArray = state;
      newActionsArray.actions.push(action.info)
      return {
        ...newActionsArray,
      };
  
    default:
      return state;
  }
}

// Actions
export function register(info) {
  return {
    type: REGISTER,
    info
  }
}