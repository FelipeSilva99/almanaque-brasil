import React from 'react';
import styled from 'styled-components';

// Assets
import plant from '../../images/whatIsWhatIs/folhas.svg';
import clearPlant from '../../images/whatIsWhatIs/pale_leaves.svg';
import logo from '../../images/whatIsWhatIs/what_is_logo.svg';
import background from '../../images/whatIsWhatIs/splash_background.svg';
import ABLogo from '../../images/whatIsWhatIs/AB_logo.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("${background}");
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
  position: relative;
  bottom: 10vh;
  z-index: 1;

  @media (max-width: 370px) { width: 90%; }
`;

const PlantTop = styled.img`
  position: absolute;
  bottom: 58%;
  right: 31%;
  z-index: 2;

  @media (min-width: 553px) { right: 42%; }
  @media (min-width: 768px) { right: 59%; }
`;

const PlantBottom = styled.img`
  position: absolute;
  left: 66%;
  top: 77%;
`;

const LogoAB = styled.img`
  position: fixed;
  left: 20px;
  bottom: 20px;
`;

function SplashScreen() {
  return (
    <Container>
      <PlantTop src={plant} />
      <WhatIsLogo src={logo} />
      <PlantBottom src={clearPlant} />
      <LogoAB src={ABLogo} />
    </Container>
  )
}

export default SplashScreen;
