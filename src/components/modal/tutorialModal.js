import React from 'react';
import styled from 'styled-components';

//Images
import iconElifas from '../../images/elifas/tip.svg';
import close from '../../images/icons/close.svg';

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
  z-index: 1;

  @media (min-width: 1024px) { align-items: center; }
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 93vh;
  max-width: 340px;
`;

const ContentInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
`;

const CloseBtn = styled.button`
  font: 900 1.2em 'Nunito';
  color: #ffd000;
  transform: scale(1,.9);
`;

const tutorialData = [
  {
    game: 'Se liga!',
    text: [
      'Observe as colunas de imagem e de texto.',
      'Identifique qual imagem corresponde à palavra da segunda coluna.',
      'Clique na imagem e na palavra correspondente.',
    ]
  },
  {
    game: 'Você sabia?',
    text: [
      'Leia o texto primeiro',
      'Clicando em responder você verá opções de resposta.',
      'Escolha a resposta que achar correta.',
    ]
  },
  {
    game: 'Coisas nossas',
    text: [
      'Leia o texto primeiro',
      'Clicando em responder você verá opções de resposta.',
      'Escolha a resposta que achar correta.',
    ]
  },
  {
    game: 'O que é o que é?',
    text: [
      'Leia a pergunta que aparece na tela.',
      'Ao clicar em responder aparecerá um teclado.',
      'Digite a resposta que achar correta.',
    ]
  },
  {
    game: 'De quem são estes olhos',
    text: [
      'Tente reconhecer de quem são os olhos que estão em destaque.',
      'Clicando em responder, você verá opções de resposta.',
      'Escolha o nome da pessoa que corresponde aos olhos.',
    ]
  },
  {
    game: 'Palavra enigmática',
    text: [
      'Responda uma coluna por vez.',
      'Olhe a imagem e subtraia a sílaba indicada.',
      'Digite a sílaba que restou no espaço abaixo da imagem.',
    ]
  },
]

function Tutorial({ screen, handleCloseTutorial }) {
  return (
    <Container>
      <Content>
        <ContentInfo>
          <Title>Tutorial</Title>
          {tutorialData
            .filter((item) => item.game === screen)
            .map((data, index) => (
              <>
                <Subtitle>{data.game}</Subtitle>
                <Scroll>
                  {data.text.map(item => <Text>{item}</Text>)}
                </Scroll>
              </>
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
