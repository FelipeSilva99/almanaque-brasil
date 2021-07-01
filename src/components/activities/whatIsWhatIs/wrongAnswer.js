// Libs
import React from 'react';
import styled from 'styled-components';

// Assets
import bento from './images/bento.png'

// Components
import Button from '../../buttons/button';

const Container = styled.div`
  display: flex;
  background-color: #F3F3F3; 
  padding-top: 2rem;
  position: relative;
  width: 100vw;
  height: 100vh;
  justify-content: center;
`

const RandomBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 12vh;
`;

const DialogBox = styled.div`
  position: relative;
  top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 326px;
  height: 219px;
  background-color: #FFFFFF;
  border-radius: 25px;
  box-shadow: silver 0px 5px 15px 0px;
  text-align: center;
  @media(max-width: 375px) {
    width: 95vw;
  }

  h1 {
    margin-bottom: 1rem;
    color: #FB6C76;
  }
  p { color: #161616; }
`;

const Avatar = styled.img`
  width: 230px;
  left: -61px;
  position: relative;
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

  @media(max-width: 425px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;

function WrongAnswer({ isFirstMistake, chances }) {

  return (
    <Container>
      <RandomBox>
        <DialogBox>
          <h1>Ixi, você errou!</h1>
          <p>Você tem mais 2 chances de marcar<br/>pontos. O que acha de tentar<br/>novamente?</p>
        </DialogBox>
        <Avatar src={bento} />
      </RandomBox>
      <ButtonsBox>
        <Button
          margin={"0 0 20px 0"}
          background={"#ff3d4a"}
          color={"#FFFFFF"}
          boxShadow={"#e61a28 0px 7px 0px"}
        >Tente Novamente</Button>
        <Button
          margin={"0 0 20px 0"}
          background={"rgb(252, 208, 41)"}
          boxShadow={"rgb(238 137 47) 0px 7px 0px"}
        >Voltar a trilha</Button>
      </ButtonsBox>
    </Container>
  )
}

export default WrongAnswer;
