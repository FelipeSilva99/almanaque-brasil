// Libs
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  Link,
} from "react-router-dom";

// Assets
import bento from '../../images/whatIsWhatIs/bento.png'
import leaf from '../../images/whatIsWhatIs/pale_leaves.svg'
// Components
import Button from '../buttons/button';

const Container = styled.div`
  /* position: absolute;
  top: 0;
  left: 0; */
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
  z-index: 1;
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
  background-image: url("${leaf}");
  background-repeat: no-repeat;
  background-position: 132px -328px;
  background-size: 497px;

  :before{
    content: "";
    position: absolute;
    right: 43%;
    top: 205px;
    width: 0;
    height: 0;
    border-top: 13px solid transparent;
    border-left: 42px solid #FFF;
    border-bottom: 26px solid transparent;
  }
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

const ALink = styled(Link)`
  width: 100%;
`;

function WrongAnswer({ chances, handleClick, handleShowAnswer }) {
  const [hasChances, setHasChance] = useState(true)
  const [isFirstMistake, setIsFirstMistake] = useState(true)
  useEffect(() => {
    if(chances < 2) setIsFirstMistake(false) 
    if(chances <= 0) setHasChance(false)
  }, []);

  return (
    <Container>
      <RandomBox>
        <DialogBox>

          {isFirstMistake ? (
            <>
              <h1>Ixi, você errou!</h1>
              <p>Você tem mais {chances} chances de marcar<br/>pontos. O que acha de tentar<br/>novamente?</p>
            </>
          ) : (
            hasChances ? (
              <>
                <h1>Ixi, você errou de novo!</h1>
                <p>Você tem mais {chances} {chances>1 ? "chances" : "chance"} de marcar<br/>pontos. O que acha de tentar<br/>novamente?</p>
              </>
            ) : (
              <>
                <h1>Esta foi a sua<br/>última chance!</h1>
                <p>Gostaria de saber a resposta?</p>
              </>
            )
          )
          }
        </DialogBox>
        <Avatar src={bento} />
      </RandomBox>
      <ButtonsBox>
        {hasChances ? (
          <Button
            margin={"0 0 20px 0"}
            background={"#ff3d4a"}
            color={"#FFFFFF"}
            boxShadow={"#e61a28 0px 7px 0px"}
            handleClick={handleClick}
          >Tente Novamente</Button>
        ) : (
          <Button
            handleClick={handleShowAnswer}
            margin={"0 0 20px 0"}
            background={"#399119"}
            color={"#FFFFFF"}
            boxShadow={"#245812 0px 7px 0px"}
          >Saber a resposta</Button>
        )

        }
        <ALink to="/" >
          <Button
            margin={"0 0 20px 0"}
            background={"rgb(252, 208, 41)"}
            boxShadow={"rgb(238 137 47) 0px 7px 0px"}
          >Voltar a trilha</Button>
        </ALink>
      </ButtonsBox>
    </Container>
  )
}

export default WrongAnswer;
