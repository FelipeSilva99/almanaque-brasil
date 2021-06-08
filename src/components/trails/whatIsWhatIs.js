import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// import {
//   createNewTrails
// } from '../../modules/trails-module';

// const mapStateToProps = state => ({
//   isTrails: state.trails.isTrails,
// });

// const mapDispatchToProps = dispatch => ({
//   createNewTrails: info => {
//     dispatch(createNewTrails(info));
//   },
// });

//Components
import Button from '../buttons/button';

// Styles
const Container = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-bottom: 0;
  font-size: 1.375rem;
  font-weight: 500;
  line-height: 0;
  color: #272727;
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Question = styled.h2`
  margin-top: 3rem;
  margin-bottom: 0;
  font-size: 1.875rem;
  font-weight: 500;
  color: #272727;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentSquareAnswer = styled.div`
  margin-right: .3rem;
  width: 3.438rem;
  height: 3.125rem;
  font-size: 1.563rem;
  font-weight: 700;
  color: #fff;
  border-radius: 10px;
  border: ${props => props.isLetter ? '1px solid #c7adfc' : '1px dashed #272727'};
  background: ${props => props.isLetter && '#c7adfc'};
  box-shadow: ${props => props.isLetter && '0 5px 0 #9a72f6'};
  display: flex;
  justify-content: center;
  align-items: center;
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
  margin-bottom: ${props => props.bottom && '3.063rem'};
  display: flex;
  flex-wrap: wrap;
`;

const ContentAnswerOption = styled.button`
  margin-right: .625rem;
  margin-bottom: .875rem;
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

const TrailsWhatIs = ({ isAnswer }) => {
  const [answer, setAnswer] = useState([]);
  const [letterOption, setLetterOption] = useState([]);
  const [selectedLetter, setSetelectedLetter] = useState([]);

  useEffect(() => {
    const alphabetLetters = choosingAlphabetLetters(5);
    const letterOption = isAnswer + alphabetLetters;
    const lettersArray = letterOption.split('');
    const shuffleLetter = radom(lettersArray).split('');

    let answerSplit = [];
    isAnswer.split('').forEach((a, i) => {
      answerSplit.push({ id: i, value: '' });
    });

    setLetterOption(shuffleLetter);
    setAnswer(answerSplit);
  }, [isAnswer]);


  const handleClick = (event) => {
    event.stopPropagation();
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
          return { id: i.id, value: '' };
        } return i;
      })
    } else {
      letterSelected = selectedLetter.concat({ id: index, value: letter });
      let empty = answer.find(i => i.value === '');
      newAnswer[empty.id].value = letter;
      newAnswer[empty.id].oldId = index;
    }

    setSetelectedLetter(letterSelected);
    setAnswer(newAnswer);
  };

  const individualLetters = () => {
    return letterOption.map((item, index) => {
      const letterSelected = selectedLetter.find(i => index === i.id);
      return (
        <ContentAnswerOption
          isSelected={letterSelected}
          onClick={(e) => handleSelectedLetter(e, index, item)}
        >
          {item}
        </ContentAnswerOption>)
    });
  };

  const squareAnswer = (letter) => (
    <ContentSquareAnswer isLetter={letter.value}>
      {letter?.value}
    </ContentSquareAnswer>
  );

  return (
    <Container>
      <Title>O que é o que é?</Title>
      <Content>
        <Question>
          O que é redondo e chato, mas faz todo mundo dançar?
        </Question>
        <BoxAnswer>
          <ContainerAnswer bottom>
            {answer.map(i => squareAnswer(i))}
          </ContainerAnswer>
          <ContainerAnswer>
            {individualLetters()}
          </ContainerAnswer>
        </BoxAnswer>
        <Button handleClick={handleClick}>Conferir Resposta</Button>
      </Content>
    </Container>
  );
}

export default TrailsWhatIs;
