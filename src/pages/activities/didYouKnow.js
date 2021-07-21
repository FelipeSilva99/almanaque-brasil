import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

//Components
import Header from '../../components/header';
import Button from '../../components/buttons/containerButton';
import CorrectAnswer from '../../components/activities/correctAnswer';
import SplashScreen from './splashScreen';
import WrongAnswer from '../../components/activities/wrongAnswer';

//Images
import logo from '../../images/logo/didYouKnow.svg';

// Styles
const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #f3f3f3;
  @media (min-width: 1024px) {
    justify-content: center;
  }
`;

const Scroll = styled.div`
  flex: 1;
  width: 100vw;

  ${({ isModal }) => !isModal && `
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
  `} 
`;


const Content = styled.div`
  margin: auto;
  padding-top: ${props => props.isModal && '1rem'};
  padding: 0 1rem 1rem;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: ${props => !props.isModal && 'center'};
  align-items: ${props => !props.isModal && 'center'};
  z-index: 1;
 
  span {
    font-size: 2.5rem;
    font-weight: 700;
    color: #36A39A;
    line-height: 0;
    :last-child {
      padding-top: ${props => props.isModal ? '2.5rem' : '1rem'}
    }
  }
  img {
    max-width: 300px;
    border-radius: 10px;
    box-shadow: 0px 5px 6px silver;
  }

  p { margin-top: 2vh; }
`;
const Title = styled.h1`
  margin-top: 2vh;
  width: 20rem;
  font-size: 1rem;
  font-weight: 800;
  line-height: 1.3rem;
  color: #373737;
  text-align: center;
  
  @media (max-width: 320px) { width: 18rem; }
`;

const ContentAnswerOption = styled.button`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  max-width: 425px;
  height: 2.313rem;
  font-size: .75rem;
  font-weight: 900;
  color: #373737;
  letter-spacing: .05rem;
  text-transform: uppercase;
  background: #FFD000;
  border-radius: 17px;
  box-shadow: 0 5px 0  #F08800;

  :last-child{
    margin-bottom: 0;
  }
`;

const ContainerAnswer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  overflow: hidden;
  z-index: 1;

  @media (min-width: 1024px) {height: 60%;}
  @media (max-width: 320px) {min-height: 45vh;}
`;

const DidYouKnow = ({ useActivitie, handlerNextActivitie }) => {
  const [isModalAnswerOption, setIsModalAnswerOption] = useState(undefined);
  const [modalCorrectAnswer, setModalCorrectAnswer] = useState(false)
  const [answer, setAnswer] = useState(undefined);
  const [modalWrongAnswer, setModalWrongAnswer] = useState(undefined);
  const [activitie, setActivitie] = useState(undefined)
  const [showAnswer, setShowAnswer] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [amountTrial, setAmountTrial] = useState(3);

  useEffect(() => {
    let timer1 = setTimeout(() => setIsLoading(false), 2000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  useEffect(() => {
    setActivitie(useActivitie);
  }, [useActivitie]);



  const handleIsModalAnswerOption = () => {
    setIsModalAnswerOption(true);
  }

  const handleWrongAnswer = () => {
    setModalWrongAnswer(false);
  }

  const handleCheckAnswer = (answer) => {
    if (answer.isCorrect) {
      setModalCorrectAnswer(true);
      setAnswer(answer)
    } else {
      setAmountTrial(amountTrial - 1);
      setModalWrongAnswer(true);
    }
  }

  const showModalAnswer = () => {
    setModalWrongAnswer(false);
    setModalCorrectAnswer(false);
    setShowAnswer(true);
  }

  const renderScreen = () => {
    return (
      <>
        <Header
          logo={logo}
        />
        <Scroll>
          <Content isModal={isModalAnswerOption}>
            <img src={`data:image/jpeg;base64,${activitie.imageBase64}}`} alt={"Imagem da atividade"}></img>
            <Title>{activitie?.question}</Title>
            {!isModalAnswerOption && <p>{activitie?.complementaryInformation}</p>}
          </Content>
        </Scroll>
        <Button
          handleClick={handleIsModalAnswerOption}
        >
          responder
        </Button>
      </>
    )
  }

  const renderAnswerOption = () => {
    return (
      <ContainerAnswer>
        {activitie.answers.map((answer, key) => {
          return (
            <ContentAnswerOption
              onClick={() => handleCheckAnswer(answer)}
              key={key}
            >
              {answer.answer}
            </ContentAnswerOption>
          )
        })}
      </ContainerAnswer>
    )
  }

  return (
    isLoading ? <SplashScreen activitieLogo={logo} /> : (
      <Container>
        {(
          !modalWrongAnswer
          && !modalCorrectAnswer
          && !showAnswer)
          && renderScreen()
        }
        {isModalAnswerOption && renderAnswerOption()}
        {modalWrongAnswer && <WrongAnswer chances={amountTrial} handleClick={handleWrongAnswer} handleShowAnswer={showModalAnswer} tips={useActivitie.tips}/>}
        {modalCorrectAnswer && <CorrectAnswer handlerNextActivitie={handlerNextActivitie} answer={answer} toScore  didYouKnowScreen amountTrial={amountTrial}/>}
        {showAnswer && <CorrectAnswer handlerNextActivitie={handlerNextActivitie} answer={useActivitie.answers[3]} didYouKnowScreen amountTrial={amountTrial}/>}
      </Container>
    )
  );
}

export default DidYouKnow;