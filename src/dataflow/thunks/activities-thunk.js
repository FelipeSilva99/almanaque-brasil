import axios from 'axios'

import { getActivities } from '../modules/activities-module'

export const getActivitiesThunk = (trailId) => async (dispatch) => {

  // dispatch(getTrails({data: "fake"}))
  try {
    const response = await axios({
			method: 'get',
			url: `https://a19dfcwa29.execute-api.us-east-1.amazonaws.com/dev/activities/${trailId}`,
			headers: {
				Authorization: "Bearer valeu",
			},
		})
    console.log(response.data)
    dispatch(getActivities(response.data));
  }
  catch (err) {
		console.log(err)
  }
}