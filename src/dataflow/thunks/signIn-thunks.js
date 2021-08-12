// // Libs
// import { Auth } from 'aws-amplify';

// import {
//   signIn,
//   signInError
// } from '../modules/signIn-modules';


// export default (email, password) => async (dispatch) => {

//   try {
//     const user = await Auth.signIn(email, password);
//     console.log(user)
//     dispatch(signIn(user))
//   } catch (error) {
//     if(error.code === "NotAuthorizedException") dispatch(signInError("O e-mail ou senha inseridos estão incorretos."))
//   }
// }