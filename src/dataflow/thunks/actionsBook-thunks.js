// Libs
import axios from 'axios';
import { Auth } from 'aws-amplify'
import { register, clearActionsBook } from '../modules/actionsBook-modules'



export const postActionsBook = (book) => async (dispatch) => {
  const auth = await Auth.currentAuthenticatedUser()
  const idToken = auth.signInUserSession.idToken.jwtToken;

  try {
    if(book.length <= 0) {
      throw {message: "actions is empty"}
    }
    
    let retorno = await batchWriteActions(book, idToken, dispatch)
    if(retorno) {
      console.log('Deu erro')
    }
  }
  catch (err) {
    console.log(err)
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
    response.data.map(action => {
      dispatch(register(action))
    })

  } catch (error) {
    console.log('error')
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
    console.log('response', response.data)
    dispatch(clearActionsBook())
    dispatch(register(response.data.Items));

  } catch (error) {
    console.log(error);
    return error;
  }
}