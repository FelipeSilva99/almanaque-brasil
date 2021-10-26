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
import Config from '../pages/config';
import Tutorial from '../pages/tutorial';
import Terms from '../pages/termsOfUse';
import Thanks from '../pages/config/thanks';
import NeedHelp from '../pages/config/needHelp';
import Dashboard from '../pages/dashboard';

//Redux
import { getTrailsThunk } from '../dataflow/thunks/trails-thunk';

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
				<UnauthenticatedRoute exact path='/cadastro' component={CreateAccount} />
				<UnauthenticatedRoute exact path='/conta-criada' component={AccountCreated} />
				<UnauthenticatedRoute exact path='/login' component={Login} />
				<UnauthenticatedRoute exact path='/redefinir-senha' component={ResetPassword} />
				<UnauthenticatedRoute exact path='/termos-de-uso' component={Terms} />
				<PrivateRoute exact path='/dashboard' component={Dashboard} />
				<PrivateRoute exact path='/trilhas' component={Trails} />
				<PrivateRoute exact path='/atividade/:trailId' component={Activities} />
				<PrivateRoute exact path='/atividades' component={ActivitiesList} />
				<PrivateRoute exact path='/bau' component={Trunk} props={props} />
				<PrivateRoute exact path='/config' component={Config} />
				<PrivateRoute exact path='/config/tutorial' component={Tutorial} />
				<PrivateRoute exact path='/config/tutorial/:title' component={Tutorial} />
				<PrivateRoute exact path='/config/termos-de-uso' component={Terms} />
				<PrivateRoute exact path='/config/agradecimentos' component={Thanks} />
				<PrivateRoute exact path='/config/precisa-de-ajuda' component={NeedHelp} />
			</Switch>
		</BrowserRouter>
	)
};

export default connect(
	null,
	mapDispatchToProps
)(Routes);
