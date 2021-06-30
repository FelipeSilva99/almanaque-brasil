import React from 'react';
import styled from 'styled-components';

// Assets
import plant from './images/folhas.svg'
import clearPlant from './images/folhas_claras.svg'
import logo from './images/what_is_logo.svg'
import background from './images/splash_background.svg'

const Container = styled.div`
  background-image: url("${background}");
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1024px) {
    justify-content: center;
  }
`
const WhatIsLogo = styled.img`
  z-index: 1;
  position: relative;
  bottom: 10vh;
`;

const Plant = styled.img`
  position: absolute;
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  top: ${props => props.top};
`;


function SplashScreen() {
  return (
    <Container>
      <Plant
        bottom={"349px"}
        right={"68px"}
        src={plant} />
      <WhatIsLogo src={logo} />
      <Plant
        left={"183px"}
        top={"500px"}
      src={clearPlant} />
    </Container>
  )
}

export default SplashScreen;