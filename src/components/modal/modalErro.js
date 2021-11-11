import React from 'react'
import styled from 'styled-components';

import ImgFace from "../../images/Grupo2065.svg"

const Container = styled.div`
  position: absolute;
  display: flex;
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
  height: 25%;
`;

const Title = styled.h2`
  width: 75%;
  text-align: center;
  font-weight: 900;
  color: #373737;
`
const Subtitle = styled.p`
  padding: 23px;
  color: #373737;
`

const Smile = styled.img`
`

export default function ModalErro() {
  return (
    <Container>
      <BoxModal>
        <Title>Opa! A aplicação parou.</Title>
        <Subtitle>Por favor, reinicie o aplicativo.</Subtitle>
        <Smile src={ImgFace}/>
      </BoxModal>
    </Container>
  )
}
