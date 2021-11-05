import React from "react";
import styled, { keyframes } from "styled-components";

//Image
import home from '../../images/dialogBox/dialogBoxLittle.svg';
import elifas from '../../images/elifas/waving.svg';

const AnimBall = keyframes`
  0%{transform: translateY(0)}
  50%{transform: translateY(75%)}
  100%{transform: translateY(0)}
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #909090;
  align-items: center;
  justify-content: center;
`;

const BoxLoader = styled.div`
  width: 60px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Ball = styled.div`
  width: 8px;
  height: 8px;
  background: #373737;
  border: none;
  border-radius: 50%;
  animation: ${AnimBall} 1s ease infinite;
  animation-delay: ${(props) => props.animDelay};
`;

const Title = styled.h2`
  width: 280px;
  font-size: 24px;
  font-weight: 900;
  color: #373737;
  margin-bottom: 18px;
  text-align: center;
`;

const Box = styled.div`
  background-image: url(${home});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 340px;
  height: 277px;
  border-radius: 20px;
`;
const BoxElifas = styled.div`
  display: flex;
  width: 169px;
  height: 231px;
  top: 19.2vw;
  left: 5vw;
  position: relative;
  background-image: url(${elifas});
  @media (width: 360px) {
    top: 56.8vw;
    left: 26vw;
  }
  @media (width: 375px) {
    top: 58vw;
    left: 26vw;
  }
`;

const BoxContainer = styled.div`
  position: absolute;
`;

const Loader = () => {
  return (
    <Container>
      <Box>
        <>
          <Title>Espere só mais um pouquinho!</Title>
          <p>Estamos carregando o conteúdo.</p>
        </>
        <BoxLoader>
          <Ball />
          <Ball animDelay=".2s" />
          <Ball animDelay=".4s" />
        </BoxLoader>
      </Box>
        <BoxContainer>
          <BoxElifas />
        </BoxContainer>
    </Container>
  );
};

export default Loader;
