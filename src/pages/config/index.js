import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Auth } from 'aws-amplify';
import { useHistory } from "react-router-dom";

//Redux
import { signOut } from '../../dataflow/modules/signIn-modules';
import { clearActionsBook } from '../../dataflow/modules/actionsBook-modules';
import { deleteActionsBook } from '../../dataflow/thunks/actionsBook-thunks';
import { clearModalsState } from '../../dataflow/modules/modals-module';

const mapDispatchToProps = dispatch => ({
  signOut: () => {
    dispatch(signOut());
  },

  clearActionsBook: () => {
    dispatch(clearActionsBook());
  },

  clearModalsState: () => {
    dispatch(clearModalsState())
  },

  deleteActionsBook: () => {
    dispatch(deleteActionsBook());
  },

});

const Container = styled.div`
  position: fixed;
  bottom: 60px;
  left: 51vw;
  width: 10rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background: #fff;
  text-align: end;
  z-index: 3;
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
      props.clearModalsState();
      localStorage.clear();
      history.push('/');
      props.signOut();
    } catch (error) {
      console.log('error signout: ', error);
    }
  }

  const handleResetProgress = async () => {
    props.deleteActionsBook();

    history.push('/activities');
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
