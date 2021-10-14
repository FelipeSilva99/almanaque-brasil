import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Auth } from 'aws-amplify';
import { useHistory } from "react-router-dom";

//Redux
import { signOut } from '../../dataflow/modules/signIn-modules';
import { clearActionsBook } from '../../dataflow/modules/actionsBook-modules';
import { deleteActionsBook } from '../../dataflow/thunks/actionsBook-thunks';
import { clearModalsState } from '../../dataflow/modules/modals-module';

//Components
import Header from '../../components/header/headerYellow';
import Footer from '../../components/footer/footerMenu';
import Button from '../../components/buttons/button';
import Item from './item'

//Image
import iconThunk from '../../images/icons/settings.svg';

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
  background: #F3F3F3;
  min-height: 100vh;
  overflow-x: hidden; 
`;

const BoxConfig = styled.div`
  width: 100%;
  padding: 0 32px;
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

  async function handleResetProgress() {
    try {
      props.deleteActionsBook()
      await Auth.signOut();
      props.clearModalsState();
      localStorage.clear();
      history.push('/');
      props.signOut();
    } catch (error) {
      console.log('error signout: ', error);
    }
  }

  const [check, setCheck] = useState(null);
  const openSettings = (index) => {
    if (index === check) {
      setCheck(null)
    } else setCheck(index)
  }

  const data = [{
    title: 'Tutorial',
    content: <p>teste</p>
  },
  {
    title: 'Reiniciar mapa das trilhas',
    content:
      <Button
        background="red"
        color="white"
        handleClick={handleResetProgress}
      >
        Confirmar
      </Button>
  },
  {
    title: 'Termos de uso e privacidade',
    content: <p>teste</p>
  },
  {
    title: 'Agradecimentos',
    content: <p>teste</p>
  },]

  return (
    <Container>
      <Header
        isVisible
        text='Configurações'
        icon={iconThunk}
        bottom="-42px"
        right="-38px"
      />
      <BoxConfig>
        {data.map((i, index) => (
          <Item
            key={index}
            title={i.title}
            handleClick={() => openSettings(index)}
            isOpen={check === index}
            isCheck={check === index}
          >
            {i.content}
          </Item>
        ))}

        <Button handleClick={handleSignOut} >
          Sair do aplicativo
        </Button>
      </BoxConfig>
      <Footer screen='config' />
    </Container>
  );
}

export default connect(
  null,
  mapDispatchToProps,
)(Config);
