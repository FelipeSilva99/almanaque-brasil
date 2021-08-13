// Libs
import axios from 'axios';

import {
  getTrails,
} from '../modules/trails-module';

export const getTrailsThunk = () => async (dispatch, getState) => {
  const accessToken = getState().login.user.signInUserSession.accessToken.jwtToken

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

