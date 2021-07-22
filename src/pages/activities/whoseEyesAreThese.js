import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

//Components
import Header from '../../components/header';
import Button from '../../components/buttons/containerButton';
import CorrectAnswer from '../../components/activities/correctAnswer';
import SplashScreen from './splashScreen';
import WrongAnswer from '../../components/activities/wrongAnswer';
import ModalTip from '../../components/modal/tip';

//Images
import logo from '../../images/logo/whoseEyesAreThese.svg';
import logoBig from '../../images/logo/whoseEyesAreTheseBig.svg'
import selectedTips from '../../images/icons/selectedTip.svg';
import tips from '../../images/icons/tip.svg';

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
  padding-top: ${props => props.isModal && '1rem'};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: ${props => !props.isModal && 'center'};
  align-items: center;
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
    width: 17.188rem;
    max-width: 300px;
    border-radius: 10px;
    box-shadow: 0px 5px 6px silver;
  }
`;
const Title = styled.h1`
  margin-top: 2vh;
  width: 20rem;
  font-size: 1rem;
  font-weight: 800;
  line-height: 2rem;
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
  max-width: 328px;
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

const WhoseEyesAreThese = ({ useActivitie, handleNextQuestion }) => {
  const [isModalAnswerOption, setIsModalAnswerOption] = useState(undefined);
  const [modalCorrectAnswer, setModalCorrectAnswer] = useState(false)
  const [answer, setAnswer] = useState(undefined);
  const [modalWrongAnswer, setModalWrongAnswer] = useState(undefined);
  const [activitie, setActivitie] = useState(undefined);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [amountTrial, setAmountTrial] = useState(3);
  const [isModalTip, setIsModalTip] = useState(undefined);

  useEffect(() => {
    let timer1 = setTimeout(() => setIsLoading(false), 2000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  useEffect(() => {
    setActivitie(useActivitie);
  }, [useActivitie]);

  const handleModalTip = () => {
    setIsModalTip(!isModalTip)
  }

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
    const hasSelectedTips = isModalTip ? selectedTips : tips;

    return (
      <>
        <Header
          logo={logo}
          tips={isModalAnswerOption && hasSelectedTips}
          isSelectedTips={isModalTip}
          handleModalTip={handleModalTip}
        />
        <Content isModal={isModalAnswerOption}>
          <img src={`data:image/jpeg;base64,${activitie.imageBase64}`} alt={"imagem da atividade"}/>
          <Title>{activitie?.question}</Title>
        </Content>
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
    isLoading ? <SplashScreen activitieLogo={logoBig}/> : (
      <Container>
        {(
          !modalWrongAnswer
          && !modalCorrectAnswer
          && !showAnswer)
          && renderScreen()
        }
        {isModalAnswerOption && renderAnswerOption()}
        {isModalTip && <ModalTip text={activitie.tips} handleModalTip={handleModalTip} />}
        {modalWrongAnswer && <WrongAnswer chances={amountTrial} handleClick={handleWrongAnswer} handleShowAnswer={showModalAnswer} tips={useActivitie.tips}/>}
        {modalCorrectAnswer && <CorrectAnswer handlerNextActivitie={handleNextQuestion} answer={answer} toScore amountTrial={amountTrial}/>}
        {showAnswer && <CorrectAnswer handlerNextActivitie={handleNextQuestion} answer={useActivitie.answers[3]} amountTrial={amountTrial}/>}
      </Container>
    )
  );
}

export default WhoseEyesAreThese;