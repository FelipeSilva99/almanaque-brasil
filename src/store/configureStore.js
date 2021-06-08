
// Libs
import {
	compose, createStore, applyMiddleware, combineReducers,
} from 'redux';
import thunkMiddleware from 'redux-thunk';

// Reducers
import TrailsReducer from '../dataflow/modules/trails-module';
import ActivitiesReducer from '../dataflow/modules/activities-module';

const reducers = combineReducers({
  trails: TrailsReducer,
	activities: ActivitiesReducer
});

export default function configureStore(initialState) {
	const bundle = compose(applyMiddleware(thunkMiddleware));
	const createStoreWithMiddleware = bundle(createStore);
	const store = createStoreWithMiddleware(
		reducers,
		initialState,
		window.devToolsExtension ? window.devToolsExtension() : f => f,
	);

	return store;
}