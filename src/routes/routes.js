// Libs
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';


// Onboarding
// import Login from '../screens/onboarding/Login/LoginScreen';

// import Login from '../pages/login';
import Trails from '../pages/trails';
import Activities from '../pages/actitivities';

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
	}, []);

	return (
		<BrowserRouter>
			<Switch>
				{/* <Route exact path='/' component={Login} /> */}
				<Route exact path='/' component={Trails} />
				<Route exact path='/trails' component={Trails} />
				<Route exact path='/activities/:trailId' component={Activities} />
				{/* <PrivateRoute path='/documents' component={DocumentsScreen} /> */}
			</Switch>
		</BrowserRouter>
	)
};

export default connect(
	null,
	mapDispatchToProps
)(Routes);
