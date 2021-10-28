// Libs
import {
  compose, createStore, applyMiddleware, combineReducers,
} from 'redux';
import thunkMiddleware from 'redux-thunk';

// redux-persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

// Reducers
import TrailsReducer from './dataflow/modules/trails-module';
import LoginReducer from './dataflow/modules/signIn-modules';
import ActionsBookReducer from './dataflow/modules/actionsBook-modules';
import ThunkReducer from './dataflow/modules/thunk-module';
import ModalsReducer from './dataflow/modules/modals-module';
import ActivityReducer from './dataflow/modules/activity-module';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['thunk', 'login', 'actions-book', 'trails']
}

const thunkPersistConfig = {
  key: 'thunk',
  storage,
  blacklist: ['somethingTemporary']
}

const loginPersistConfig = {
  key: 'login',
  storage,
  blacklist: ['somethingTemporary']
}

const actionsBookPersistConfig = {
  key: 'actions-book',
  storage,
  blacklist: ['somethingTemporary']
}

const trailsPersistConfig = {
  key: 'trails',
  storage,
  blacklist: ['somethingTemporary']
}


const rootReducer = combineReducers({
  trails: persistReducer(trailsPersistConfig, TrailsReducer),
  login: persistReducer(loginPersistConfig, LoginReducer),
  modals: ModalsReducer,             
  actionsBook: persistReducer(actionsBookPersistConfig, ActionsBookReducer),
  thunk: persistReducer(thunkPersistConfig, ThunkReducer),
  activity: ActivityReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
const bundle = compose(applyMiddleware(thunkMiddleware));
const createStoreWithMiddleware = bundle(createStore);

export const store = createStoreWithMiddleware(
  persistedReducer,
  {},
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

export const persistor = persistStore(store);