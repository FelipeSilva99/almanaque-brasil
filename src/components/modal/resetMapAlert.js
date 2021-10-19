import React from 'react';
import styled from 'styled-components';

//Component
import Button from '../buttons/button';

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
  top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1.5rem 1rem 0;
  width: 91%;
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
    padding: 1rem 1rem 0;
    width: 95%;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 900;
  color: #FB6C76;
	text-align: center;
`;

const Text = styled.p`
  padding-top: 1rem;
  align-self: normal;
  font-size: 1rem;
  color: #373737;
  max-width: 297px;
`;

const IconClose = styled.button`
  font-size: 1.25rem;
  font-weight: 800;
  color: #373737;
  padding: .813rem 0;
  z-index: 4;
`;

const ImgBento = styled.img`
  position: absolute;
  right: -1%;
  bottom: 0;
  width: 12rem;
`;

function ResetMapAlert({ handleResetProgress, handleCloseModal }) {
  return (
    <Container>
      <Content>
        <ContentInfo>
          <Title>Atenção!</Title>
          <Text>Tem certeza que quer reiniciar seu mapa?</Text>
          <Text>Ao fazer isso você irá apagar tudo que fez até o momento. Você iniciará tudo de novo.</Text>
          <Button handleClick={handleResetProgress} margin='.5rem'>reiniciar</Button>
          <IconClose onClick={handleCloseModal}>x</IconClose>
        </ContentInfo>
        <ImgBento src={iconElifas} />
      </Content>
    </Container>
  )
}

export default ResetMapAlert;
