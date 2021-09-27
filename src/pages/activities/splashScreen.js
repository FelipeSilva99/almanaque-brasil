import React from 'react';
import styled from 'styled-components';

// Assets
import iconTop from '../../images/icons/moonAndStar.svg'
import iconBottom from '../../images/icons/cactus.svg'
import background from '../../images/icons/background.svg'
import logo from '../../images/logo/almanaque.svg';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-image: url("${background}");
  background-color: #f3f3f3;
  width: 100%;
  height: 100vh;

  @media (min-width: 1024px) {
    justify-content: center;
  }
`

const ActivitieLogo = styled.img`  
  @media (max-width: 370px) { width: 90%; }

  &:path {
    background: red;
  }
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
  right: -80px;
  top: 70%;

  @media(min-width: 1024px) {bottom: -15px; top: auto;}
`;

const Logo = styled.img`
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  width: 4rem;
`;

function SplashScreen({ activitieLogo }) {
  return (
    <Container>
      <IconTop src={iconTop} />
      <ActivitieLogo src={activitieLogo} />
      <IconBottom src={iconBottom} />
      <Logo src={logo} />
    </Container>
  )
}

export default SplashScreen;
