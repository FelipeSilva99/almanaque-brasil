import React from 'react';
import styled from 'styled-components';

//Images
import iconElifas from '../../images/elifas/ok.svg';

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
  background: #4446;
	z-index: 3;
  @media (min-width: 1024px) { align-items: center; }
`;

const Content = styled.div`
  position: relative;
  padding-top: 3rem;
  max-width: 380px;
  width: 100%;
  height: 100%;
	display: flex;
	align-items: start;

  @media (min-height: 700px) {
    padding-top: 0;
    align-items: center;
  }
`;

const ContentInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1.5rem 1rem 1rem;
  width: 91%;
  filter: drop-shadow(1px 4px 3px #444);
  border-radius: 22px;
  background: #fff;

  img {
    cursor: pointer;
  }

  &:after {
    position: absolute;
    content: '';
    left: 51%;
    bottom: -11%;
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

  @media (max-width: 320px) {
    padding: 1rem
    width: 95%;
  }
`;

const Title = styled.h1`
  padding-bottom: 1.2rem;
  font-size: 1.5em;
  font-weight: 900;
	line-height: 1em;
  color: #373737;
	text-align: center;
`;

const Text = styled.p`
  position: relative;
  padding-bottom: 1.2rem;
  letter-spacing: .1px;
  line-height: 1.2;
  font-size: 1em;
  
  @media (max-width: 320px) { padding-bottom: 1rem }
`;

const Button = styled.button`
  font-size: 1.5rem;
  font-weight: 800;
`;

const ImgBento = styled.img`
  position: absolute;
  right: -1%;
  bottom: 0;
  width: 12rem;
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
