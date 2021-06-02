// Libs
import axios from 'axios';

import {
  getTrails
} from '../modules/trails-module';


// export const getTrailsThunk = () => {
// 	console.log('Fora do async');

//  	async (dispatch) => {
// 		console.log('Dentro do async')
// 		await axios({
// 			method: 'get',
// 			url: `https://a19dfcwa29.execute-api.us-east-1.amazonaws.com/dev/trails`,
// 			headers: {
// 				Authorization: "Bearer valeu",
// 			},
// 		}).then((response) => {
// 			// dispatch(getTrails(response))
// 			console.log('Response', response)
// 		}).catch((e) => {
// 			dispatch(getTrails(e))
// 			// console.log('Response')
// 		});
// }
// }


export const getTrailsThunk = () => async (dispatch) => {
	console.log('TRy')
  try {
		
    // const { token } = getState().auth;
    const response = await axios({
			method: 'get',
			url: `https://a19dfcwa29.execute-api.us-east-1.amazonaws.com/dev/trails`,
			headers: {
				Authorization: "Bearer valeu",
			},
		})
		console.log(response.data)
    dispatch(
      getTrails(response.data)
    );
  }
  catch (err) {
		console.log(err)
  }
}
