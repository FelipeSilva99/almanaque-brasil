import React from 'react';
import styled from 'styled-components';

//Images
import dialogBox from '../../images/dialogBox/dialogBox.svg';
import iconElifas from '../../images/elifas/tip.svg';
import close from '../../images/icons/close.svg';

//Styled
const ContainerTip = styled.div`
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

  @media (min-width: 1024px) { align-items: center; }
`;

const ContentTip = styled.div`
  position: relative;
  width: 100%;
  height: 93vh;
  max-width: 340px;
`;

const ImgDialogBox = styled.img`
  width: 100%;
  transform: scaleX(-1);
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

const TipTitle = styled.h2`
  font-size: 1.1em;
  font-weight: 300;
`;

const TipSubtitle = styled.h1`
  margin: .4rem 0 2rem;
  font-size: 1.25em;
  font-weight: 900;
  color: #373737;
`;

const ScrollTip = styled.ol`
  padding-left: 2.7rem;
  list-style: none;
  overflow-y: auto;
  counter-reset: counter;

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

const TextTip = styled.li`
  position: relative;
  margin-bottom: 1.9rem;
  line-height: 1.4;
  counter-increment: count;

  &:last-child {
    margin-bottom: 1.5rem;
  }

  &:before {
    position: absolute;
    content: counter(count) "°";
    top: 10%;
    left: -2.8rem;
    font-size: 2.1em;
    font-weight: 900;
    color: #373737;
  }

  @media (max-width: 320px) { padding: ${props => props.padding && '1.5rem 0 .4rem 0 '}; }
`;

const ImgBento = styled.img`
  position: absolute;
  right: -3%;
  bottom: 0;
  width: 10rem;
`;

const CloseBtn = styled.button`
  font-size: 1.1em;
  font-weight: 900;
  color: #ffd000;
`;

const tipsData = [
  {
    game: 'Se liga!',
    tips: [
      'Observe as colunas de imagem e de texto.',
      'Identifique qual imagem corresponde à palavra da segunda coluna.',
      'Clique na imagem e na palavra correspondente.',
    ]
  },
  {
    game: 'Você sabia?',
    tips: [
      'Leia o texto primeiro',
      'Clicando em responder você verá opções de resposta.',
      'Escolha a resposta que achar correta.',
    ]
  },
  {
    game: 'Coisas nossas',
    tips: [
      'Leia o texto primeiro',
      'Clicando em responder você verá opções de resposta.',
      'Escolha a resposta que achar correta.',
    ]
  },
  {
    game: 'O que é o que é?',
    tips: [
      'Leia a pergunta que aparece na tela.',
      'Ao clicar em responder aparecerá um teclado.',
      'Digite a resposta que achar correta.',
    ]
  },
  {
    game: 'De quem são esses olhos?',
    tips: [
      'Tente reconhecer de quem são os olhos que estão em destaque.',
      'Clicando em responder, você verá opções de resposta.',
      'Escolha o nome da pessoa que corresponde aos olhos.',
    ]
  },
  {
    game: 'Palavra enigmática',
    tips: [
      'Responda uma coluna por vez.',
      'Olhe a imagem e subtraia a sílaba indicada.',
      'Digite a sílaba que restou no espaço abaixo da imagem.',
    ]
  },
]

// índex do game
let i = 0

function Tip({ text, handleModalTip }) {
  return (
    <ContainerTip>
      <ContentTip>

          <ContentInfo>
            <TipTitle>Tutorial</TipTitle>
            {tipsData
              .filter((item, index) => index === i)
              .map((data) => (
                <>
                  <TipSubtitle>{data.game}</TipSubtitle>
                  <ScrollTip>
                    {data.tips.map(tip => <TextTip>{tip}</TextTip>)}
                  </ScrollTip>
                </>
              ))
            }
            <CloseBtn onClick={handleModalTip}>X</CloseBtn>
          </ContentInfo>

        <ImgBento src={iconElifas} />
      </ContentTip>
    </ContainerTip>
  )
}

export default Tip;
