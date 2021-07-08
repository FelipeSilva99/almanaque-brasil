import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

//Components
import Header from '../../header';
import IndividualLetter from '../../letter/individualLetter';
import Button from '../../buttons/containerButton';
import CorrectAnswer from './correctAnswer';
import SplashScreen from './splashScreen';
import WrongAnswer from './wrongAnswer';

//Images
import paleLeaves from './images/pale_leaves.svg';
import iconBack from './images/iconBack.svg';
import logo from './images/what_is_logo.svg';
import iconDelete from './images/iconDelete.svg';

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
  padding-top: ${props => props.isModal && '2rem'};
  flex: 1;
  display: flex;
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
  bottom: -14rem;
  right: -18.5rem;
  width: 36rem;
  z-index: ${props => props.zIndex && '-1'};

  @media (max-width: 360px) { width: 33rem; }
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

const Question = styled.h2`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.875rem;
  font-weight: 500;
  color: #272727;
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
  /* justify-content: center; */
  flex-wrap: wrap;
  width: 100%;
  /* max-width: 425px; */

  /* @media (max-width: 375px) {
    padding: ${props => props.margin && '1rem 0 1rem 0'};
  } */
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

const TrailsWhatIs = ({ isActivitie, handleNextQuestion }) => {
  const [answer, setAnswer] = useState([]);
  const [letterOption, setLetterOption] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState([]);
  const [answerResult, setAnswerResult] = useState('');
  const [activitie, setActivitive] = useState(null);
  const [isModal, setIsModal] = useState(null);
  const [isModalAnswer, setIsModalAnswer] = useState(undefined);
  const [modalWrongAnswer, setModalWrongAnswer] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [amountTrial, setAmountTrial] = useState(3);

  const handleAnswerSize = () => {
    let answerSplit = [];
    isActivitie?.answers[0]?.answer.split('').forEach((a, i) => {
      answerSplit.push({ id: i, value: '' });
    });

    return answerSplit || [];
  }

  const handleShuffleLetter = () => {
    const answer = isActivitie?.answers[0]?.answer;
    const answerLength = answer.length;
    const qtdAmount = (answerLength <= 7 && 9 - answerLength ) || (answerLength <= 8 && 14 - answerLength);
    const alphabetLetters = choosingAlphabetLetters(qtdAmount);
    const letterOption = answer + alphabetLetters;
    const lettersArray = letterOption.split('');
    // const shuffleLetter = radom(lettersArray).split('');

    let shuffleLetter = radom(lettersArray).split('');
    shuffleLetter = shuffleLetter.map((a, i) => ({ id: i, value: a }));

    return shuffleLetter;
  }

  useEffect(() => {
    setLetterOption(handleShuffleLetter());
    setAnswer(handleAnswerSize());
    setActivitive(isActivitie);
  }, [isActivitie]);

  useEffect(() => {
    let timer1 = setTimeout(() => setIsLoading(false), 2000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  const handleIsModalAnswer = () => {
    setIsModalAnswer(true);
  }

  const handleClenAnswer = () => {
    setAnswer([]);
    setSelectedLetter([]);
  }

  const handleWrongAnswer = () => {
    setModalWrongAnswer(false);
  }

  const handleClick = (event) => {
    event.stopPropagation();
    const isAnswer = isActivitie?.correctAnswer;
    const selectedAnswer = selectedLetter.map(item => item.value).join("");

    if (selectedAnswer === isAnswer) {
      setIsModal(true);
      handleClenAnswer();
    } else {
      setAnswerResult('');
      setSelectedLetter([]);
      setLetterOption(handleShuffleLetter());
      setAnswer(handleAnswerSize());
      setModalWrongAnswer(true);
      setAmountTrial(amountTrial-1);
      setAnswerResult('wrong');
    }
  };

  const handlerNextActivitie = () => {
    setIsModal(false);
    handleNextQuestion();
  }

  const choosingAlphabetLetters = (quantity) => {
    let result = [];
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;

    for (let i = 0; i < quantity; i++) {
      result.push(characters.charAt(Math.floor(Math.random() *
        charactersLength)));
    }

    return result.join('');
  };

  const radom = (text) => {
    let temp = [];
    let originalLength = text.length;

    for (var i = 0; i < originalLength; i++) {
      temp.push(text.splice(Math.floor(Math.random() * text.length), 1));
    }

    return temp.join('');
  };


  const handleSelectedLetter = (event, index, letter) => {
    event.stopPropagation();
    const isSetterSelected = selectedLetter.find(i => index === i.id);
    let letterSelected = selectedLetter;
    let newAnswer = answer || [];

    if (isSetterSelected) {
      // letterSelected = selectedLetter.filter((i) => i.id !== index);
      // newAnswer = answer.map(i => {
      //   if (i.oldId === index) {
      //     setAnswerResult('')
      //     return { id: i.id, value: '' };
      //   } return i;
      // })
    } else {
      if (selectedLetter.length <= answer.length) {
        letterSelected = selectedLetter.concat({ id: index, value: letter });
        let empty = answer.find(i => i.value === '');
        newAnswer[empty.id].value = letter.value;
        newAnswer[empty.id].oldId = index;
      }
      if (selectedLetter.length === answer.length - 1) {
        setAnswerResult('checkAnswer');
      }
    }
    setSelectedLetter(letterSelected);
    setAnswer(newAnswer);
  };

  const handleEraseLetter = () => {
    // event.stopPropagation();
    let newAnswer = answer;
    let newList = [];  
    // let empty = answer.find(i => i.value !== ''); // inverto a ordem do array e procuro o primeiro item com um value valido
    let qtdItem = answer.filter(i => i.value !== '').length;
    newAnswer[qtdItem-1].value = '';           // zero o value
    newAnswer[qtdItem-1].oldId = undefined;    // zero o oldId
    newList.push(newAnswer);
    setAnswer(newList[0]);
  };


  const individualLetters = () => {
    return letterOption.map((item, index) => {
      const letterSelected = selectedLetter.find(i => index === i.id);
      return (
        <AnswerOption
          isSelected={letterSelected}
          onClick={(e) => handleSelectedLetter(e, index, item)}
        >
          {item.value}
        </AnswerOption>
      )
    });
  };

  const squareAnswer = (letter) => {
    const background = letter.value && '#36A39A';
    const border = letter.value && '1px solid #36A39A';

    return (
      <IndividualLetter
        background={background}
        border={border}
        letter={letter?.value}
      />
    )
  }

  return (
    // <CorrectAnswer
    //   handlerNextActivitie={handleNextQuestion}
    //   answer={isActivitie.answers}/>
    isLoading ? <SplashScreen /> : (
      <Container>
      {modalWrongAnswer ? <WrongAnswer chances={amountTrial} handleClick={handleWrongAnswer} /> : (
        <>
          <Header iconBack={iconBack} logo={logo} />
          <Content isModal={isModalAnswer}>
            <Title><span>"</span>{activitie?.question}</Title><span>"</span>
          </Content>
          <figure>
            <IconLeaves src={paleLeaves} />
          </figure>
          <Button
            handleClick={handleIsModalAnswer}
          >
            responder
          </Button>
          {isModalAnswer && (
            <ContainerAnswer>
              <figure>
                <IconLeaves top left zIndex src={paleLeaves} />
              </figure>
              <BoxAnswer>
                <ContentAnswer>
                  {answer?.map(i => squareAnswer(i))}
                </ContentAnswer>
                <ContentAnswer padding>
                  {individualLetters()}
                  <IconDelete src={iconDelete} onClick={handleEraseLetter}/>
                </ContentAnswer>
              </BoxAnswer>
              <Button
                height='auto'
                handleClick={handleClick}
              >
                Confirmar Resposta
              </Button>
            </ContainerAnswer>
          )}
          </>
        )}
        {/* {isModal && <CorrectAnswer answer={activitie?.correctAnswer} image={activitie?.image} handlerNextActivitie={handlerNextActivitie}/>} */}
      </Container>
    )
  );
}

export default TrailsWhatIs;
