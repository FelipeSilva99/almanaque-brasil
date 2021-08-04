import React from 'react';
import styled from 'styled-components';

//Component
import Header from '../../../components/header/headerOnb';

const Container = styled.div`
  padding: 1rem;
  min-height: 100vh;
  background: #F3F3F3;
`;

const CreateEmail = (props) => {
  return (
    <Container>
        <Header text='Cadastro' />
        <h2>Criar email</h2>
    </Container>
  );
}

export default CreateEmail;