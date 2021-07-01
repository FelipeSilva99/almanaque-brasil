// Libs
import React from 'react';
import styled from 'styled-components';

// Assets
import dialogBox from './images/dialogBox.svg'
import bento from './images/bento.png'

// Components
import Button from '../../buttons/button';

const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  background-color: #F3F3F3; 
  padding-top: 2rem;
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const DialogBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 326px;
  height: 219px;
  /* background-image: url("${dialogBox}");
  background-position: center;
  background-size: cover; */
  background-color: #FFFFFF;
  border-radius: 25px;
  box-shadow: silver 0px 5px 15px 0px;
  text-align: center;

  h1 {
    margin-bottom: 1rem;
    color: #FB6C76;
  }
  p { color: #161616; }
`;

const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding-top: 4vh;
  background-color: #FFFFFF;
  width: 100vw;
`;

function WrongAnswer({ isFirstMistake, chances }) {

  function backgroundButton() {
    return "silver"
  }
  function boxShadowButton() {
    return "black"
  }

  return (
    <Container>
      <DialogBox>
        <h1>Ixi, você errou!</h1>
        <p>Você tem mais 2 chances de marcar<br/>pontos. O que acha de tentar<br/>novamente?</p>
      </DialogBox>
      <ButtonsBox>
        <Button
          background={backgroundButton}
          boxShadow={boxShadowButton}
        >Tente Novamente</Button>
        <Button
          background={backgroundButton}
          boxShadow={boxShadowButton}
        >Voltar a trilha</Button>
      </ButtonsBox>
    </Container>
  )
}

export default WrongAnswer;
