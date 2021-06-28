import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

//Component
import Header from '../header/index';

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

const WhoseEyesAreThese = (props) => {
  const [attempt, setAttempt] = useState({
    attempt: null,
    answer: null
  })

  const [answers, setAnswers] = useState({
    loading: true,
    data: undefined,
    error: false
  });

  useEffect(() => {
    const activitie = props.activitie;

    setAnswers({
      loading: false,
      data: activitie,
      error: false,
    });
  }, []);

  const Button = (props) => {
    return (
      <ContentAnswerOption onClick={props.onClick}>
        {props.children}
      </ContentAnswerOption>
    )
  }

  const handleCheckAnswer = (answer) => {
    if (answer.isCorrectAnswer) {
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

  const setScreen = () => {
    switch (attempt.attempt) {
      case true: return correctAnswerScreen()
      case false: return wrongAnswerScreen()
      default: return answersScreen()
    }
  }

  const answersScreen = () => {
    return (
      <>
        <Header>{props.activitie.question}</Header>
        {/* <Img src={answers.data.imageBase64}></Img> */}
        <BoxAnswers>
          {answers.data && answers.data.answers.map((answer, key) => {
            return (
              <ContentAnswerOption
                onClick={() => handleCheckAnswer(answer.answer)}
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

  return setScreen();
}

export default WhoseEyesAreThese;
