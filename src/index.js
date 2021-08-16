import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from 'react-redux';
import Amplify from 'aws-amplify';

// Routes
import Routes from './routes/routes';

Amplify.configure({
	Auth: {
		userPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
		userPoolWebClientId: process.env.REACT_APP_COGNITO_WEB_CLIENT_ID,
		clientId: process.env.REACT_APP_COGNITO_WEB_CLIENT_ID,
		region: process.env.REACT_APP_COGNITO_REGION,
	}
});


ReactDOM.render((
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<Routes />
		</PersistGate>
	</Provider>
), document.getElementById('root'));

serviceWorkerRegistration.register();
