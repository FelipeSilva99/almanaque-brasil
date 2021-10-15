import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

//Components
import Header from '../../components/header';
import Button from '../../components/buttons/containerButton';
import CorrectAnswer from '../../components/activities/correctAnswer';
import SplashScreen from './splashScreen';
import WrongAnswer from '../../components/activities/wrongAnswer';
import WrongAnswerWithoutScore from '../../components/activities/wrongAnswerWithoutScore';
import ContentImageText from '../../components/activities/activitieDescription';
import OptionsButtons from '../../components/activities/optionsButtons';
import Tutorial from '../../components/modal/tutorialModal';

//Utils
import { allowScore } from '../../utils/activity';
import { chancesAtActivity } from '../../utils/statistics'

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

const OurStuff = ({ useActivitie, registerAction, actionsBook, handleNextQuestion }) => {
  const [isModalAnswerOption, setIsModalAnswerOption] = useState(undefined);
  const [modalCorrectAnswer, setModalCorrectAnswer] = useState(false)
  const [answer, setAnswer] = useState(undefined);
  const [modalWrongAnswer, setModalWrongAnswer] = useState(undefined);
  const [isModalWithoutScore, setIsModalWithoutScore] = useState(undefined);
  const [activitie, setActivitie] = useState(undefined);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [chances, setChances] = useState(null);
  const [isTutorial, setIsTutorial] = useState(undefined);
  const [score, setScore] = useState(undefined)

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
  }, [useActivitie.trailId]);

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
      const point = chances === 3 ? 10 : chances === 2 ? 8 : chances === 1 ? 5 : 0;
      setScore(point)
      registerAction({
        activityId: useActivitie.id,
        trailId: useActivitie.trailId,
        success: true,
        timestamp: Date.now(),
        score: point,
        books: false,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalCorrectAnswer, modalWrongAnswer]);

  useEffect(() => {
    const { synced, pendingSync } = actionsBook;
    const useChancesAtActivity = chancesAtActivity(useActivitie.id, [...synced, ...pendingSync]);
    setChances(useChancesAtActivity);
  }, [actionsBook, useActivitie.id]);

  const handleIsModalAnswerOption = () => {
    setIsModalAnswerOption(true);
  }

  const handleWrongAnswer = () => {
    setModalWrongAnswer(false);
  }

  const handleWithoutScore = () => {
    setIsModalWithoutScore(undefined);
  }

  const handleCheckAnswer = (answer) => {
    const listActionsBook = [...actionsBook.synced, ...actionsBook.pendingSync];
    const useAllowScore = allowScore(activitie.trailId, activitie.id, listActionsBook);
    
    if (useAllowScore) {
        if (answer.isCorrect) {
          setModalCorrectAnswer(true);
          setAnswer(answer)
        } else {
          setChances(chances - 1);
          setModalWrongAnswer(true);
        }
      } else {
        if(answer.isCorrect) {
          setShowAnswer(true);
          setIsModalWithoutScore(true);
        } else {
          setIsModalWithoutScore(false);
        }
      }
  }

  const handleCloseTutorial = () => {
    setIsTutorial(false);
  }

  const showModalAnswer = () => {
    setModalWrongAnswer(false);
    setModalCorrectAnswer(false);
    setShowAnswer(true);
    setIsModalWithoutScore(undefined);
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
        {modalWrongAnswer && isModalWithoutScore === undefined && <WrongAnswer goBack={handleNextQuestion} chances={chances} handleClick={handleWrongAnswer} handleShowAnswer={showModalAnswer} errorMessages={useActivitie.errorMessages}/>}
        {isModalWithoutScore === false && <WrongAnswerWithoutScore handleClick={handleWithoutScore} handleShowAnswer={showModalAnswer} />}
        {modalCorrectAnswer && <CorrectAnswer answer={answer} toScore isTrunk idActivitie={activitie.chestContentId} score={score}/>}
        {showAnswer && <CorrectAnswer answer={isAnswerCorrect()[0]} noScore={isModalWithoutScore === true} isTrunk idActivitie={activitie.chestContentId} score={score}/>}
        {isTutorial && <Tutorial screen='Coisas nossas' handleCloseTutorial={handleCloseTutorial} /> }
      </Container>
    )
  );
}

export default OurStuff;