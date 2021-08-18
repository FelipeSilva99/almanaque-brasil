// Action Type
const SIGNIN = "SIGNIN";
const SIGNOUT = 'SIGNOUT';

// Store
const initialState = {
  user: {},
};

// Reducer
export default function foo(state = initialState, action) {
  switch (action.type) {
    case SIGNIN: {
      return {
        ...state,
        user: action.info
      }
    }

    case SIGNOUT: {
      return {
        ...state,
        user: {}
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

export const signOut = () => ({
  type: SIGNOUT,
});
