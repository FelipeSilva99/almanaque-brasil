import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { shuffle } from '../../utils'

// Component
import Header from '../../components/header';
import ContainerButton from '../../components/buttons/containerButton';
import WrongAnswer from '../../components/activities/wrongAnswer';
import SplashScreen from './splashScreen';
import Button from '../../components/buttons/containerButton';

//Images
import logo from '../../images/logo/enigmaticWord.svg';

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
  padding: 2rem;
  padding-bottom: 0;
  width: 100vw;
  height: calc(100% - 83px);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  box-sizing: border-box;
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

const Puzzle = styled.div`
  position: relative;
  bottom: 7vh;
  display: flex;
  justify-content: space-around;
  width: calc(100vw - 4rem);
  max-width: 435px;
  min-width: 320px;
`;

const Box = styled.div`
  display: flex;
  width: 100%;
  max-width: 300px;
  flex-direction: row;
  justify-content:  ${props => props.isCorrectAnswer ? 'space-evenly' : 'space-between'};
`;

const Enigma = styled.div`
  width: 100px;
`;

const EnigmaBox = styled.div`
  display: ${props => props.firstBox && "flex"};
  flex-direction: column;
  align-items: center;
  min-height: ${props => props.firstBox && '245px'};
  padding: ${props => props.secondBox && '.5rem'};
  margin-top: ${props => props.secondBox && '10px'};
  border-radius: 10px;
  background-color: #FFD000;
  input{
    background-color: #F08800;
    border: none;
    border-radius: 10px;
    width: 100%;
    height: 35px;
    font-size: 1rem;
    text-align: center;
    color: #373737;
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
`;

const Less = styled.div`
  margin-top: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  color: #fff;
  width: 2.8rem;
  height: 2rem;
  font-size: 2rem;
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

function EnigmaticWord({ activitie, handlerNextActivitie }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [pairs, setPairs] = useState(undefined);
  const [isModalTip, setIsModalTip] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true)
  const [modalWrongAnswer, setModalWrongAnswer] = useState(undefined);
  const [amountTrial, setAmountTrial] = useState(3);
  const [inMemoryItem, setInMemoryItem] = useState(undefined);
  const [hasItemInMemory, setHasItemInMemory] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(undefined);


  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    // isLoading ? <SplashScreen activitieLogo={logo} /> : (
    false ? <SplashScreen activitieLogo={logo} /> : (
      <Container>
        <Header logo={logo} />
        <Content>
          <Puzzle>
            {/* {JSON.stringify(activitie?.enigmas)} */}
            {activitie && Object.values(activitie.enigmas).map((enigma) => {
              return (
                <Enigma>
                  <EnigmaBox firstBox>
                    <EnigmaImage src={`data:image/jpeg;base64,${enigma.imageBase64}`} />
                    <Less>-</Less>
                    <Word>{enigma.subtrair}</Word>
                  </EnigmaBox>
                  <EnigmaBox secondBox>
                    <input placeholder="Digite aqui" type="text"></input>
                  </EnigmaBox>
                </Enigma>
              );
            })}
          </Puzzle>
        </Content>
        <Button
        // handleClick={handleIsModalAnswerOption}
        >responder
        </Button>
      </Container>
    )
  )
}

export default EnigmaticWord;
