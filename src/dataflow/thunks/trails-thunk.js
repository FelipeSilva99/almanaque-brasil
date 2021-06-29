// Libs
import axios from 'axios';

import {
  getTrails,
} from '../modules/trails-module';

export const getTrailsThunk = () => async (dispatch) => {
  try {
    const response = await axios({
			method: 'get',
			url: `https://a19dfcwa29.execute-api.us-east-1.amazonaws.com/dev/trails`,
			headers: {
				Authorization: "Bearer valeu",
			},
		})
    dispatch(getTrails(response.data.Items));
  }
  catch (err) {
    console.log(err)
  }
}

