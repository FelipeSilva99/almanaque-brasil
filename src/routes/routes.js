// Libs
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

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
import TrunkScreen from '../pages/activities/trunkScreen';
import Dashboard from '../pages/dashboard';

// import PrivateRoute from './PrivateRoute';
import {
	getTrailsThunk,
} from '../dataflow/thunks/trails-thunk';

const mapDispatchToProps = dispatch => ({
	getTrailsThunk: () => {
		dispatch(getTrailsThunk());
	},
});

const Routes = (props) => {
	useEffect(() => {
		props.getTrailsThunk();
	}, [props]);

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/createAccount' component={CreateAccount} />
				<Route exact path='/accountCreated' component={AccountCreated} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/resetPassword' component={ResetPassword} />
				<Route exact path='/dashboard' component={Dashboard} />
				<Route exact path='/trails' component={Trails} />
				<Route exact path='/activities/:trailId' component={Activities} />
				<Route exact path='/activities' component={ActivitiesList} />
				<Route exact path='/trunk' component={TrunkScreen} props={props} />
				{/* <PrivateRoute path='/documents' component={DocumentsScreen} /> */}
			</Switch>
		</BrowserRouter>
	)
};

export default connect(
	null,
	mapDispatchToProps
)(Routes);
