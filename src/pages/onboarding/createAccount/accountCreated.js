import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

//Components
import Button from '../../../components/buttons/button';

// Styles
const Container = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
  background: #F3F3F3;
`;

const AccountCreated = () => {
  const history = useHistory();

  const goHome = () => {
    history.push("/");
  }

  return (
    <Container>
      <h1>Conta Criada com sucesso!</h1>
      <Button margin='1rem' handleClick={goHome}>Fazer login</Button>
    </Container>
  );
}

export default AccountCreated;
