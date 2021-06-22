const GET_ACTIVITIES = 'almanaque/activities/GET_ACTIVITIES';

const INITIAL_STATE = {
  data: [],
}

// Reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ACTIVITIES:
      return {
        ...state,
        data: action.data,
      }

    default:
      return state;
  }
}

// Actions
export const getActivities = (data) => {
  return {
    type: GET_ACTIVITIES,
    data: data
  }
}
