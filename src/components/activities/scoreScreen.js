import React from 'react'
import styled from 'styled-components'

//Components
import Button from '../buttons/button';

//Images
import cactus from '../../images/icons/punctuation/cactus.svg';
import hardShell from '../../images/icons/punctuation/hardShell.svg';
import wave from '../../images/icons/punctuation/wave.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 1.8rem 1rem;
  background-color: #FFFFFF;
  width: 100%;
  max-width: 425px;
  height: ${props => props.height || "95vh"};
  overflow: hidden;
  z-index: 4;
`;

const ContentTitle = styled.div`
  margin-top: 3rem;
  text-align: center;

  h1 {
    font-weight: 800;
    font-size: 2.6875rem;
    color: #399119;
  }

  p {
    font-size: 1.625rem;

    strong {
      font-size: 3rem;
      color: #399119;
    }
  }
`;

const ScoreText = styled.p`
  padding-bottom: 2rem;
  font-size: 2.1875rem;
  font-weight: 900;
  color: #000;

  strong {
    font-size: 9rem;
    font-weight: 900;
    color: #399119;
  }
`;

const ButtonBox = styled.div`
  padding-top: 4vh;
  width: 100%;
  background-color: ${props => props.backgroundColor || '#FFFFFF'};
`;


const ScoreScreen = ({ handleClick, score }) => {
  const HorseShoe = styled.img`
    position: absolute;
    right: ${props => 
      (props.img === 'wave' && '-149px') 
    || (props.img === 'cactus' && '-130px') 
    || (props.img === 'hardShell' && '-20px')};
    bottom: ${props => 
      (props.img === 'wave' && '-195px') 
    || (props.img === 'cactus' && '-65px') 
    || (props.img === 'hardShell' && '-5px')};

    z-index: -1;
  `;

  const pointsImg = (score === 10 && hardShell) || (score === 8 && wave) || (score === 5 && cactus);
  const imgName = (score === 10 && 'hardShell') || (score === 8 && 'wave') || (score === 5 && 'cactus');

  return (
    <Container>
      <ContentTitle>
        <h1>Parabéns!</h1>
        <p>Você acertou e ganhou:</p>
      </ContentTitle>
      <ScoreText><strong>{score}</strong> pts</ScoreText>
      <ButtonBox backgroundColor={'transparent'}>
        <Button
          handleClick={handleClick}
          color={"#fff"}
          buttonBg={"#399119"}
          boxShadow={"#245812 0px 7px 0px"}
        >Continuar</Button>
      </ButtonBox>
      <HorseShoe src={pointsImg} alt={imgName} img={imgName} />
    </Container>
  )
}

export default ScoreScreen;
