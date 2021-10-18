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

const reducers = combineReducers({
  trails: TrailsReducer,
  login: LoginReducer,
  modals: ModalsReducer,             
  actionsBook: ActionsBookReducer,
  thunk: ThunkReducer,
  activity: ActivityReducer,
});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);
const bundle = compose(applyMiddleware(thunkMiddleware));
const createStoreWithMiddleware = bundle(createStore);

export const store = createStoreWithMiddleware(
  persistedReducer,
  {},
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

export const persistor = persistStore(store);