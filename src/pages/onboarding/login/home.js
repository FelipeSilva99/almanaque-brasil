import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1.875rem 1rem 1rem;
  min-height: 100vh;
  background: #F3F3F3;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

`;

const Card = styled.button`
  min-height: 150px;
  width: 10rem;
  margin: 10px;
  border-radius: 16px;
  padding: 16px;
  /* box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); */
  background-color: #fff;

  &:hover{
    box-shadow: 0 6px 10px rgba(0,0,0,0.25), 0 1px 10px rgba(0,0,0,0.22);
  }
`;

const Home = (props) => {
  const handleClick = (type) => {
    props.history.push({ pathname: `/${type}` });
  }

  return (
    <Container>
      <Card onClick={() => handleClick('dashboard')}>
        <h2>Ir para o menu</h2>
      </Card>
      <Card onClick={() => handleClick('createAccount')}>
        <h2>Criar conta</h2>
      </Card>
      <Card onClick={() => handleClick('login')}>
        <h2>Fazer login</h2>
      </Card>
    </Container>
  );
}

export default Home;