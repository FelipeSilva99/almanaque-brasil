import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

//Components
import IndividualLetter from '../letter/individualLetter';
import Button from '../buttons/button';

// Styles
const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1024px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: 1.375rem;
  font-weight: 500;
  color: #272727;
`;

const Content = styled.div`
  height: 100%;
  max-width: 475px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    height: 80%;
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

const TextError = styled.h1`
  margin-bottom: 2rem;
  font-size: 1.125rem;
  color: #ec8383;
`;

const BoxAnswer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-direction: column;
`;

const ContainerAnswer = styled.div`
  padding: ${props => props.margin && '2.063rem 0 0 0'};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 425px;

  @media (max-width: 375px) {
    padding: ${props => props.margin && '1rem 0 1rem 0'};
  }
`;

const AnswerOption = styled.button`
  margin: 2% 4%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.313rem;
  height: 2.063rem;
  font-weight: bold;
  color: #fff;
  background: ${props => props.isSelected ? '#b9b9b9' : '#c7adfc'};
  border-radius: 8px;
  box-shadow: ${props => props.isSelected ? '0 5px 0 #9c9c9c' : '0 5px 0 #9a72f6'};
`;

const TrailsWhatIs = ({ isAnswer, handleNextQuestion, history }) => {
  const [answer, setAnswer] = useState([]);
  const [letterOption, setLetterOption] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState([]);
  const [isError] = useState(undefined);
  const [answerResult, setAnswerResult] = useState('');

  const handleAnswerSize = () => {
    let answerSplit = [];
    isAnswer?.split('').forEach((a, i) => {
      answerSplit.push({ id: i, value: '' });
    });

    return answerSplit;
  }

  const handleShuffleLetter = () => {
    const alphabetLetters = choosingAlphabetLetters(5);
    const letterOption = isAnswer + alphabetLetters;
    const lettersArray = letterOption.split('');
    const shuffleLetter = radom(lettersArray).split('');

    return shuffleLetter;
  }

  useEffect(() => {
    setLetterOption(handleShuffleLetter());
    setAnswer(handleAnswerSize());
  }, [isAnswer]);

  const handleClenAnswer = () => {
    setAnswer([]);
    setSelectedLetter([]);
  }

  const handleClick = (event) => {
    event.stopPropagation();
    const selectedAnswer = selectedLetter.map(item => item.value).join("");

    if (selectedAnswer === isAnswer) {
      handleNextQuestion();
      // history.push('/activities/correctAnswer');
      handleClenAnswer();
    } else if (answerResult === 'wrong') {
      setAnswerResult('');
      setSelectedLetter([]);
      setLetterOption(handleShuffleLetter());
      setAnswer(handleAnswerSize());
    } else {
      setAnswerResult('wrong');
    }
  };

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
      letterSelected = selectedLetter.filter((i) => i.id !== index);
      newAnswer = answer.map(i => {
        if (i.oldId === index) {
          setAnswerResult('')
          return { id: i.id, value: '' };
        } return i;
      })
    } else {
      if (selectedLetter.length <= answer.length) {
        letterSelected = selectedLetter.concat({ id: index, value: letter });
        let empty = answer.find(i => i.value === '');
        newAnswer[empty.id].value = letter;
        newAnswer[empty.id].oldId = index;
      }
      if (selectedLetter.length === answer.length - 1) {
        setAnswerResult('checkAnswer');
      }
    }
    setSelectedLetter(letterSelected);
    setAnswer(newAnswer);
  };

  const individualLetters = () => {
    return letterOption.map((item, index) => {
      const letterSelected = selectedLetter.find(i => index === i.id);
      return (
        <AnswerOption
          isSelected={letterSelected}
          onClick={(e) => handleSelectedLetter(e, index, item)}
        >
          {item}
        </AnswerOption>
      )
    });
  };

  const squareAnswer = (letter) => {
    const background = (answerResult === 'wrong' && '#ec8383') || (letter.value && '#c7adfc');
    const boxShadow = (answerResult === 'wrong' && '0 5px 0 #bb6060') || (letter.value && '0 5px 0 #9a72f6');
    const border = (answerResult === 'wrong' || letter.value) ? '1px solid #c7adfc' : '1px dashed #272727';

    return (
      <IndividualLetter
        background={background}
        boxShadow={boxShadow}
        border={border}
        letter={letter?.value}
      />
    )
  }

  const backgroundButton = (answerResult === 'checkAnswer' && '#19918d') || (answerResult === 'wrong' && '#ec8383');
	const boxShadowButton = (answerResult === 'checkAnswer' && '0 12px 0 #275653') || (answerResult === 'wrong' && '0 12px 0 #bb6060');

  return (
    <Container>
      <Title>O que é o que é?</Title>
      <Content>
        <Question>
          O que é redondo e chato, mas faz todo mundo dançar?
        </Question>
        <BoxAnswer>
          {answerResult === 'wrong' && <TextError>Resposta errada</TextError>}
          <ContainerAnswer>
            {answer?.map(i => squareAnswer(i))}
          </ContainerAnswer>
          <ContainerAnswer margin>
            {individualLetters()}
          </ContainerAnswer>
        </BoxAnswer>
        <Button
          background={backgroundButton}
          boxShadow={boxShadowButton}
          isError={isError}
          handleClick={handleClick}
        >
          {answerResult === 'wrong' ? 'Tente novamente' : 'Conferir Resposta'}
        </Button>
      </Content>
      
      
    </Container>
  );
}

export default TrailsWhatIs;
