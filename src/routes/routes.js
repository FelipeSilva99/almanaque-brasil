// Libs
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute'

// Onboarding
import Home from '../pages/onboarding/login/home';
import Login from '../pages/onboarding/login/login';
import CreateAccount from '../pages/onboarding/createAccount';
import AccountCreated from '../pages/onboarding/createAccount/accountCreated';
import ResetPassword from '../pages/onboarding/resetPassword';

// import Login from '../pages/login';
import Trails from '../pages/trails';
import Activities from '../pages/activities';
import ActivitiesList from '../pages/activities/activitiesList';
import Trunk from '../pages/trunk';
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
				<Route exact path='/' component={Home} />
				<Route exact path='/createAccount' component={CreateAccount} />
				<Route exact path='/accountCreated' component={AccountCreated} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/resetPassword' component={ResetPassword} />
				<PrivateRoute exact path='/dashboard' component={Dashboard} />
				<PrivateRoute exact path='/trails' component={Trails} />
				<PrivateRoute exact path='/activities/:trailId' component={Activities} />
				<PrivateRoute exact path='/activities' component={ActivitiesList} />
				<PrivateRoute exact path='/trunk' component={Trunk} props={props} />
			</Switch>
		</BrowserRouter>
	)
};

export default connect(
	null,
	mapDispatchToProps
)(Routes);
