import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Auth } from 'aws-amplify';
import { useHistory } from "react-router-dom";


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
  top: -36px;
  right: 0;
  width: 30vw;
  height: 8rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background: #fff;
  text-align: end;
  z-index: -1;
`;

const Button = styled.button`
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

  return (
    <Container>
      <Button onClick={handleSignOut}>Sair</Button>
    </Container>
  );
}

export default connect(
  null,
  mapDispatchToProps,
)(Config);