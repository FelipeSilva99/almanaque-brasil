import React from 'react';
import styled from 'styled-components';

//Images
import almanaque from '../../images/logo/almanaque.svg';
import footer from '../../images/footerSplash.svg';

//Styled
const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  padding-top: 6.625rem;
`;

const Footer = styled.img`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;

  @media(min-width: 1024px) {display: none}
`;

const SplashPresentation = (props) => {
  return (
    <Container>
      <Logo src={almanaque} alt="Logo almanaque" />
      <Footer src={footer} alt="Img de fundo" />
    </Container>
  );
}

export default SplashPresentation;