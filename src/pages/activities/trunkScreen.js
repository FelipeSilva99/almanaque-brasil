import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

//Components
import Button from '../../components/buttons/containerButton';

// Styles
const Container = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  `;

const TrunkScreen = () => {
  const history = useHistory()
  
  const goBack = () => {
    history.goBack()
  }

  return (
    <Container>
      <h1>Em construção</h1>
      <Button handleClick={goBack}>Voltar</Button>
    </Container>
  );
}

export default TrunkScreen;
