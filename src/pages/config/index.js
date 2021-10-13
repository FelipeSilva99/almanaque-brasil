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
import Button from '../../components/buttons/containerButton';

//Image
import iconThunk from '../../images/icons/settings.svg';
import arrow from '../../images/icons/arrow.svg';

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

const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 44px;
`;

const UpSide = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h3`
`;

const IconArrow = styled.img`
  transform: ${props => props.isOpen && 'rotate(90deg)'};
`;

const BottomSide = styled.div`
  width: 100%;
  display: ${props => props.isCheck ? 'flex' : 'none'};

  > div {
    width: 40%;
    padding: 0;
    height: auto;
    
    button {
      height: 2rem;
    }
  }
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

  const [check, setCheck] = useState(false);
  const openSettings = () => setCheck(!check)

  return (
    <Container>
      <Header isVisible text='Configurações' icon={iconThunk} />
      <BoxConfig>
        <Item>
          <UpSide>
            <Title>Reiniciar mapa das trilhas</Title>
            <IconArrow
              src={arrow}
              alt='Seta'
              isOpen={check}
              onClick={openSettings}
            />
          </UpSide>
          <BottomSide isCheck={check}>
            <Button
              background="red"
              color="white"
              handleClick={handleResetProgress}
            >
              Confirmar
            </Button>
          </BottomSide>
        </Item>
        <Button
          handleClick={handleSignOut}
        >
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
