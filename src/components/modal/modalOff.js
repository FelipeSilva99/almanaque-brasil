import React, { useState } from 'react'
import styled from 'styled-components';


const Container = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-width: 425px;
  height: 100vh;
  background: #0000004d;
  z-index: 4;
`;

const BoxModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: #f3f3f3;
  border-radius: 20px;
  margin: 0 auto;
  width: 90%;
  height: 35%;
  max-height: 245.74px;
`;

const Close = styled.div`
  color: #373737;
  font: 800 2.1rem 'Nunito', sans-serif;
  transform: scale(1,.85);
  transition: .2s ease;
  cursor: pointer;

  &:hover { transform: scale(1.1,.95); }
`;

const Title = styled.h2`
  width: 60%;
  text-align: center;
  font-weight: 900;
  color: #373737;
  @media(max-height: 750px) {
    font-size: 21px;
}
`
const Subtitle = styled.p`
  color: #373737;
  padding: 30px;
  @media(max-height: 750px) {
    padding: 22px;
}
`

export default function ModalOff({ handleCloseModal }) {
  return (
    <Container>
      <BoxModal>
        <Title>Você está jogando off-line!</Title>
        <Subtitle>Você já atingiu o máximo de atividades sem internet. Caso queira continuar jogando, reative sua conexão.</Subtitle>
        <Close onClick={handleCloseModal}>x</Close>
      </BoxModal>
    </Container>
  )
}
