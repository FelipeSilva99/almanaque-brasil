import React from 'react';
import styled from 'styled-components';

// Assets
import plant from '../../images/whatIsWhatIs/folhas.svg'
import clearPlant from '../../images/whatIsWhatIs/pale_leaves.svg'
import background from '../../images/whatIsWhatIs/splash_background.svg'
import ABLogo from '../../images/whatIsWhatIs/AB_logo.svg';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-image: url("${background}");
  padding-top: 2rem;
  width: 100vw;
  height: 100vh;

  @media (min-width: 1024px) {
    justify-content: center;
  }
`

const ActivitieLogo = styled.img`  
  @media (max-width: 370px) { width: 90%; }
`;

const PlantTop = styled.img`
  position: absolute;
  right: 31%;
  bottom: 58%;
  z-index: 2;

  @media (min-width: 768px) { right: 59%; }
  @media (min-width: 553px) { right: 42%; }
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


function SplashScreen({ activitieLogo }) {
  return (
    <Container>
      <PlantTop src={plant} />
      <ActivitieLogo src={activitieLogo} />
      <PlantBottom src={clearPlant} />
      <LogoAB src={ABLogo} />
    </Container>
  )
}

export default SplashScreen;
