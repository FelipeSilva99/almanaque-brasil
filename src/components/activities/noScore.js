import React from 'react'
import styled from 'styled-components'

//Components
import Button from '../buttons/button';

//Images
import hardShell from '../../images/icons/punctuation/hardShell.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding-top: 1.5rem;
  background-color: #FFFFFF;
  width: 100vw;
  height: ${props => props.height || "95vh"};
  z-index: 1;

  @media(max-width: 425px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;

const ContentTitle = styled.div`
  margin: 10vh 0 18vh 0;
  text-align: center;
  max-width: 425px;
  
  h1{
    font-weight: 800;
    font-size: 2.6875rem;
    color: #399119;
  }
  `;

const Text = styled.p`
  margin: auto;
  width: 17rem;
  font-size: 1.625rem;
  color: #000000;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding-top: 4vh;
  background-color: ${props => props.backgroundColor || '#FFFFFF'};
  width: 100vw;

  @media(max-width: 425px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;

const HorseShoe = styled.img`
  position: absolute;
  right: -40px;
  bottom: -10px;
  z-index: -1;
`;

const NoScore = ({ handleClick }) => {
  return (
    <Container>
      <ContentTitle>
        <h1>Parabéns!</h1>
        <Text>Você acertou! Para pontuar reinicie a trilha nas configurações</Text>
      </ContentTitle>
      <ButtonBox backgroundColor={'transparent'}>
        <Button
          handleClick={handleClick}
          color={"#fff"}
          margin={"0 0 20px 0"}
          buttonBg={"#399119"}
          boxShadow={"#245812 0px 7px 0px"}
        >Continuar</Button>
      </ButtonBox>
      <HorseShoe src={hardShell} alt='hard Shell' />
    </Container>
  )
}

export default NoScore;
