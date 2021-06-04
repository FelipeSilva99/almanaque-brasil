// Libs
import axios from 'axios';

import {
  getTrails
} from '../modules/trails-module';


export const getTrailsThunk = () => async (dispatch) => {
	console.log('TRy')
  // dispatch(getTrails({data: "fake"}))
  try {
    const response = await axios({
			method: 'get',
			url: `https://a19dfcwa29.execute-api.us-east-1.amazonaws.com/dev/trails`,
			headers: {
				Authorization: "Bearer valeu",
			},
		})
		console.log(response.data)
    dispatch(getTrails(response.data));
  }
  catch (err) {
		console.log(err)
  }
}

export const getActivitie = (id) => async (dispatch) => {
	console.log('TRy')
  // dispatch(getTrails({data: "fake"}))
  try {
    const response = await axios({
			method: 'get',
			url: `https://a19dfcwa29.execute-api.us-east-1.amazonaws.com/dev/trails`,
			headers: {
				Authorization: "Bearer valeu",
			},
		})
		console.log(response.data)
    dispatch(getTrails(response.data));
  }
  catch (err) {
		console.log(err)
  }
}
