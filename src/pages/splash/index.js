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
  bottom: -7rem;
  left: 0;
  width: calc(100vw + 7rem);

  @media(max-width: 1024px) {width: 100vw}

`;

const SplashPresentation = (props) => {
  const [isModalAchievement, setIsModalAchievement] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setIsModalAchievement(true), 5000);
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
      {/* {isModalAchievement && <Achievement />} */}
    </Container>
  );
}

export default SplashPresentation;