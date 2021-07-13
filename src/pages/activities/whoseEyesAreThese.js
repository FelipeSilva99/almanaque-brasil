import React, { useState } from 'react';
import styled from 'styled-components';

//Component
import Header from '../../components/header/index';

//Images
import selectedTips from '../../assets/selectedTips.svg';
import tips from '../../assets/tips.svg';
import logo from '../../assets/whose_eyes_are_these_logo.svg';
import dialogBox from '../../assets/dialogBox.svg';
import bento from '../../assets/bento.png';
import iconClose from '../../assets/iconClose.svg';

//Styled
const ContainerWrong = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
  background-color: cadetblue;
`;

const FeedbackBox = styled.div`
  width: 90%;
  max-width: 700px;
  background-color: silver;
  color: #fff;
  border-radius: 25px;
  padding: 10%;

  >strong{margin-bottom: 20px;}
`;

const Img = styled.img`
  max-width: 100%;
  margin-top: 8vh;
`;

const BoxAnswers = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  height: 100vh;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

const CorrectAnswerContainer = styled.div`
  display: flex;
  flex-grow: 1;
  position: relative;
  bottom: 20px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  >div{
    text-align: center;

    >p{
      color: green;
    }
  }

  >button{background-color: green; box-shadow: 0 5px 0 #002500;}
`;

const ContentAnswerOption = styled.button`
  margin-right: .625rem;
  margin-bottom: .875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  padding: 0 10vw 0 10vw;
  height: 2.8rem;
  font-weight: bold;
  color: #fff;
  background: ${props => props.isSelected ? '#b9b9b9' : '#c7adfc'};
  border-radius: 17px;
  box-shadow: ${props => props.isSelected ? '0 5px 0 #9c9c9c' : '0 5px 0 #9a72f6'};
`;

const ContainerTip = styled.div`
  background: #70707073;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;

  @media (min-width: 1024px) { align-items: center; }
`;

const ContentTip = styled.div`
  max-width: 340px;
`;

const ContentInfoTip = styled.div`
  position: relative;
  top: 1.5rem;
  display: flex;
  justify-content: center;

  /* @media (max-width: 320px) { width: 80vw; } */

`;

const ImgDialogBox = styled.img`
  width: 100%;
`;

const ContentInfo = styled.div`
  position: absolute;
  padding-top: 2rem;
  max-width: 260px;
  /* max-width: 300px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const TextTip = styled.p`
  padding: ${props => props.padding && '1.5rem 0 .8rem 0 '};
  color: #373737F2;
  line-height: 1.2rem;

  @media (max-width: 320px) { padding: ${props => props.padding && '1.5rem 0 .4rem 0 '}; }
`;

const ImgBento = styled.img`
  position: relative;
  top: -1rem;
  left: -3rem;
`;


const WhoseEyesAreThese = (props) => {
  const [attempt, setAttempt] = useState({
    attempt: null,
    answer: null
  });
  const [isModalTip, setIsModalTip] = useState(undefined)

  const Button = (props) => {
    return (
      <ContentAnswerOption onClick={props.onClick}>
        {props.children}
      </ContentAnswerOption>
    )
  }

  const handleCheckAnswer = (answer) => {
    if (answer.isCorrect) {
      return setAttempt({
        attempt: true,
        answer: answer
      })
    } else {
      return setAttempt({
        attempt: false,
        answer: answer
      })
    }
  }

  const handleModalTip = () => {
    setIsModalTip(!isModalTip)
  }

  const setScreen = () => {
    switch (attempt.attempt) {
      case true: return correctAnswerScreen()
      case false: return wrongAnswerScreen()
      default: return answersScreen()
    }
  }

  const answersScreen = () => {
    const imgData = props.activitie.imageBase64;
    const hasSelectedTips =  isModalTip ? selectedTips : tips;

    return (
      <>
        <Header
          logo={logo}
          tips={hasSelectedTips}
          isSelectedTips={isModalTip}
          handleModalTip={handleModalTip}
        >
          {props.activitie.question}
        </Header>
        <Img src={`data:image/jpeg;base64,${imgData}`}></Img>
        <BoxAnswers>
          {props.activitie.answers.map((answer, key) => {
            return (
              <ContentAnswerOption
                onClick={() => handleCheckAnswer(answer)}
                key={key}
              >
                {answer.answer}
              </ContentAnswerOption>

            )
          })}
        </BoxAnswers>
      </>
    );
  }

  const correctAnswerScreen = () => {
    return (
      <ContainerWrong >
        <img style={{ width: '100%' }} src={attempt.answer.image}></img>
        <CorrectAnswerContainer>
          <div>
            <p>Você acertou!</p>
            <h1>{attempt.answer.answer}</h1>
          </div>
          <Button
            onClick={props.handlerNextActivitie}
          >CONTINUAR TRILHA</Button>
        </CorrectAnswerContainer>
      </ContainerWrong>
    )
  }

  const wrongAnswerScreen = () => {
    return (
      <ContainerWrong>
        <FeedbackBox>
          <h1>Ixi, você errou</h1>
          <strong>Se liga nas dicas:</strong>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. It has survived
            not only five centuries
          </p>
          <strong>{props.activitie.tip || 'sem dicas'}</strong>
        </FeedbackBox>
        <Button
          onClick={() => setAttempt({
            attempt: null,
            answer: null
          })}
        >
          Tentar novamente
        </Button>
      </ContainerWrong>
    )
  }

  const renderTip = () => {
    return (
      <ContainerTip>
        <ContentTip>
          <ContentInfoTip>
            {/* <img src={selectedTips} /> */}
            <ImgDialogBox src={dialogBox} />
            <ContentInfo>
              <TextTip>
                Ela nasceu na cidade de Paraopeba Minas Gerais, em 14 de
                Agosto de 1942. Se tornou uma das principais cantoras do
                samba brasileiro. Morreu tragicamente em decorrência de
                complicações de uma cirurgia. Seu apelido era Gerreira!
              </TextTip>
              <TextTip padding>
                Entre seus sucessos está MORENA DE ANGOLA.
              </TextTip>
              <img src={iconClose} onClick={handleModalTip}/>
            </ContentInfo>
            </ContentInfoTip>
          <ImgBento src={bento} />
        </ContentTip>
      </ContainerTip>
    );
  }

  return (
    <>
      {setScreen()}
      {isModalTip && renderTip()}
    </>
  )
}

export default WhoseEyesAreThese;
