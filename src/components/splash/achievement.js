import React from 'react';
import styled from 'styled-components';

//Images
import elifes from '../../images/logo/elifes.svg';
import holonomics from '../../images/logo/holonomics.png';
import vaiNaWeb from '../../images/logo/vaiNaWeb.svg';
import gerdau from '../../images/logo/gerdau.svg';

//Styled
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  height: 85vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

  @media(min-width: 1024px) {height: 70vh}
`;

const Text = styled.p`
  padding-top: ${props => props.paddingTop && '1.75rem'};
  font-size: 1.5rem;
  font-weight: 500;
  color: #000000;
`;

const Achievement = (props) => {
  return (
    <Container>
      <Content>
        <Text>Realização:</Text>
        <img src={elifes} alt="Elifes" />
        <img src={holonomics} alt="Holonomics" />
        <img src={vaiNaWeb} alt="Vai na Web" />
        <Text paddingTop>Patrocínio:</Text>
        <img src={gerdau} alt="Gerdau" />
      </Content>
    </Container>
  );
}

export default Achievement;