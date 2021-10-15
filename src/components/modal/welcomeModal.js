import React from 'react'
import styled from 'styled-components'
import elifas from '../../images/elifas.svg'
import Button from '../buttons/button'

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.backgroundColor};
  opacity: ${props => props.opacity};
  z-index: 3;
  overflow: hidden;
`;

const Overlay = () => {
  return <Container opacity={".8"} backgroundColor={"#70707073"}/>
}

const ElifasSVG = styled.img`
  position: relative;
  opacity: 1;
  position: absolute;
  right: -47px;
  bottom: -0.125rem;
  width: 231px;
  z-index: 3;
`;

const ButtonRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  padding: 0 1rem;
`;

const CloseButton = styled.button`
  margin-top: 2rem;
  color: #ffd000;
  font: 900 1.2em 'Nunito';
  transform: scale(1,.9);
`;

const DialogBox = styled.div`
  position: relative;
  top: 3rem;
  margin: 0 auto;
  width: 91%;
  padding: 2rem .9rem 1rem;
  border-radius: 20px;
  background-color: #fff;
  z-index: 3;

  &:after {
    position: absolute;
    content: '';
    left: 51%;
    bottom: -11%;
    display: block;
    width: 50px;
    height: 70px;
    border: 0px solid;
    background-color: transparent;
    border-bottom-left-radius: 100%;
    box-shadow: -34px -34px 0px 30px #fff;
    transform: rotate(5deg);
    z-index: -1;
  }

  @media (max-width: 375px) {
    right: auto;
  }
  @media (max-width: 320px) {
    width: 95%;
  }
`;

const DialogText = styled.p`
  margin-bottom: 1.4rem;
  font-size: 1rem;
  color: #000000;
  
  strong {
    font-weight: 900;
  }
`;

const WelcomeModal = ({handleClose, showThunk}) => {
  return(
    <>
      <Overlay />
      <Container onClick={handleClose}>
        <DialogBox onClick={(ev) => ev.stopPropagation()}>
          <>
            <DialogText>Olá, seja <strong>bem-vindo(a)</strong> ao aplicativo Almanaque Miguel Burnier, vamos embarcar juntos nessa jornada de conhecimento e diversão?</DialogText>
            <DialogText>Sou o <strong>Elifas Andreato</strong> e serei o seu guia!</DialogText>
          </>
          <ButtonRow>
            <Button handleClick={showThunk()}>Saiba mais sobre o Elifas</Button>
            <CloseButton onClick={handleClose}>X</CloseButton>
          </ButtonRow>
        </DialogBox>
        <ElifasSVG src={elifas} />
      </Container>
    </>
  )
}

export default WelcomeModal