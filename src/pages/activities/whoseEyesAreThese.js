import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

//Components
import Header from '../../components/header';
import Button from '../../components/buttons/containerButton';
import CorrectAnswer from '../../components/activities/correctAnswer';
import SplashScreen from '../../components/activities/splashScreen';
import WrongAnswer from '../../components/activities/wrongAnswer';

//Images
import paleLeaves from '../../images/whatIsWhatIs/pale_leaves.svg';
import iconBack from '../../images/whatIsWhatIs/iconBack.svg';
import logo from '../../images/whoseEyesAreThese/logo.svg';
import logoBig from '../../images/whoseEyesAreThese/logoBig.svg'
import cactus from '../../images/cactus.svg';

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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: ${props => props.isModal && '2rem'};
  flex: 1;
  display: flex;
  align-items: ${props => !props.isModal && 'center'};
  z-index: 1;

  h1 {
    font-size: 1.1rem;
    margin-top: 2vh;
  }
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
`;
const Title = styled.h1`
  width: 20rem;
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 2rem;
  color: #373737;
  text-align: center;
  
  @media (max-width: 320px) { width: 18rem; }
`;

const IconLeaves = styled.img`
  position: absolute;
  top: ${props => props.top && '-20rem'};
  bottom: -1rem;
  right: -5.5rem;
  width: 17rem;
  z-index: ${props => props.zIndex && '-1'};

  /* @media (max-width: 360px) { width: 17rem; } */
`;

const ContainerAnswer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  overflow: hidden;
  z-index: 1;

  @media (min-width: 1024px) {
    height: 60%;
  }
`;

const BoxAnswer = styled.div`
  padding: 0 2.6875rem;
  max-width: 425px;
  height: 100%;
  min-height: 52vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-direction: column;
`;

const ContentAnswer = styled.div`
  padding-top: ${props => props.padding && '2rem'};
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const AnswerOption = styled.button`
  margin: 2% 3% 2% 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.25rem;
  font-size: 1.375rem;
  font-weight: bold;
  color: #fff;
  background: ${props => props.isSelected ? '#D5D5D5' : '#36A39A'};
  border-radius: 12px;
  box-shadow: ${props => props.isSelected ? '0 5px 0 #9F9F9F' : '0 5px 0 #148077'};
  
  @media (max-width: 360px) { margin: 2%; }
  @media (max-width: 320px) { margin: 2% 1% 3% 1%; }
`;

const IconDelete = styled.img`
  margin: 2% 3% 2% 3%;
 
  @media (max-width: 360px) { margin: 2%; }
  @media (max-width: 320px) { margin: 2% 1% 3% 1%; }
`;

const WhoseEyesAreThese = ({ isActivitie, handleNextQuestion }) => {
  const [isModalAnswer, setIsModalAnswer] = useState(undefined);
  const [modalCorrectAnswer, setModalCorrectAnswer] = useState(false)
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
    setActivitie(isActivitie);
  }, [isActivitie]);

  const handleIsModalAnswer = () => {
    setIsModalAnswer(true);
  }

  const handleWrongAnswer = () => {
    setModalWrongAnswer(false);
  }

  const showModalAnswer = () => {
    setModalWrongAnswer(false);
    setModalCorrectAnswer(false);
    setShowAnswer(true);
  }


  const renderScreen = () => {
    console.log(activitie.imageBase64)
    return (
      <>
        <Header iconBack={iconBack} logo={logo} />
        <Content isModal={isModalAnswer}>
          <img src={`data:image/jpeg;base64,${activitie.imageBase64}`}></img>
          <Title><span></span>{activitie?.question}</Title>
        </Content>
        <figure>
          <IconLeaves src={cactus} />
        </figure>
        <Button
          handleClick={handleIsModalAnswer}
        >
          responder
        </Button>
      </>
    )
  }

  return (
    isLoading ? <SplashScreen activitieLogo={logoBig}/> : (
      <Container>
        {(
          !modalWrongAnswer
          && !modalCorrectAnswer
          && !showAnswer)
          && renderScreen()
        }
        {modalWrongAnswer && <WrongAnswer chances={amountTrial} handleClick={handleWrongAnswer} handleShowAnswer={showModalAnswer} />}
        {modalCorrectAnswer && <CorrectAnswer handlerNextActivitie={handleNextQuestion} answer={isActivitie.answers} toScore />}
        {showAnswer && <CorrectAnswer handlerNextActivitie={handleNextQuestion} answer={isActivitie.answers} />}
      </Container>
    )
  );
}

export default WhoseEyesAreThese;