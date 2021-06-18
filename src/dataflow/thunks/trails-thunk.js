// Libs
import axios from 'axios';

import {
  getTrails,
} from '../modules/trails-module';

export const getTrailsThunk = () => async (dispatch) => {
  try {
    const response = await axios({
			method: 'get',
			url: `https://a19dfcwa29.execute-api.us-east-1.amazonaws.com/dev/embedTrails`,
			headers: {
				Authorization: "Bearer valeu",
			},
		})
    dispatch(getTrails(response.data));
  }
  catch (err) {
    console.log(err)
  }
}
