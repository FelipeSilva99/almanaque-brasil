const SET_MODAL =  'almanaque/modals/SET_MODAL';
const CLEAR_MODALS_STATE =  'almanaque/modals/CLEAR_MODALS_STATE';

const initialState = {
  welcomeModal: {
    wasShowed: false
  }
}

export default function foo(state = initialState, action) {
  switch (action.type) {
    case SET_MODAL: {
      return {
        ...state,
        [action.info.modal]: {
          wasShowed: action.info.wasShowed
        }
      }
    }

    case CLEAR_MODALS_STATE: {
      return {
        welcomeModal: {
          wasShowed: false
        }
      };
    }

    default:
      return state;
  }
}

//Actions
export const setModal = (info) => {
  return {
    type: SET_MODAL,
    info,
  }
};

export const clearModalsState = () => {
  return {
    type: CLEAR_MODALS_STATE,
  }
}