import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

//Components
import Header from '../../header';
import IndividualLetter from '../../letter/individualLetter';
import Button from '../../buttons/containerButton';
import CorrectAnswer from '../correctAnswer';
import SplashScreen from './splashScreen';
import WrongAnswer from './wrongAnswer';

//Images
import paleLeaves from './images/pale_leaves.svg';
import iconBack from './images/iconBack.svg';
import logo from './images/what_is_logo.svg';

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
  flex: 1;
  display: flex;
  align-items: center;
  z-index: 1;

  span {
    font-size: 2.5rem;
    font-weight: 700;
    color: #36A39A;
    line-height: 0;

    :last-child {
      padding-top: 1rem;
    }
  }
`;
const Title = styled.h1`
  width: 19rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2rem;
  color: #373737;
  text-align: center;
`;

const IconLeaves = styled.img`
  position: absolute;
  bottom: -14rem;
  right: -18.5rem;
  width: 36rem;

  @media (max-width: 360px) { width: 33rem; }
`;

// const Content = styled.div`
//   height: 100%;
//   max-width: 475px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   @media (min-width: 1024px) {
//     height: 80%;
//   }
// `;

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

const TrailsWhatIs = ({ isActivitie, handleNextQuestion }) => {
  const [answer, setAnswer] = useState([]);
  const [letterOption, setLetterOption] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState([]);
  const [answerResult, setAnswerResult] = useState('');
  const [activitie, setActivitive] = useState(null);
  const [isModal, setIsModal] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  const handleAnswerSize = () => {
    let answerSplit = [];
    isActivitie?.correctAnswer?.split('').forEach((a, i) => {
      answerSplit.push({ id: i, value: '' });
    });

    return answerSplit;
  }

  const handleShuffleLetter = () => {
    const alphabetLetters = choosingAlphabetLetters(5);
    const letterOption = isActivitie?.correctAnswer + alphabetLetters;
    const lettersArray = letterOption.split('');
    const shuffleLetter = radom(lettersArray).split('');

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
    },[]);

  const handleClenAnswer = () => {
    setAnswer([]);
    setSelectedLetter([]);
  }

  const handleClick = (event) => {
    event.stopPropagation();
    const isAnswer = isActivitie?.correctAnswer;
    const selectedAnswer = selectedLetter.map(item => item.value).join("");

    if (selectedAnswer === isAnswer) {
      setIsModal(true);
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
    <WrongAnswer />
    
    // isLoading ? <SplashScreen /> : 
    // (
    //   <Container>
    //     <Header iconBack={iconBack} logo={logo} />
    //     <Content>
    //       {/* <Title><span>"</span>{activitie?.question}<span>"</span></Title> */}
    //       <Title><span>"</span>É redondo e chato, mas faz todo mundo dançar?</Title><span>"</span>
    //     </Content>
    //     <figure>
    //       <IconLeaves src={paleLeaves} />
    //     </figure>
    //     <Button
    //       background='#fcd029'
    //       boxShadow='0 7px 0 #ee892f'
    //     >
    //       responder
    //     </Button>
    //     {/* <Content>
    //       <Question>
            
    //       </Question>
    //       <BoxAnswer>
    //         {answerResult === 'wrong' && <TextError>Resposta errada</TextError>}
    //         <ContainerAnswer>
    //           {answer?.map(i => squareAnswer(i))}
    //         </ContainerAnswer>
    //         <ContainerAnswer margin>
    //           {individualLetters()}
    //         </ContainerAnswer>
    //       </BoxAnswer>
    //       <Button
    //         background={backgroundButton}
    //         boxShadow={boxShadowButton}
    //         handleClick={handleClick}
    //       >
    //         {answerResult === 'wrong' ? 'Tente novamente' : 'Conferir Resposta'}
    //       </Button>
    //     </Content>
    //     {isModal && <CorrectAnswer answer={activitie?.correctAnswer} image={activitie?.image} handlerNextActivitie={handlerNextActivitie}/>} */}
    //   </Container>
    // )
  );
}

export default TrailsWhatIs;
