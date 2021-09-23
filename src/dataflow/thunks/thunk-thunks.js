// Libs
import axios from 'axios';

import {
  saveThunk,
} from '../modules/thunk-module';

export const getDataThunk = () => async (dispatch) => {
  const accessToken = localStorage.getItem('accessToken');

  try {
    const response = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_TRUNK_ENDPOINT}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${accessToken}`,
      },
    })
    dispatch(saveThunk(response.data.Items));
  }
  catch (err) {
    console.log('err', err);
  }
}
