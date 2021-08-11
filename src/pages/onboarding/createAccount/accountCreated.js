import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

//Components
import Header from '../../../components/header/headerOnb';
import Button from '../../../components/buttons/button';

// Styles
const Container = styled.div`
  padding: 1rem;
  width: 100vw;
  height: 100vh;
  background: #F3F3F3;
`;

const Content = styled.div`
  height: calc(100% - 30px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  padding: 2rem 0 0.5rem 0;
  font-size: 1.5rem;
  font-weight: 900;
  color: #373737;
  text-align: center;
`;

const Text = styled.p`
  padding-bottom: 1rem;
  width: 20rem;
  font-size: 1rem;
  color: #373737;
  text-align: center;
`;

const AccountCreated = () => {
  const history = useHistory();

  const goHome = () => {
    history.push("/");
  }

  return (
    <Container>
      <Header text='Verificar e-mail' />
      <Content>
        <Title>Verifique seu e-mail</Title>
        <Text>Enviamos uma mensagem de confirmação para o seu e-mail cadastrado.</Text>
        <Button margin='1rem' handleClick={goHome}>reenviar</Button>
      </Content>
    </Container>
  );
}

export default AccountCreated;
