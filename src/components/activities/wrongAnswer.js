// Libs
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  Link,
} from "react-router-dom";

// Assets
import bento from '../../images/icons/bento.png'
import leaf from '../../images/whatIsWhatIs/pale_leaves.svg'
import flags from '../../images/icons/flags.svg';
import starrySky from '../../images/icons/starrySky.svg';

// Components
import Button from '../buttons/button';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  background-color: #F3F3F3; 
  width: 100vw;
  height: 100vh;
  justify-content: center;
  z-index: 2;
`

const RandomBox = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  bottom: 12vh;
  background: #F3F3F3;

  @media(min-width: 1024px) {bottom: 10vh}

`;

const DialogBox = styled.div`
  z-index: 1;
  position: relative;
  top: 20px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  width: 326px;
  height: 6rem;
  min-height: 219px;
  max-height: 285px;
  background-color: #FFFFFF;
  border-radius: 25px;
  box-shadow: silver 0px 5px 15px 0px;
  text-align: center;
  background-image: url("${props => props.backgroundImg}");
  background-repeat: no-repeat;
  /* background-position: 132px -328px; */
  background-position: ${props => props.backgroundPosition};
  background-size:  ${props => props.backgroundSize};
  padding: 1rem 1rem 1rem 1rem;
  padding-top: 1rem;
  overflow-y: auto; 
    height: 5rem;

  ::-webkit-scrollbar {
		width: 4px;
		height: 10px;
	}
	::-webkit-scrollbar-track {
		background: transparent;
		border-radius: 20px;
	}
	::-webkit-scrollbar-thumb {
    background: transparent;
		border-radius: 13px;
	}
	::-webkit-scrollbar-thumb:hover {
    background: transparent;
	}
  
  h1 {
    font-size: 1.625rem;
    font-weight: 900;
    line-height: 2.3rem;
    color: #FB6C76;
  }
  p {
    font-size: 1rem;
    margin: 1rem 0 1rem 0;
    color: #161616;
  }
  
  @media(max-width: 375px) {
    width: 95vw;
  }
`;

const MsgError = styled.div`
  margin: auto;
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
            <MsgError>
              <h1>Opa, você errou! Vamos tentar novamente?</h1>
              <p>Você tem mais {chances} chances de marcar<br />pontos. Se liga na dica:</p>
              <strong>{tips[0]}</strong>
            </MsgError>
          );

        default:
          return (
            <MsgError>
              <h1>Opa, você errou! Vamos tentar novamente?</h1>
              <p>Você tem mais {chances} chances de marcar<br />pontos. O que acha de tentar<br />novamente?</p>
            </MsgError>
          );
      }
    } else {
      if (hasChances) {
        switch (!!tips?.length) {
          case true:
            return (
              <MsgError>
                <h1>Opa, você errou de novo! Vamos tentar novamente?</h1>
                <p>Você tem mais 1 chance de marcar<br />pontos. Se liga em outra dica:</p>
                <strong>{tips[1]}</strong>
              </MsgError>
            );

          default:
            return (
              <MsgError>
                <h1>Opa, você errou de novo! Vamos tentar novamente?</h1>
                <p>Você tem mais 1 chance de marcar<br />pontos. O que acha de tentar<br />novamente?</p>
              </MsgError>
            );
        }
      } else {
        return (
          <MsgError>
            <h1>Esta foi a sua<br />última chance!</h1>
            <p>Gostaria de saber a resposta?</p>
          </MsgError>
        );
      }
    }
  }

  const setBackgroundImg = () => {
    switch (chances) {
      case 2: return { img: leaf, position: "132px -328px", size: "497px" }
      case 1: return { img: flags, position: "", size: "" }
      default: return { img: starrySky, position: "184px  -90px", size: "" }
    }
  }

  return (
    <Container>
      <RandomBox>
        <DialogBox
          backgroundImg={setBackgroundImg().img}
          backgroundPosition={setBackgroundImg().position}
          backgroundSize={setBackgroundImg().size}
        >
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
        <ALink to="/activities" >
          <Button
            margin={"0 0 20px 0"}
            background={"rgb(252, 208, 41)"}
            boxShadow={"rgb(238 137 47) 0px 7px 0px"}
          >Voltar a Atividades</Button>
        </ALink>
      </ButtonsBox>
    </Container>
  )
}

export default WrongAnswer;
