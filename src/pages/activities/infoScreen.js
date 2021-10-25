import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

//Assets
import LogoOrigin from '../../images/logo/originOfExpression.svg';
import LogoEureka from '../../images/logo/eureka.svg';
import oneBook from '../../images/books/one-book.svg';
import twoBooks from '../../images/books/two-books.svg';
import threeBooks from '../../images/books/three-books.svg';

//Components
import Button from '../../components/buttons/button';
import { chancesAtActivity } from '../../utils/statistics';

// Styles
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: transparent;
  box-shadow: 0px 3px 6px #00000029;
`;

const Content = styled.div`
  width: 90vw;
  height: 40rem;
  max-height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem 1.5rem 1rem;
  background: #F3F3F3;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 24px;
  max-width: 360px;

  @media(max-width: 425px){min-height: 80vh;}
`;

const KnowledgeTexts = styled.div`
  text-align: center;
  h1{font-size: 3rem; color: #399119; font-weight: 800;}
  p{
    font-size: 1.2rem;
    strong{ 
      padding-top: 2rem;
      font-size: 1.2rem;
      color: #373737;
      font-weight: 800; 
    }
  }
`;

const ImgOrigin = styled.img`
  ${({ eureka }) => eureka && `
    width: 100px,
    position: relative,
    bottom: 5px,
  `}
  `

const BoxImg = styled.div`
  width: 90%;
  height: 168px;
  overflow: hidden;
  border-radius: 10px;
  margin: 1.5625rem 0 2rem 0;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Title = styled.h1`
  padding-bottom: 1rem;
  font-size: .875rem;
  font-weight: 900;
  text-transform: uppercase;
  color: #373737;
`;

const Subtitle = styled.p`
  margin-bottom: 1rem;
  height: 11.25rem;
  font-size: .875rem;
  color: #272727;
  line-height: 1.4;
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
`;

const ScoreDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 100%;
  h1{
    font-weight: 900;
    margin-top: 10vh;
    color: #399119;
    font-size: 10rem;
    strong{ font-size: 2rem; color: #373737;}
  }
`;

const InfoScreen = ({ useActivitie, isShowLogo, eureka, handleNextQuestion, registerAction, actionsBook }) => {
  const history = useHistory();
  const [acquiredKnowledge, setAcquiredKnowledge] = useState(null);
  const screens = {
    info: "info",
    knowledge: "knowledge",
    score: "score"
  }
  const [currentScreen, setCurrentScreen] = useState(screens.info);
  const image = useActivitie.imageBase64;

  useEffect(() => {
    const { synced, pendingSync } = actionsBook;
    const useChancesAtActivity = chancesAtActivity(useActivitie.id, [...synced, ...pendingSync]);

    if (useChancesAtActivity === 3) return

    setAcquiredKnowledge(true);
  }, [actionsBook, useActivitie.id]);

  useEffect(() => {
    if (currentScreen === screens.score) {
      registerAction({
        activityId: useActivitie.id,
        trailId: useActivitie.trailId,
        success: true,
        timestamp: Date.now(),
        score: 10,
        books: true,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentScreen])

  var book = "";

  if (useActivitie.sequence < 3)
    book = oneBook
  else if (useActivitie.sequence < 6)
    book = twoBooks
  else
    book = threeBooks

  const handleGoBack = () => {
    history.goBack();
  }

  const handleCurrentScreen = (modal) => {
    if (acquiredKnowledge) {
      handleGoBack();
      return
    }
    setCurrentScreen(modal)
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case screens.knowledge:
        return (
          <Content>
            <KnowledgeTexts>
              <h1>Parabéns</h1>
              <p>Por ter adquirido um novo:</p>
            </KnowledgeTexts>
            <KnowledgeTexts>
              <img src={book} alt='Livro' />
              <p><strong>Conhecimento</strong></p>
            </KnowledgeTexts>
            <Button
              margin='0'
              height='39px'
              buttonBg='#399119'
              boxShadow='#245812 0px 7px 0px'
              color={'#fff'}
              handleClick={() => setCurrentScreen(screens.score)}
            >
              Continuar
            </Button>
          </Content>
        );

      case screens.score:
        return (
          <Content justifyContent={"space-between"}>
            <ScoreDiv>
              <p>Você também ganhou:</p>
              <h1>10<strong>pts</strong></h1>
            </ScoreDiv>
            <Button
              height='39px'
              buttonBg='#399119'
              color={'#fff'}
              boxShadow='#245812 0px 7px 0px'
              handleClick={handleGoBack}
            >
              Continuar Trilha
            </Button>
          </Content>
        );

      default:
        return (
          <Content>
            {
              isShowLogo ? <ImgOrigin src={LogoOrigin} alt="logo" /> :
                <ImgOrigin
                  src={LogoEureka}
                  alt="logo"
                  eureka={eureka}
                />
            }
            <BoxImg>
              <Img src={`data:image/jpeg;base64,${image}`} alt={`image${useActivitie.question}`} />
            </BoxImg>
            <Title>
              {useActivitie.question}
            </Title>
            <Subtitle>
              {useActivitie.answers.map(i => i.answer)}
            </Subtitle>
            <Button
              height='39px'
              buttonBg='#ffd000'
              boxShadow='0 7px 0 #f08800'
              handleClick={() => handleCurrentScreen(screens.knowledge)}
            >
              {acquiredKnowledge ? 'Continuar Trilha' : 'Continuar'}
            </Button>
          </Content>
        );
    }
  }

  return (
    <Container>
      {renderScreen()}
    </Container>
  );
}

export default InfoScreen;
