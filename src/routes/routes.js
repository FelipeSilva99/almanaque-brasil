// Libs
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Onboarding
// import Login from '../screens/onboarding/Login/LoginScreen';

// import Login from '../pages/login';
import Home from '../pages/home';
import Trails from '../pages/trails';
import Activities from '../pages/actitivities';
import CorrectAnswer from '../pages/trails/correctAnswer';
import { fetchWrapper } from 'workbox-core/_private';

// import PrivateRoute from './PrivateRoute';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			{/* <Route exact path='/' component={Login} /> */}
			<Route exact path='/' component={Home} />
			<Route exact path='/trails' component={Trails} />
			<Route exact path='/activities/:trailId' component={CorrectAnswer} />
			<Route exact path='/activities/correctAnswer' component={CorrectAnswer} />
			{/* <PrivateRoute path='/documents' component={DocumentsScreen} /> */}
		</Switch>
	</BrowserRouter>
);

export default Routes;
