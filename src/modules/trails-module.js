// Action Type
const CREATE_NEW_TRAILS = 'almanaque/trails/CREATE_NEW_TRAILS';

// Store
const initialState = {
  isTrails: undefined,
};

// Reducer
export default function foo(state = initialState, action) {
  switch (action.type) {
    case CREATE_NEW_TRAILS:
      return Object.assign({}, state, {
        isTrails: !state.isTrails,
      });
    default:
      return state;
  }
}

// Actions
export const createTrails = () => ({
  type: CREATE_NEW_TRAILS,
});
