// Libs
import axios from 'axios';
import { Auth } from 'aws-amplify'

import {
  getTrails,
} from '../modules/trails-module';

export const getTrailsThunk = () => async (dispatch, getState) => {
  const { actionsBook } = getState()

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


    let trails = response.data.Items

    for(let i = 0; i<trails.length; i++) {
      for(let j = 0; j<trails[i].activities.length; j ++) {
        trails[i].activities[j] = {
          ...trails[i].activities[j],
          "status": "lasqueira" 
        }
      }
    }

    dispatch(getTrails(response.data.Items));
  }
  catch (err) {
    console.log(err)
  }
}

