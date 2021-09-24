import React from 'react'
import styled from 'styled-components'
import elifas from '../../images/elifas.svg'
import Button from '../buttons/button'

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  /* background-color: transparent; */
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
  flex-direction: row;
  justify-content: center;
  margin-top: ${props => props.marginTop};
`;

const CloseButton = styled.button`
  border: 0;
  background-color: transparent;
  padding: 15px;
`;

const DialogBox = styled.div`
  position: absolute;
  width: 350px;
  right: 50px;
  bottom: 237px;
  padding: 25px 15px 25px 15px;
  border-radius: 20px;
  background-color: #fff;
  z-index: 3;

  ::before{
    content: "";
    position: absolute;
    width: 200px;
    height: 300px;
    border-radius: 50%;
    border-left: 61px solid #fff;
    z-index: -1;
    top: 100%;
    transform: translate(39%, -85%);
    /* transform: translateX(-50%); */
  }
`;

const DialogText = styled.p`
  margin-bottom: 1rem;
`;

// const DivRedonda = styled.div`

// `;

const WelcomeModal = ({handleClose}) => {
  return(
    <>
      <Overlay />
      <Container onClick={handleClose}>
        <DialogBox>
          <DialogText>
            Olá, seja <strong>bem-vindo(a)</strong> ao aplicativo Almanaque Miguel Burnier, vamos embarcar juntos nessa jornada de conhecimento e diversão?
            <br/><br/><br/>Sou o <strong>Elifas Andreato</strong> e serei o seu guia!
          </DialogText>
          <ButtonRow marginTop={'2rem'}>
            <Button>Saiba mais sobre o Elifas</Button>
          </ButtonRow>
          <ButtonRow marginTop={"1rem"}>
            <CloseButton onClick={handleClose}>X</CloseButton>
          </ButtonRow>
        </DialogBox>
        <ElifasSVG src={elifas} />
      </Container>
    </>
  )
}

export default WelcomeModal