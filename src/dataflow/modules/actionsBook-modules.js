// Action type
const REGISTER = 'actionsBook/REGISTER';
const SYNCED = 'actionsBook/SYNCED';
const CLEAR = 'actionsBook/CLEAR';

const initialState = {
  pendingSync: [],
  synced: []
}

// Reducer
export default function main(state=initialState, action) {

  switch (action.type) {
    case REGISTER:
      const newArray = state.pendingSync;
      newArray.push(action.info)
      return {
        synced: [...state.synced],
        pendingSync: newArray
      }

    case SYNCED:
      const syncedArray = state.synced;
      // if(state.pendingSync.length > 0) {
        console.log('teste')
        state.pendingSync.map(item => syncedArray.push(item))
      // }

      return {
        pendingSync: [],
        synced: syncedArray
      }

    case CLEAR:
      return initialState
  
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

export function synced () {
  return {
    type: SYNCED,
  }
}