import React from 'react';
import styled from 'styled-components';

//Components
import ProgressBar from '../../../components/progressBar'

//Styles
const Container = styled.div`
  padding: 1.875rem 1rem 1rem;
  min-height: 100vh;
  background: #F3F3F3;
`;

const Login = (props) => {
  return (
    <Container>
      <ProgressBar currentStep={1} steps={4}/>
      <h2>Criar email</h2>
    </Container>
  );
}

export default Login;