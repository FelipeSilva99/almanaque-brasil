// Libs
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Trails from '../components/trails';

// Onboarding
// import Login from '../screens/onboarding/Login/LoginScreen';

import Login from '../pages/login';
import { fetchWrapper } from 'workbox-core/_private';

// import PrivateRoute from './PrivateRoute';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			{/* <Route exact path='/' component={Login} /> */}
			<Route exact path='/' component={Trails} />
			{/* <Route exact path='/' component={Login} /> */}
			{/* <PrivateRoute path='/documents' component={DocumentsScreen} /> */}
		</Switch>
	</BrowserRouter>
);

export default Routes;
