import React, { useState } from 'react'
import styled from 'styled-components';


const Container = styled.div`
  position: absolute;
  display: ${props=>props.isOpen ? 'none': 'flex'};
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #0000004d;
  max-width: 425px;
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
  padding: 30px;
  color: #373737;
  @media(max-height: 750px) {
    padding: 22px;
}
`

export default function ModalOff() {
  
  const [openSpan, setOpenSpan]= useState(false);

  return (
    <Container isOpen={openSpan}>
      <BoxModal>
        <Title>Você está jogando off-line!</Title>
        <Subtitle>Você já atingiu o máximo de atividades sem internet. Caso queira continuar jogando, reative sua conexão.</Subtitle>
        <Close onClick={()=> setOpenSpan(true)}>x</Close>
      </BoxModal>
    </Container>
  )
}
