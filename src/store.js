
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
import ActivitiesReducer from './dataflow/modules/activities-module';

const reducers = combineReducers({
  trails: TrailsReducer,
	activities: ActivitiesReducer
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