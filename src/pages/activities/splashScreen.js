import React from 'react';
import styled from 'styled-components';

// Assets
import iconTop from '../../images/icons/moonAndStar.svg'
import iconBottom from '../../images/icons/cactus.svg'
import background from '../../images/icons/background.svg'
import ABLogo from '../../images/whatIsWhatIs/AB_logo.svg';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-image: url("${background}");
  background-color: #f3f3f3;
  width: 100vw;
  height: 100vh;

  @media (min-width: 1024px) {
    justify-content: center;
  }
`

const ActivitieLogo = styled.img`  
  @media (max-width: 370px) { width: 90%; }
`;

const IconTop = styled.img`
  position: absolute;
  left: 1.8125rem;
  top: 2.1875rem;
  z-index: 2;    

  @media (min-width: 768px) { right: 59%; }
  @media (min-width: 553px) { right: 42%; }
`;

const IconBottom = styled.img`
  position: absolute;
  left: 66%;
  top: 70%;
`;

const LogoAB = styled.img`
  position: fixed;
  left: 20px;
  bottom: 20px;
`;


function SplashScreen({ activitieLogo }) {
  return (
    <Container>
      <IconTop src={iconTop} />
      <ActivitieLogo src={activitieLogo} />
      <IconBottom src={iconBottom} />
      <LogoAB src={ABLogo} />
    </Container>
  )
}

export default SplashScreen;
