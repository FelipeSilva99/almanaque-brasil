import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//Components
import ScoreScreen from '../activities/scoreScreen';
import Button from '../buttons/button';

//Styles
const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #f3f3f3;
  z-index: 2;
`;

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding-top: 1.5rem;
  background-color: #FFFFFF;
  width: 100vw;
  height: ${props => props.height || "90vh"};

  @media(max-width: 425px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }
  @media(min-width: 1024px) {height: 60vh;}
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  /* padding-top: 4vh; */
  background-color: ${props => props.backgroundColor || '#FFFFFF'};
  width: 100vw;

  @media(max-width: 425px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;

const Img = styled.img`
  width: 100vw;
  height: 53vh;
  max-width: 500px;
  object-fit: cover;

  @media(max-width: 425px) {width: 100%;}
  @media(min-width: 1024px) {height: 40vh;}
`;

const ComplementaryInformationBox = styled.div`
  padding-bottom: 4rem;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #373737;
`;

const Scroll = styled.div`
  overflow-y: scroll;
  height: 100%;

  ::-webkit-scrollbar {
    width: 4px;
    height: 10px;
    background: transparent;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 13px;
    background: transparent;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: transparent;
  }

  @media(max-width: 320px) {height: 43%;}
  @media(min-width: 1024px) {height: 90vh;}
`;

const Title = styled.h1`
  font-size: .9375rem;
  font-weight: 300;
  color: #373737;
  
  @media(min-width: 1024px) {font-size: 1rem;}
`;

const TextName = styled.h1`
  font-size: 1.625rem;
  color: #0D0D0D;
  font-weight: 900;
  width: 14rem;
`;

const Text = styled.p`
  margin-top: 1rem;
  width: 80vw;
  max-width: 412px;
  font-size: .875rem;
  color: #000000;
  text-align: left;

  @media(min-width: 1024px) {font-size: 1rem;}
`;

const ALink = styled(Link)`
  width: 100%;
  max-width: 425px;
  display: flex;
  justify-content: center;
`;

const CorrectAnswer = ({ answer, toScore, isTrunk, amountTrial }) => {
  const modals = {
    toScore: "toScore",
    answerDescription: "answerDescription"
  }
  const [actualModal, setActualModal] = useState(undefined);

  useEffect(() => {
    toScore
      ? setActualModal(modals.toScore)
      : setActualModal(modals.answerDescription)
  }, [toScore, modals.answerDescription, modals.toScore]);

  const handleContinue = () => {
    switch (actualModal) {
      case modals.toScore:
        return setActualModal(modals.answerDescription);

      default:
        break;
    }
  }

  const renderModal = () => {
    switch (actualModal) {
      case modals.toScore:
        return (
          <ScoreScreen
            amountTrial={amountTrial}
            handleClick={() => handleContinue()}
          />
        );
      case modals.answerDescription:
        return (
          <MessageBox height={'52vh'}>
            <ComplementaryInformationBox>
              <Title>A reposta é</Title>
              <TextName>{answer.answer}</TextName>
              <Scroll>
                <Text>{answer.complementaryInformation}</Text>
              </Scroll>
            </ComplementaryInformationBox>
            <ButtonBox>
              {isTrunk && (
                <ALink to="/trunk">
                  <Button
                    color={"#373737"}
                    margin={"0 0 20px 0"}
                    background={"#FFD000"}
                    boxShadow={"#F08800 0px 7px 0px"}
                  >Veja mais no nosso Baú</Button>
                </ALink>
              )}
              <ALink to="/activities">
                <Button
                  color={"#fff"}
                  margin={"0 0 20px 0"}
                  background={"#399119"}
                  boxShadow={"#245812 0px 7px 0px"}
                >Continuar trilha</Button>
              </ALink>
            </ButtonBox>
          </MessageBox>
        );

      default:
        return <h1>Carregando</h1>
    }
  }

  return (
    <Container>
      {(answer?.imageBase64) && <Img src={`data:image/jpeg;base64,${answer.imageBase64}`}></Img>}
      {renderModal()}
    </Container>
  );
}

export default CorrectAnswer;