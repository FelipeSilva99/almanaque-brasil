import { act } from "react-dom/cjs/react-dom-test-utils.production.min";

const SIGNIN = "SIGNIN";


// Reducer
export default function foo(state={user: {}}, action) {
  console.log("action", action)
  switch (action.type) {
    case SIGNIN: {
      return {
        ...state,
        user: action.info
      }
    }

    default:
      return state;
  }
}

//Actions
export const signIn = (info) => {
  return {
    type: SIGNIN,
    info,
  }
};
