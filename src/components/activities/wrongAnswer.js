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
  display: flex;
  background-color: #F3F3F3; 
  padding-top: 2rem;
  position: relative;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  z-index: 2;
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
  min-height: 219px;
  max-height: 285px;
  background-color: #FFFFFF;
  border-radius: 25px;
  box-shadow: silver 0px 5px 15px 0px;
  text-align: center;
  background-image: url("${leaf}");
  background-repeat: no-repeat;
  background-position: 132px -328px;
  background-size: 497px;
  padding: 1rem 1rem 1rem 1rem;
  padding-top: 1rem;
  overflow-y: auto; 

  ::-webkit-scrollbar {
		width: 4px;
		height: 10px;
	}
	::-webkit-scrollbar-track {
		background: transparent;
		border-radius: 20px;
	}
	::-webkit-scrollbar-thumb {
		background: #ccc;
		border-radius: 13px;
	}
	::-webkit-scrollbar-thumb:hover {
		background: #ccc;
	}
  
  h1 {
    color: #FB6C76;
  }
  p { margin: 1rem 0 1rem 0; color: #161616; }
  
  @media(max-width: 375px) {
    width: 95vw;
  }
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
  display: flex;
  justify-content: center;
`;

function WrongAnswer({ chances, handleClick, handleShowAnswer, tips }) {
  const [hasChances, setHasChance] = useState(true)
  const [isFirstMistake, setIsFirstMistake] = useState(true)
  useEffect(() => {
    if (chances < 2) setIsFirstMistake(false)
    if (chances <= 0) setHasChance(false)
  }, [chances]);

  const renderText = (firstMistake) => {
    if (firstMistake) {
      switch (!!tips?.length) {
        case true:
          return (
            <>
              <h1>Ixi, você errou!</h1>
              <p>Você tem mais {chances} chances de marcar<br />pontos. Se liga na dica:</p>
              <strong>{tips[0]}</strong>
            </>
          );

        default:
          return (
            <>
              <h1>Ixi, você errou!</h1>
              <p>Você tem mais {chances} chances de marcar<br />pontos. O que acha de tentar<br />novamente?</p>
            </>
          );
      }
    } else {
      if (hasChances) {
        switch (!!tips?.length) {
          case true:
            return (
              <>
                <h1>Ixi, você errou de novo!</h1>
                <p>Você tem mais 1 chance de marcar<br />pontos. Se liga em outra dica:</p>
                <strong>{tips[1]}</strong>
              </>
            );

          default:
            return (
              <>
                <h1>Ixi, você errou de novo!</h1>
                <p>Você tem mais 1 chance de marcar<br />pontos. O que acha de tentar<br />novamente?</p>
              </>
            );
        }
      } else {
        return (
          <>
            <h1>Esta foi a sua<br />última chance!</h1>
            <p>Gostaria de saber a resposta?</p>
          </>
        );
      }
    }
  }

  return (
    <Container>
      <RandomBox>
        <DialogBox>
          {renderText(isFirstMistake, tips)}
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
