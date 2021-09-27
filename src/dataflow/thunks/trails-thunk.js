// Libs
import axios from 'axios';
import { Auth } from 'aws-amplify'

import {
  getTrails,
} from '../modules/trails-module';

export const getTrailsThunk = () => async (dispatch) => {

  const auth = await Auth.currentAuthenticatedUser()
  const idToken = auth.signInUserSession.idToken.jwtToken;

  try {
    const response = await axios({
			method: 'get',
			url: `${process.env.REACT_APP_TRAILS_ENDPOINT}`,
			headers: {
        'Content-Type': 'application/json',
				'Authorization': `${idToken}`,
			},
		})

    dispatch(getTrails(response.data.Items));
  }
  catch (err) {
    console.log(err)
  }
}

