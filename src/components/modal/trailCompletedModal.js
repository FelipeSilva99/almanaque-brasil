import React from 'react';
import styled from 'styled-components';

//Images
import iconElifas from '../../images/elifas/tip.svg';

//Styled
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: #70707095;
	z-index: 3;
  @media (min-width: 1024px) { align-items: center; }
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 380px;
	display: flex;
	align-items: center;

  @media(max-width: 375px) {padding-top: 1rem; align-items: flex-start;}
  @media(min-width: 1024px) {height: 80vh;}
  @media(min-width: 1440px) {height: 60vh;}
`;

const ContentInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1.5rem 1.5rem 1rem;
  width: 90%;
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

  @media(max-width: 320px) {width: 95%; padding: 1rem}

`;

const Title = styled.h1`
  padding-bottom: 1rem;
  font-size: 1.5em;
  font-weight: 900;
	line-height: 1em;
  color: #373737;
	text-align: center;
`;

const Text = styled.p`
  position: relative;
  padding-bottom: .9375rem;
	font-size: 1rem;
  line-height: 1.4;
  
  @media(max-width: 320px) {padding-bottom: 1rem}
`;

const Button = styled.button`
  font-size: 1.25rem;
  font-weight: 900;
`;

const ImgBento = styled.img`
  position: absolute;
  right: -3%;
  bottom: 0;
  width: 10rem;
`;

function TrailCompletedModal({ handleCloseModal }) {
	return (
		<Container>
			<Content>
				<ContentInfo>
					<Title>Parabéns!</Title>
          <Text>Você concluiu o aplicativo Almanaque Miguel Burnier. Agora você pode compartilhar todo esse conhecimento com seus amigos! </Text>
          <Text>Você pode continuar jogando as atividades sem pontuar e caso queira uma nova pontuação, poderá reiniciar o mapa nas configurações </Text>
					<Button margin='1.5rem 0 1.25rem 0' onClick={handleCloseModal}>x</Button>
				</ContentInfo>
				<ImgBento src={iconElifas} />
			</Content>
		</Container>
	)
}

export default TrailCompletedModal;
