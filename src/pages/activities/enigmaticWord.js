import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { shuffle } from '../../utils'

// Component
import Header from '../../components/header';
import ContainerButton from '../../components/buttons/containerButton';
import WrongAnswer from '../../components/activities/wrongAnswer';
import SplashScreen from './splashScreen';

//Images
import logo from '../../images/logo/enigmaticWord.svg';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background-color: #f3f3f3;
  width: 100vw;
  height: 100vh;  
`

const Content = styled.div`
  padding: 2rem;
  padding-bottom: 0;
  width: 100vw;
  height: calc(100% - 83px);
  background: ${props => !props.isCorrectAnswer && '#fff'};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;

  @media(min-width: 768px) {height: 70vh; padding-top: 6rem;}
`

const ContentInfo = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background-color: ${props => (props.isCorrectAnswer && 'none') || props.backgroundColor};

  img { opacity: ${props => (props.isCorrectAnswer && '1') || props.opacity }}
`

const Text = styled.div`
  width: 7rem;
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: .875rem;
  color: #373737;
  font-weight: 900;
  border-radius: 8px;
  box-shadow: ${props => props.isCorrectAnswer ? 'none' : '0 3px 6px #00000029'};
`

const Box = styled.div`
  display: flex;
  width: 100%;
  max-width: 300px;
  flex-direction: row;
  justify-content:  ${props => props.isCorrectAnswer ? 'space-evenly' : 'space-between'};
  
`;

function EnigmaticWord({ useActivitie, handlerNextActivitie }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [pairs, setPairs] = useState(undefined);
  const [activitie, setActivitie] = useState(undefined);
  const [isModalTip, setIsModalTip] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true)
  const [modalWrongAnswer, setModalWrongAnswer] = useState(undefined);
  const [amountTrial, setAmountTrial] = useState(3);
  const [inMemoryItem, setInMemoryItem] = useState(undefined);
  const [hasItemInMemory, setHasItemInMemory] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(undefined);


  useEffect(() => setActivitie(useActivitie), [])
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    isLoading ? <SplashScreen activitieLogo={logo} /> : (
      <Container>
        <Header logo={logo} />
      </Container>
    )
  )
}

export default EnigmaticWord;
