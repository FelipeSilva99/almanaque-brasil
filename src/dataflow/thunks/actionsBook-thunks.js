/* eslint-disable no-throw-literal */
// Libs
import axios from 'axios';
import { Auth } from 'aws-amplify';
import { 
  clearActionsBook, synced, refreshLocalData
} from '../modules/actionsBook-modules';
import {setIsModalActivityLimit} from "../modules/modals-module";

export const postActionsBook = (book) => async (dispatch) => {
  const auth = await Auth.currentAuthenticatedUser()
  const idToken = auth.signInUserSession.idToken.jwtToken;

  try {
    if(book.pendingSync.length <= 0) {
      throw {message: "actions is empty"}
    }
    
    let response = await batchWriteActions(book.pendingSync, idToken, dispatch)

    if(response.status === 200) {
      dispatch(synced())
    }
  }
  catch (err) {
    console.log('errorr no sync:', err)
  }
}

export const getActionsBook = () => async (dispatch) => {

  const auth = await Auth.currentAuthenticatedUser()
  const idToken = auth.signInUserSession.idToken.jwtToken;
  console.log('GET actions book')
  try {
    const response = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_ACTIONS_BOOK_ENDPOINT}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${idToken}`,
      },
    })
    dispatch(clearActionsBook())
    // response.data.map(action => {
    //   dispatch(register(response.data))
    // })
    dispatch(refreshLocalData(response.data))
  } catch (error) {
    console.log(error)
  }

}

export const deleteActionsBook = () => async (dispatch) => {
  const auth = await Auth.currentAuthenticatedUser()
  const idToken = auth.signInUserSession.idToken.jwtToken;

  try {
    const response = await axios({
      method: 'delete',
      url: process.env.REACT_APP_ACTIONS_BOOK_ENDPOINT,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${idToken}`,
      },
    });
    if (response.status === 200) {
      dispatch(clearActionsBook());
      console.log('Progresso reiniciado com sucesso.')
    } else {
      console.log('Não foi possível reiniciar o progresso. \n', response);
    }
    // dispatch(clearActionsBook());
  }
  catch (err) {
    console.log('err', err);
  }
}

var batchWriteActions = async (actions, idToken, dispatch) => { // Função Recursiva
  try{
    let limite = 25

    if(actions.length > limite){
      var rest = actions.splice(limite)
      console.log("Chunk: ",actions.length, "Rest: ", rest.length);
      batchWriteActions(rest);
      dispatch(setIsModalActivityLimit(true))
    }
    const data = {
      actions: actions
    }

    const response = await axios({
			method: 'post',
			url: `${process.env.REACT_APP_ACTIONS_BOOK_ENDPOINT}`,
			headers: {
        'Content-Type': 'application/json',
				'Authorization': `${idToken}`,
			},
      data: data
		})

    return response;

  } catch (error) {
    console.log('error', error);
    throw error;
  }
}