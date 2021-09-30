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
import Tutorial from '../../components/modal/tutorialModal';

//Images
import logo from '../../images/logo/ourStuff.svg';

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

const OurStuff = ({ useActivitie, registerAction }) => {
  const [isModalAnswerOption, setIsModalAnswerOption] = useState(undefined);
  const [modalCorrectAnswer, setModalCorrectAnswer] = useState(false)
  const [answer, setAnswer] = useState(undefined);
  const [modalWrongAnswer, setModalWrongAnswer] = useState(undefined);
  const [activitie, setActivitie] = useState(undefined);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [amountTrial, setAmountTrial] = useState(3);
  const [isTutorial, setIsTutorial] = useState(undefined);

  useEffect(() => {
    let timer1 = setTimeout(() => setIsLoading(false), 2000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  useEffect(() => {
    setActivitie(useActivitie);
  }, [useActivitie]);

  useEffect(() => {
    if (useActivitie.trailId === 0) {
      setIsTutorial(true);
    }
  }, []);

  useEffect(() => {
    if (modalWrongAnswer) {
      registerAction({
        activityId: useActivitie.id,
        trailId: useActivitie.trailId,
        success: false,
        timestamp: Date.now(),
        score: 0,
        books: false,
      })
    }

    if (modalCorrectAnswer) {
      const point = amountTrial === 3 ? 10 : amountTrial === 2 ? 8 : amountTrial === 1 ? 5 : 0;
      
      registerAction({
        activityId: useActivitie.id,
        trailId: useActivitie.trailId,
        success: true,
        timestamp: Date.now(),
        score: point,
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

  const handleCloseTutorial = () => {
    setIsTutorial(false);
  }

  const showModalAnswer = () => {
    setModalWrongAnswer(false);
    setModalCorrectAnswer(false);
    setShowAnswer(true);
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

  const isAnswerCorrect = () => {
    return activitie.answers.filter(item => item.isCorrect);
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
        {modalWrongAnswer && <WrongAnswer chances={amountTrial} handleClick={handleWrongAnswer} handleShowAnswer={showModalAnswer} errorMessages={useActivitie.errorMessages}/>}
        {modalCorrectAnswer && <CorrectAnswer answer={answer} toScore isTrunk idActivitie={activitie.chestContentId} amountTrial={amountTrial}/>}
        {showAnswer && <CorrectAnswer answer={isAnswerCorrect()[0]} isTrunk idActivitie={activitie.chestContentId} amountTrial={amountTrial}/>}
        {isTutorial && <Tutorial screen='Coisas nossas' handleCloseTutorial={handleCloseTutorial} /> }
      </Container>
    )
  );
}

export default OurStuff;