import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//Components
import Button from '../buttons/button';

//Images
import cactus from '../../images/icons/punctuation/cactus.svg';
import hardShell from '../../images/icons/punctuation/hardShell.svg';
import wave from '../../images/icons/punctuation/wave.svg';

//Styles
const Container = styled.div`
  position: relative;
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
`;

const CongratulationsText = styled.div`
  margin: 10vh 0 18vh 0;
  text-align: center;
  h1{
    font-weight: 800;
    font-size: 3rem;
    color: #399119;
  }
  p{
    font-size: 1.5rem;
    strong{
      font-size: 3rem;
      color: #399119;
    }
  }
`;

const ScoreText = styled.p`
  position: relative;
  bottom: 8vh;
  font-size: 2.5rem;
  font-weight: 900;
  color: #373737;
  strong{
    font-size: 10rem;
    font-weight: 900;
    color: #399119;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding-top: 4vh;
  background-color: ${props => props.backgroundColor || '#FFFFFF'};
  width: 100vw;

  @media(max-width: 425px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;

const Img = styled.img`
  width: 100vw;
  height: 100vh;
  max-width: 500px;
  object-fit: initial;

  @media(max-width: 425px) {width: 100%; max-height: 300px;}
  @media(min-width: 1024px) {height: 40vh;}
`;

const HorseShoe = styled.img`
  position: absolute;
  right: ${props => (props.img === 'wave' && '-149px') || (props.img === 'cactus' && '-130px') || (props.img === 'hardShell' && '-40px')};
  bottom: ${props => (props.img === 'wave' && '-220px') || (props.img === 'cactus' && '-65px') || (props.img === 'hardShell' && '-10px')};
  z-index: -1;
`;

const ComplementaryInformationBox = styled.div`
  /* margin: 10vh 0 18vh 0; */
  padding-bottom: 3rem;
	height: 85%;
  text-align: center;
  color: #373737;
  overflow-y: auto; 

  ::-webkit-scrollbar {
		width: 4px;
		height: 10px;
	}
	::-webkit-scrollbar-track {
		background: transparent;
		border-radius: 20px;
	}
	::-webkit-scrollbar-thumb {
		background: #ccc;
		border-radius: 13px;
	}
	::-webkit-scrollbar-thumb:hover {
		background: #ccc;
	}

  strong{ font-size: 1.625rem; }
  `;

const Text = styled.p`
  margin-top: 4vh;
  width: 80vw;
  max-width: 348px;
  font-size: .875rem;
  text-align: left;
`;

const ALink = styled(Link)`
  width: 100%;
  max-width: 425px;
  display: flex;
  justify-content: center;
`;

const CorrectAnswer = ({ answer, handlerNextActivitie, toScore, didYouKnowScreen, amountTrial }) => {
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
    const pointsImg = (amountTrial === 3 && hardShell) || (amountTrial === 2 && wave) || (amountTrial === 1 && cactus);
    const points = (amountTrial === 3 && 10) || (amountTrial === 2 && 8) || (amountTrial === 1 && 5);
    const imgName = (amountTrial === 3 && 'hardShell') || (amountTrial === 2 && 'wave') || (amountTrial === 1 && 'cactus');

    switch (actualModal) {
      case modals.toScore:
        return (
          <MessageBox>
            <CongratulationsText>
              <h1>Parabéns</h1>
              <p>Você acertou e ganhou:</p>
            </CongratulationsText>
            <ScoreText><strong>{points}</strong> pts</ScoreText>
            <ButtonBox backgroundColor={'transparent'}>
              <Button
                handleClick={() => handleContinue()}
                color={"#fff"}
                margin={"0 0 20px 0"}
                background={"#399119"}
                boxShadow={"#245812 0px 7px 0px"}
              >Continuar</Button>
            </ButtonBox>
            <HorseShoe src={pointsImg} alt={imgName} img={imgName}/>
          </MessageBox>
        );


      case modals.answerDescription:
        return (
          <MessageBox height={'65vh'}>
            <ComplementaryInformationBox>
              <p>A reposta é</p>
              <strong>{answer.answer}</strong>
              <Text>{answer.complementaryInformation}</Text>
            </ComplementaryInformationBox>
            <ButtonBox>
              {/* <StlyedLink to="/">  */}
              {didYouKnowScreen && (
                <ALink to="/trunk">
                  <Button
                    color={"#399119"}
                    margin={"0 0 20px 0"}
                    background={"#D4D4D4"}
                    boxShadow={"#AFAFAF 0px 7px 0px"}
                    didYouKnowScreen={didYouKnowScreen}
                  >Veja mais no nosso Baú</Button>
                </ALink>
              )}
              <Button
                handleClick={handlerNextActivitie}
                color={"#fff"}
                margin={"0 0 20px 0"}
                background={"#399119"}
                boxShadow={"#245812 0px 7px 0px"}
              >Continuar</Button>
              {/* </StlyedLink> */}
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
      {console.log(answer)}
      {/* {renderModalOfPoints()} */}
    </Container>
  );
}

export default CorrectAnswer;