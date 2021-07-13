import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from 'react-redux';

// Routes
import Routes from './routes/routes';

ReactDOM.render((
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<Routes />
		</PersistGate>
	</Provider>
), document.getElementById('root'));

serviceWorkerRegistration.register();
