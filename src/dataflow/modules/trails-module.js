// Action Type
const CREATE_NEW_TRAILS = 'almanaque/trails/CREATE_NEW_TRAILS';
const GET_TRAILS_STARTED = 'almanaque/trails/GET_TRAILS_STARTED'; 
const GET_TRAILS_FAILURE = 'almanaque/trails/GET_TRAILS_FAILURE';
const GET_TRAILS_SUCCESS = 'almanaque/trails/GET_TRAILS_SUCCESS';

// Store
const initialState = {
  trails: undefined,
};

// Reducer
export default function foo(state = initialState, action) {
  switch (action.type) {
    case CREATE_NEW_TRAILS:
      return {
        trails: !state.trails,
      }

    case GET_TRAILS_STARTED: {
      return {
        ...state,
        data: action.data
      }
    }

    // case GET_TRAILS_SUCCESS: {
    //   return {
    //     ...state,
    //     data: 
    //   }
    // }

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
    type: GET_TRAILS_SUCCESS,
    data: data
  }
};

export const getTrailsStarted = () => {
  return {
    type: GET_TRAILS_STARTED,
  };
};

export const getTrailsSuccess = (data, selectedChamp) => {

  return {
    type: GET_TRAILS_SUCCESS,
    selectedChamp: selectedChamp,
    payload: {
      ...data
    }
  };
};

const getTrailsFailure = (err) => {
  return {
    type: GET_TRAILS_FAILURE,
    payload: {
      err
    }
  };
};
