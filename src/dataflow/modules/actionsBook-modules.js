// Action type
const REGISTER = 'REGISTER';


const initialState = []

// Reducer
export default function main(state=initialState, action) {
  switch (action.type) {
    case REGISTER:
      // let newActionsArray = state;
      // newActionsArray.actions.push(action.info)
      console.log([
        ...state,
        action.info
      ])
      return [
        ...state,
        action.info
      ];
  
    default:
      return state;
  }
}

// Actions
export function register (info) {

  console.log('Action')
  return {
    type: REGISTER,
    info
  }
}