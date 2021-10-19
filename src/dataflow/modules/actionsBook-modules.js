// Action type
const REGISTER = 'actionsBook/REGISTER';
const REFRESH_LOCAL_DATA = 'actionsBook/REFRESH_LOCAL_DATA';
const SYNCED = 'actionsBook/SYNCED';
const CLEAR = 'actionsBook/CLEAR';

const initialState = {
  pendingSync: [],
  synced: []
}

// Reducer
export default function main(state = initialState, action) {

  switch (action.type) {
    case REGISTER:
      const newArray = state.pendingSync;
      newArray.push(action.info)
      return {
        synced: [...state.synced],
        pendingSync: newArray
      }

    case REFRESH_LOCAL_DATA:
      return {
        synced: [...action.info],
        pendingSync: [],
      }

    case SYNCED:
      const syncedArray = state.synced;
      if(state.pendingSync.length > 0) {
      state.pendingSync.map(item => syncedArray.push(item))
      }

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
export function register(info) {
  return {
    type: REGISTER,
    info
  }
}

export function clearActionsBook() {
  return {
    type: CLEAR,
  }
}

export function synced() {
  return {
    type: SYNCED,
  }
}

export function refreshLocalData(info) {
  return {
    type: REFRESH_LOCAL_DATA,
    info
  }
}