import {createStore, applyMiddleware, combineReducers} from 'redux';

import thunkMiddleware from 'redux-thunk';
import {logger} from 'redux-logger';
import {composeWithDevTools} from 'remote-redux-devtools';

// Reducers
import Trails from './modules/trails-module';

const reducers = combineReducers({
  trails: Trails,
});

function configureStore(initialState) {
  const bundle = composeWithDevTools(applyMiddleware(thunkMiddleware, logger));
  const createStoreWithMiddleware = bundle(createStore);
  const store = createStoreWithMiddleware(
    reducers,
    initialState,
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  );
  return store;
}

export default configureStore({});
