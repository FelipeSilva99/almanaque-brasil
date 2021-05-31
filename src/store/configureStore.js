
// Libs
import {
	compose, createStore, applyMiddleware, combineReducers,
} from 'redux';
import thunkMiddleware from 'redux-thunk';

// Reducers
import Trails from '../modules/trails-module';

const reducers = combineReducers({
  trails: Trails,
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