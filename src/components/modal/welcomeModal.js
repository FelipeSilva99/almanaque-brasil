import React from 'react'
import styled from 'styled-components'
import elifas from '../../images/elifas.svg'

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  /* background-color: transparent; */
  background-color: #70707073;
  opacity: .8;
  z-index: 3;
  overflow: hidden;
`;

const ElifasSVG = styled.img`
  opacity: 1;
  position: absolute;
  right: -47px;
  bottom: -0.125rem;
  width: 231px;
  z-index: 3;
`;

const DialogBox = styled.div`
  position: absolute;
  width: 350px;
  height: 200px;
  right: 50px;
  bottom: 30px;
  background-color: red;
  z-index: 3;
`;

const WelcomeModal = ({onClick}) => {
  return(
    <>
      <Container onClick={onClick} />
      <DialogBox />
      <ElifasSVG src={elifas} />
    </>
  )
}

export default WelcomeModal