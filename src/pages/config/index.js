import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Auth } from 'aws-amplify';
import { useHistory } from "react-router-dom";
import axios from 'axios';


//Redux
import { signOut } from '../../dataflow/modules/signIn-modules';
import { clearActionsBook } from '../../dataflow/modules/actionsBook-modules';

const mapDispatchToProps = dispatch => ({
  signOut: () => {
    dispatch(signOut());
  },

  clearActionsBook: () => {
    dispatch(clearActionsBook());
  },
});

const Container = styled.div`
  padding: .5rem;
  position: absolute;
  bottom: 60px;
  right: 205px;
  width: 30vw;
  height: 3rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background: #fff;
  text-align: end;
  /* z-index: -1; */
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  font-size: 1rem;
  font-weight: 900;
  color: #373737;
`;

const Config = (props) => {
  const history = useHistory();

  async function handleSignOut() {
    try {
      await Auth.signOut();
      localStorage.clear();
      props.clearActionsBook();
      props.signOut();
      history.push('/');

    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  async function handleResetProgress() {
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
      if(response.status === 200){
        handleSignOut();
        console.log('Progresso reiniciado com sucesso.')
      } else{
        console.log('Não foi possível reiniciar o progresso. \n', response);
      }
      
    }
    catch (err) {
      console.log('err', err);
    }
  }

  return (
    <Container>
      <Button onClick={handleResetProgress}>Reset</Button>
      <Button onClick={handleSignOut}>Sair</Button>      
    </Container>
  );
}

export default connect(
  null,
  mapDispatchToProps,
)(Config);