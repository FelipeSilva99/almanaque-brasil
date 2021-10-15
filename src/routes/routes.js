// Libs
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute'
import UnauthenticatedRoute from './UnauthenticatedRoute';

// Onboarding
import Home from '../pages/onboarding/login/home';
import Login from '../pages/onboarding/login';
import CreateAccount from '../pages/onboarding/createAccount';
import AccountCreated from '../pages/onboarding/createAccount/accountCreated';
import ResetPassword from '../pages/onboarding/resetPassword';

import Trails from '../pages/trails';
import Activities from '../pages/activities';
import ActivitiesList from '../pages/activities/activitiesList';
import Trunk from '../pages/trunk';
import Config from '../pages/config'
import Dashboard from '../pages/dashboard';

// import PrivateRoute from './PrivateRoute';
import {
	getTrailsThunk,
} from '../dataflow/thunks/trails-thunk';

const mapDispatchToProps = dispatch => {
	return {
		getTrailsThunk: (accessToken) => {
			dispatch(getTrailsThunk(accessToken));
		},
	}
};

const Routes = (props) => {

	return (
		<BrowserRouter>
			<Switch>
				<UnauthenticatedRoute exact path='/' component={Home} />
				<UnauthenticatedRoute exact path='/createAccount' component={CreateAccount} />
				<UnauthenticatedRoute exact path='/accountCreated' component={AccountCreated} />
				<UnauthenticatedRoute exact path='/login' component={Login} />
				<UnauthenticatedRoute exact path='/resetPassword' component={ResetPassword} />
				<PrivateRoute exact path='/dashboard' component={Dashboard} />
				<PrivateRoute exact path='/trails' component={Trails} />
				<PrivateRoute exact path='/activities/:trailId' component={Activities} />
				<PrivateRoute exact path='/activities' component={ActivitiesList} />
				<PrivateRoute exact path='/trunk' component={Trunk} props={props} />
				<PrivateRoute exact path='/config' component={Config} />
			</Switch>
		</BrowserRouter>
	)
};

export default connect(
	null,
	mapDispatchToProps
)(Routes);
