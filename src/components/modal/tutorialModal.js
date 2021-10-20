import React from 'react';
import styled from 'styled-components';

import tutorialData from './tutorialData';

//Images
import iconElifas from '../../images/elifas/tip.svg';

//Styled
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: #ababab;
  overflow: hidden;
  z-index: 1;

  @media (min-width: 1024px) { align-items: center; }
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 93vh;
  max-width: 340px;

  @media (max-height: 600px) {
    height: 96vh;
  }
`;

const ContentInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 1.5rem 1.5rem 1rem;
  width: 96%;
  letter-spacing: 1px;
  filter: drop-shadow(1px 4px 3px #999);
  border-radius: 30px;
  background: #fff;

  img {
    cursor: pointer;
  }

  &:after {
    position: absolute;
    content: '';
    left: 51%;
    bottom: -9%;
    display: block;
    width: 50px;
    height: 70px;
    border: 0px solid;
    background-color: transparent;
    border-bottom-left-radius: 100%;
    box-shadow: -34px -34px 0px 30px #fff;
    transform: rotate(5deg);
    z-index: -1;
  }
`;

const TutorialBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.1em;
  font-weight: 300;
`;

const Subtitle = styled.h1`
  margin: .4rem 0 2rem;
  font-size: 1.25em;
  font-weight: 900;
  color: #373737;
`;

const Scroll = styled.ol`
  margin-bottom: .3rem;
  padding-left: 2.7rem;
  list-style: none;
  counter-reset: count;

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

const Text = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 1.9rem;
  line-height: 1.4;
  counter-increment: count;

  &:last-child {
    margin-bottom: 1.5rem;
  }

  &:before {
    position: absolute;
    content: counter(count) "°";
    left: -2.8rem;
    font-size: 2.1em;
    font-weight: 900;
    color: #373737;
  }

  @media (max-width: 320px) { padding: ${props => props.padding && '1.5rem 0 .4rem 0 '}; }
`;

const ImgElifas = styled.img`
  position: absolute;
  right: -3%;
  bottom: 0;
  width: 10rem;

  @media (max-height: 600px) {
    width: 9.5rem;
  }
`;

const CloseBtn = styled.button`
  font: 900 1.2em 'Nunito';
  color: #373737;
  transform: scale(1,.9);
`;

function Tutorial({ screen, handleCloseTutorial }) {
  return (
    <Container>
      <Content>
        <ContentInfo>
          <Title>Tutorial</Title>
          {tutorialData && tutorialData
          .filter(item => item.game.toLowerCase() === screen.toString().toLowerCase())
          .map((data, i) => (
              <TutorialBox key={i}>
                <Subtitle>{data.game}</Subtitle>
                <Scroll>
                  {data.text.map(item => <Text>{item}</Text>)}
                </Scroll>
              </TutorialBox>
            ))
          }
          <CloseBtn onClick={handleCloseTutorial}>X</CloseBtn>
        </ContentInfo>
        <ImgElifas src={iconElifas} />
      </Content>
    </Container>
  )
}

export default Tutorial;
