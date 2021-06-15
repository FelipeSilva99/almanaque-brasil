// Action Type
const CREATE_NEW_TRAILS = 'almanaque/trails/CREATE_NEW_TRAILS';
const GET_TRAILS = 'almanaque/trails/GET_TRAILS';
const GET_ACTIVITIES = 'almanaque/activities/GET_ACTIVITIES'

// Store
const initialState = {
  data: [],
  isTrails: undefined,
};

// Reducer
export default function foo(state = initialState, action) {
  switch (action.type) {
    case CREATE_NEW_TRAILS:
      return {
        trails: !state.trails,
      }

    case GET_TRAILS: {
      return {
        ...state,
        data: action.trails
      }
    }

    default:
      return state;
  }
}


// Actions
export const createTrails = () => ({
  type: CREATE_NEW_TRAILS,
});


export const getTrails = (data) => {
  console.log("[ACTION] getTrails");
  return {
    type: GET_TRAILS,
    trails: data
  }
};
