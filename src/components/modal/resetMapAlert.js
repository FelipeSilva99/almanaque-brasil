import React from 'react';
import styled from 'styled-components';

//Component
import Button from '../buttons/button';

//Images
import iconElifas from '../../images/elifas/tip.svg';
import close from '../../images/icons/close.svg';

//Styled
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: #ababab45;
  z-index: 3;

  @media (min-width: 1024px) { align-items: center; }
`;

const Content = styled.div`
  position: relative;
  width: 94%;
  height: 93vh;
  max-width: 340px;

  @media (max-width: 320px) { height: 99vh; }
  @media (min-width: 768px) { height: 64vh; }
`;

const ContentInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* margin: 0 auto; */
  padding: 1.6rem 1rem 2.5rem;
  /* width: 96%; */
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
    bottom: -12%;
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
  font-size: 1.5rem;
  font-weight: 900;
  color: #FB6C76;
`;

const Text = styled.p`
  margin-bottom: ${props => props.lastText ? '2.5rem' : '1rem'};
  font-size: 1rem;
  color: #373737;

  @media (max-width: 320px) { margin-bottom: 1rem; }
`;

const ImgElifas = styled.img`
  position: absolute;
  right: -3%;
  bottom: 0;
  width: 10rem;
`;

const IconClose = styled.img`
  position: relative;
  top: 1.5rem;
`;

function ResetMapAlert({ handleResetProgress, handleCloseModal }) {
  return (
    <Container>
      <Content>
        <ContentInfo>
          <Title>Atenção!</Title>
          <Text>Tem certeza que quer reiniciar seu mapa?</Text>
          <Text>Ao fazer isso você irá apagar tudo que fez até o momento. Você iniciará tudo de novo.</Text>
          <Button handleClick={handleResetProgress} margin='0'>reiniciar</Button>
          <IconClose src={close} alt={"fechar"} onClick={handleCloseModal} />
        </ContentInfo>
        <ImgElifas src={iconElifas} />
      </Content>
    </Container>
  )
}

export default ResetMapAlert;
