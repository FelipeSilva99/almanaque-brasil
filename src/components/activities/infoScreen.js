import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

//Components
import Button from '../buttons/button';

// Styles
const Container = styled.div`
  padding: 2rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  background: #fff;
`;

const Title = styled.h1`
  padding-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: #272727;

  @media (max-width: 375px) {
    margin-bottom: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #272727;

  @media (max-width: 375px) {
    margin-bottom: 2rem;
  }
`;

const ContainerButton = styled.div`
  margin: auto;
  width: 117px;
  position: absolute;
  bottom: 1rem;
`;

const OriginOfTheExpression = () => {
  let history = useHistory();

  const handleClick = () => {
    history.goBack()
  }
  
  return (
    <Container>
        <Title>
          Origem da expressão
        </Title>
        <Subtitle>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Subtitle>
        <ContainerButton>
          <Button
            height='39px'
            background='#47928e'
            boxShadow='0 10px 0 #275653'
            handleClick={handleClick}
          >
            Voltar
          </Button>
        </ContainerButton>
    </Container>
  );
}

export default OriginOfTheExpression;