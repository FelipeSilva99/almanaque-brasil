import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Component
import Header from '../../components/header';
import WrongAnswer from '../../components/activities/wrongAnswer';
import CorrectAnswer from '../../components/activities/correctAnswer';
import SplashScreen from './splashScreen';
import Button from '../../components/buttons/containerButton';

//Images
import logo from '../../images/logo/enigmaticWord.svg';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  /* background: #f3f3f3; */
  @media (min-width: 1024px) {
    justify-content: center;
  }
`;

const Content = styled.div`
  /* padding: 2rem;*/
  margin-bottom: 1rem; 
  width: 100vw;
  /* height: calc(100% - 83px); */
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  box-sizing: border-box;
  background: #f3f3f3;

`

const Puzzle = styled.div`
  /* position: relative;
  bottom: 7vh; */
  display: flex;
  justify-content: space-around;
  width: calc(100vw - 4rem);
  max-width: 435px;
  min-width: 320px;
`;

const Enigma = styled.div`
  width: 100px;
`;

const EnigmaBox = styled.div`
  display: ${props => props.firstBox && "flex"};
  flex-direction: column;
  align-items: center;
  min-height: ${props => props.firstBox && '245px'};
  padding: ${props => props.secondBox && '.6875rem'};
  margin-top: ${props => props.secondBox && '10px'};
  border-radius: 10px;
  background-color: #FFD000;
  input{
    background-color: #F08800;
    border: none;
    border-radius: 10px;
    width: 100%;
    height: 35px;
    padding: 1rem 0;
    font-size: 1.25rem;
    font-weight: 900;
    text-align: center;
    color: #373737;
  }

  input::placeholder{
    font-size: .8rem;
    font-weight: normal;
    /* margin-bottom: 1rem; */
  }
`;

const EnigmaImage = styled.div`
  background-color: #fff;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 14vh;
  min-height: 90px;
`;

const Less = styled.div`
  margin-top: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  color: #fff;
  width: 2.8rem;
  height: 2.5rem;
  font-size: 1.5rem;
  font-weight: 900;
  background-color: #FF9292;
`;

const Word = styled.div`
  margin-bottom: 5vh;
  margin-top: 5vh; 
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0% 10% 0% 10%;
  border-radius: 15px;
  color: #fff;
  font-size: 2rem;
  font-weight: 900;
  background-color: #F08800;
`;

function EnigmaticWord({ activitie, handlerNextActivitie, registerAction }) {
  const [isLoading, setIsLoading] = useState(true)
  const [enigmas, setEnigmas] = useState(undefined)
  const [modalWrongAnswer, setModalWrongAnswer] = useState(undefined);
  const [amountTrial, setAmountTrial] = useState(3);
  const [modalCorrectAnswer, setModalCorrectAnswer] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false);
  const [isError, setIsError] = useState(undefined);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, []);

  useEffect(() => {
    setEnigmas(Object.values(activitie.enigmas).map(item => {
      return {
        ...item,
        userInput: ""
      }
    }))
    
  }, [activitie]);

  useEffect(() => {
    if(modalWrongAnswer) {
      registerAction({
        activityId: activitie.id,
        trailId: activitie.trailId,
        success: false,
        timestamp: Date.now()
      })
    }

    if(modalCorrectAnswer) {
      registerAction({
        activityId: activitie.id,
        trailId: activitie.trailId,
        success: true,
        timestamp: Date.now()
      })
    }
  }, [modalCorrectAnswer, modalWrongAnswer])

  const handleValue = (e, i) => {
    const newEnigmas = enigmas
    enigmas[i].userInput = e.target.value;
    setEnigmas([...newEnigmas]);
    setIsError(false);
  };

  const handleModalWrongAnswer = () => {
    setModalWrongAnswer(!modalWrongAnswer);
  };

  const handleWrongAnswer = () => {
    handleModalWrongAnswer();
    setAmountTrial(amountTrial -1)
  };

  const showModalAnswer = () => {
    handleModalWrongAnswer();
    setShowAnswer(true);
  };

  const checkAnswer = () => {
    let userAnswer = "";
    const isError = enigmas.map(item => item.userInput).filter(i => !i).length > 0;

    if(isError) {
      setIsError(true);
    } else {
      // eslint-disable-next-line array-callback-return
      enigmas.map(item => {
        userAnswer = `${userAnswer}${item.userInput}`
      })
      userAnswer = userAnswer.toLowerCase();
      if(userAnswer === activitie.answer.answer) setModalCorrectAnswer(true);
      else handleWrongAnswer()
    }
  };

  return (
    isLoading ? <SplashScreen activitieLogo={logo} /> : (
      <Container>
        <Header title={activitie?.name} />
        <Content>
          <Puzzle>
            {/* {JSON.stringify(activitie?.enigmas)} */}
            {enigmas && enigmas.map((enigma, i) => {
              return (
                <Enigma key={i}>
                  <EnigmaBox firstBox>
                    <EnigmaImage src={`data:image/jpeg;base64,${enigma.imageBase64}`} />
                    <Less>-</Less>
                    <Word>{enigma.subtrair}</Word>
                  </EnigmaBox>
                  <EnigmaBox secondBox>
                    <input
                      value={enigma.userInput}
                      onChange={(e) => handleValue(e, i)}
                      autoComplete="off"
                      maxLength="4"
                      placeholder="Digite aqui"
                      type="text"
                    ></input>
                  </EnigmaBox>
                </Enigma>
              );
            })}
          </Puzzle>
        </Content>
        <Button
          isError={isError && 'Você precisa digitar em todos os campos'}
          handleClick={checkAnswer}
        >responder
        </Button>
        {modalWrongAnswer && <WrongAnswer chances={amountTrial} handleClick={handleModalWrongAnswer} handleShowAnswer={showModalAnswer}/>}
        {modalCorrectAnswer && <CorrectAnswer handlerNextActivitie={handlerNextActivitie} answer={activitie.answer} toScore amountTrial={amountTrial}/>}
        {showAnswer && <CorrectAnswer handlerNextActivitie={handlerNextActivitie} answer={activitie.answer} amountTrial={amountTrial}/>}
      </Container>
    )
  )
}

export default EnigmaticWord;
