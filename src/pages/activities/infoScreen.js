import React, { useState } from 'react';
import styled from 'styled-components';

//Assets
import LogoOrigin from '../../images/logo/originOfExpression.svg'
import LogoEureka from '../../images/logo/eureka.svg'
import book from '../../images/book/book.png'

//Components
import Button from '../../components/buttons/button';

// Styles
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: #a4a4a4 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
`;

const Content = styled.div`
  width: 90vw;
  min-height: 80vh;
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



  @media(max-width: 320px){min-height: 100%;}
`;

const KnowledgeTexts = styled.div`
  text-align: center;
  h1{font-size: 3rem; color: #399119; font-weight: 800;}
  p{
    font-size: 1.2rem;
    margin-top: .7rem;
    strong{ 
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

const OriginOfTheExpression = ({ useActivitie, isShowLogo, eureka, handleNextQuestion }) => {
  const screens = {
    info: "info",
    knowledge: "knowledge",
    score: "score"
  }
  const [currentScreen, setCurrentScreen] = useState(screens.info);
  const image = useActivitie.imageBase64;

  const renderScreen = () => {
    switch (currentScreen) {
      case screens.knowledge:
        return (
          <Content>
            <KnowledgeTexts>
              <h1>Parabéns</h1>
              <p>Por ter adquirido um novo<br/>conhecimento, você ganhou:</p>
            </KnowledgeTexts>
            <KnowledgeTexts>
              <img src={book}></img>
              <p><strong>Livro</strong></p>
            </KnowledgeTexts>
            <Button
              height='39px'
              background='#399119'
              boxShadow='#245812 0px 7px 0px'
              color={'#fff'}
              handleClick={() => setCurrentScreen(screens.score)}
            >
              Continuar
            </Button>
          </Content>
        );
        
      case screens.score:
        return(
          <Content justifyContent={"space-between"}>
            <ScoreDiv>
              <p>Você também ganhou:</p>
              <h1>10<strong>pts</strong></h1>
            </ScoreDiv>
            <Button
              height='39px'
              background='#399119'
              color={'#fff'}
              boxShadow='#245812 0px 7px 0px'
              handleClick={() => setCurrentScreen(handleNextQuestion)}
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
              {useActivitie.question}.
            </Title>
            <Subtitle>
              {useActivitie.answers[0].answer}
            </Subtitle>
            <Button
              height='39px'
              background='#ffd000'
              boxShadow='0 7px 0 #f08800'
              handleClick={() => setCurrentScreen(screens.knowledge)}
            >
              Continuar
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

export default OriginOfTheExpression;