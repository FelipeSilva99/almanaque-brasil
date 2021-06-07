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

const ContainerLetterSquare = styled.div`
  display: flex;
`;

const ContentLetterSquare = styled.div`
  margin-right: .3rem;
  border: 1px dashed #272727;
  width: 3.438rem;
  height: 3.125rem;
  border-radius: 10px;
`;

const BoxAnswerOption = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

const ContainerAnswerOption = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const ContentAnswerOption = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  width: 37px;
  height: 33px;
  font-weight: bold;
  color: #fff;
  background: ${props => props.isSelected ? 'red' : '#c7adfc'};
  border-radius: 8px;
  box-shadow: 0 5px 0 #9a72f6;
`;

const TrailsWhatIs = ({ renderAnswer }) => {
  const [selectedLetter, setSetelectedLetter] = useState([]);
  const [letterAnswer, setLetterAnswer] = useState([]);

  useEffect(() => {
    const alphabetLetters = choosingAlphabetLetters(5);
    const letterAnswer = renderAnswer + alphabetLetters;
    const lettersArray = letterAnswer.split('');
    const shuffleLetter = radom(lettersArray).split('');

    setLetterAnswer(shuffleLetter);
  }, []);

  const choosingAlphabetLetters = (quantity) => {
    let result = [];
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;
    for (let i = 0; i < quantity; i++) {
      result.push(characters.charAt(Math.floor(Math.random() *
        charactersLength)));
    }
    return result.join('');
  }

  const radom = (text) => {
    let temp = [];
    let originalLength = text.length;
    for (var i = 0; i < originalLength; i++) {
      temp.push(text.splice(Math.floor(Math.random() * text.length), 1));
    }

    return temp.join('');
  }

  const separatingLetter = () => {
    
    return letterAnswer.map((item, index) => {
      const isTeste = [];
      const letterSelected = selectedLetter.includes(item);
      return (
        <ContentAnswerOption isSelected={letterSelected} onClick={(e) => handleSelectedLetter(e, item)}>
          {item}
        </ContentAnswerOption>)
    });
  }

  const handleClick = (event) => {
    event.stopPropagation();
  }

  const handleSelectedLetter = (event, letter) => {
    event.stopPropagation();

    let listSelectedLetter = [];
    const letterSelected = selectedLetter.filter(i => i !== letter);
    listSelectedLetter = [...selectedLetter, letter];

    setSetelectedLetter(listSelectedLetter);
  }

  const LetterSquare = () => (
    <ContentLetterSquare>

    </ContentLetterSquare>
  );

  return (
    <Container>
      <Title>O que é o que é?</Title>
      <Content>
        <Question>
          O que é redondo e chato, mas faz todo mundo dançar?
        </Question>
        <BoxAnswerOption>
          <ContainerLetterSquare>
            <ContentLetterSquare />
            <ContentLetterSquare />
            <ContentLetterSquare />
            <ContentLetterSquare />
            <ContentLetterSquare />
          </ContainerLetterSquare>

          {separatingLetter()}
        </BoxAnswerOption>

        <Button handleClick={() => handleClick()}>Conferir Resposta</Button>
      </Content>
    </Container>
  );
}

export default TrailsWhatIs;

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(TrailsWhatIs);
