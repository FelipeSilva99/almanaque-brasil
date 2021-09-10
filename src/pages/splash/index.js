import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

//Images
import almanaque from '../../images/logo/almanaque.svg';
import footer from '../../images/footerSplash.svg';

//Component
import Achievement from './achievement';

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
  const [isModalAchievement, setIsModalAchievement] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setIsModalAchievement(true), 3000);
    // if(isModalAchievement) {
    //   props.history.push(`/achievement`);
    // }

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Container>
      <Logo src={almanaque} alt="Logo almanaque" />
      <Footer src={footer} alt="Img de fundo" />
      {isModalAchievement && <Achievement />}
    </Container>
  );
}

export default SplashPresentation;