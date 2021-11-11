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
  border-radius: 25px 25px 0 0;
  padding: 1.5rem;
  background-color: #FFFFFF;
  width: 100%;
  max-width: 425px;
  height: ${props => props.height || "95vh"};
  overflow: hidden;
  z-index: 1;

  @media (max-width: 425px) {
    padding: 1rem;
    font-size: .8rem;
  }
`;

const Content = styled.div`
  margin: 10vh 0 18vh 0;
  padding: 0 1rem;
  max-width: 425px;
`;

const Title = styled.h1`
  text-align: center;
  color: #399119;
  font-weight: 800;
  font-size: 2.9em;
`;

const Text = styled.p`
  font-size: 1.75em;
  color: #000000;
`;

const Subtitle = styled(Text)`
  margin-bottom: 1.8rem;
  text-align: center;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  padding: 4vh 1.5rem 0;
  width: 100%;
  max-width: 425px;
  background-color: ${props => props.backgroundColor || '#FFFFFF'};

  @media (max-width: 425px) { padding: 4vh 1rem 0; }
`;

const HorseShoe = styled.img`
  position: absolute;
  right: -20px;
  bottom: 0;
  z-index: -1;
`;

const NoScore = ({ handleClick }) => {
  return (
    <Container>
      <Content>
        <Title>Parabéns!</Title>
        <Subtitle>Você acertou!</Subtitle>
        <Text>Como você já passou por essa atividade, não pontuará dessa vez</Text>
      </Content>
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
