// Libs
import axios from 'axios';
import { Auth } from 'aws-amplify'
import { register, clearActionsBook, synced } from '../modules/actionsBook-modules'



export const postActionsBook = (book) => async (dispatch) => {
  const auth = await Auth.currentAuthenticatedUser()
  const idToken = auth.signInUserSession.idToken.jwtToken;

  try {
    if(book.pendingSync.length <= 0) {
      throw {message: "actions is empty"}
    }
    
    let response = await batchWriteActions(book.pendingSync, idToken, dispatch)

    if(response.status === 200) {
      console.log('retorno')
      dispatch(synced())
    }
  }
  catch (err) {
    console.log(err)
  }
}

export const getActionsBook = () => async (dispatch) => {
  console.log('1')

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
    console.log('response:', response)
    response.data.map(action => {
      dispatch(register(action))
    })

  } catch (error) {
    console.log(error)
  }

}

var batchWriteActions = async (actions, idToken, dispatch) => { // Função Recursiva
  try{
    let limite = 2
    console.log(actions.length);
    if(actions.length > limite){
      var rest = actions.splice(limite)
      console.log("Chunk: ",actions.length, "Rest: ", rest.length);
      batchWriteActions(rest);
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
    // console.log('response', response.data)
    // if(response.status === 200) dispatch(synced())
    return response.status
    // dispatch(register(response.data.Items));
    // console.log('items',response.data.Items);
    // dispatch(synced())

  } catch (error) {
    throw error;
  }
}