// Libs
import axios from 'axios';
import { Auth } from 'aws-amplify'

import {
  getTrails,
} from '../modules/trails-module';

export const getTrailsThunk = () => async (dispatch) => {

  const auth = await Auth.currentAuthenticatedUser()
  const accessToken = auth.signInUserSession.accessToken.jwtToken

  try {
    const response = await axios({
			method: 'get',
			url: `https://a19dfcwa29.execute-api.us-east-1.amazonaws.com/dev/trails`,
			headers: {
        'Content-Type': 'application/json',
				'Authorization': `${accessToken}`,
			},
		})
    dispatch(getTrails(response.data.Items));
  }
  catch (err) {
    console.log(err)
  }
}

