import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

//Components
import Header from '../../components/header';
import Button from '../../components/buttons/containerButton';
import CorrectAnswer from '../../components/activities/correctAnswer';
import SplashScreen from './splashScreen';
import WrongAnswer from '../../components/activities/wrongAnswer';
import ContentImageText from '../../components/activities/activitieDescription';
import OptionsButtons from '../../components/activities/optionsButtons';

//Images
import logo from '../../images/logo/didYouKnow.svg';

// Styles
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #f3f3f3;

  @media (min-width: 1024px) {
    justify-content: center;
  }
`;

const DidYouKnow = (props) => {
  const [isModalAnswerOption, setIsModalAnswerOption] = useState(undefined);
  const [modalCorrectAnswer, setModalCorrectAnswer] = useState(false)
  const [answer, setAnswer] = useState(undefined);
  const [modalWrongAnswer, setModalWrongAnswer] = useState(undefined);
  const [activitie, setActivitie] = useState(undefined)
  const [showAnswer, setShowAnswer] = useState({isModal: undefined, answer: undefined});
  const [isLoading, setIsLoading] = useState(true);
  const [amountTrial, setAmountTrial] = useState(3);

  useEffect(() => {
    let timer1 = setTimeout(() => setIsLoading(false), 2000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  useEffect(() => {
    setActivitie(props.useActivitie);
  }, [props.useActivitie]);

  useEffect(() => {
    if (modalWrongAnswer) {
      props.registerAction({
        activityId: props.useActivitie.id,
        trailId: props.useActivitie.trailId,
        success: false,
        timestamp: Date.now()
      })
    }

    if (modalCorrectAnswer) {
      props.registerAction({
        activityId: props.useActivitie.id,
        trailId: props.useActivitie.trailId,
        success: true,
        timestamp: Date.now()
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalCorrectAnswer, modalWrongAnswer])

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
    const useAnswers = activitie.answers.filter(item => item.isCorrect);
    setModalWrongAnswer(false);
    setModalCorrectAnswer(false);
    setShowAnswer({isModal: true, answer: useAnswers});
  }

  const renderScreen = () => {
    return (
      <>
        <Header title={activitie?.name} />
        <ContentImageText
          image={`data:image/jpeg;base64,${activitie.imageBase64}`}
          title={activitie?.question}
          info={activitie?.complementaryInformation}
          isModal={isModalAnswerOption}
        />
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
      <OptionsButtons
        options={activitie.answers}
        handleCheckAnswer={handleCheckAnswer}
      />
    )
  }

  return (
    isLoading ? <SplashScreen activitieLogo={logo} /> : (
      <Container>
        {(
          !modalWrongAnswer
          && !modalCorrectAnswer
          && !showAnswer.isModal)
          && renderScreen()
        }
        {isModalAnswerOption && renderAnswerOption()}
        {modalWrongAnswer && <WrongAnswer chances={amountTrial} handleClick={handleWrongAnswer} handleShowAnswer={showModalAnswer} errorMessages={activitie.errorMessages} />}
        {modalCorrectAnswer && <CorrectAnswer handlerNextActivitie={props.handlerNextActivitie} answer={answer} toScore isTrunk idActivitie={activitie.chestContentId} amountTrial={amountTrial} />}
        {showAnswer.isModal && <CorrectAnswer handlerNextActivitie={props.handlerNextActivitie} answer={showAnswer.answer} isTrunk idActivitie={activitie.chestContentId} amountTrial={amountTrial} />}
      </Container>
    )
  );
}

export default DidYouKnow;
