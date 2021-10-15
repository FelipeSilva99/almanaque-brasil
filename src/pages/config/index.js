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
import Item from './item';
import ModalResetMapAlert from '../../components/modal/resetMapAlert';

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
  padding: 15px 32px;
`;

const Config = (props) => {
  const history = useHistory();
  const [isModalResetMap, setIsModalResetMap] = useState(undefined);

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

  const handleModalResetMap = () => {
    setIsModalResetMap(!isModalResetMap);
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

  const openSettings = (router) => {
    if(router === 'openModalResetMap') {
      handleModalResetMap();
    } else if (router === 'config/tutorial') {
      history.push(`/${router}`);
    } else {
      alert(router);
      // history.push(`/${router}`);
    }
  }

  const data = [{
    title: 'Tutorial',
    router: 'config/tutorial',
  },
  {
    title: 'Reiniciar mapa das trilhas',
    router: 'openModalResetMap',
  },
  {
    title: 'Termos de uso e privacidade',
    router: 'termos-de-uso-e-privacidade',
  },
  {
    title: 'Agradecimentos',
    router: 'agradecimentos',
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
            handleClick={() => openSettings(i.router)}
          />
        ))}

        <Button handleClick={handleSignOut} >
          Sair do aplicativo
        </Button>
      </BoxConfig>
      {isModalResetMap && <ModalResetMapAlert handleResetProgress={handleResetProgress} handleCloseModal={handleModalResetMap}/>}
      <Footer screen='config' />
    </Container>
  );
}

export default connect(
  null,
  mapDispatchToProps,
)(Config);
