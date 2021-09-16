import React from 'react';
import styled from 'styled-components';

// Assets
import headerBackground from '../../images/progressHeaderBackground.svg'

const Container = styled.header`
  position: absolute;
  top: -20px;
  width: 100%;
  /* background-image: url(headerBackground);
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: top; */
  background-color: #d5e2ff;
  overflow: hidden;
  z-index: 1;

  img{
    position: relative;
    left: -14px;
    width: 456px;
  }
`;

export default () => {
  return(
    <Container>
      <img src={headerBackground}></img>
    </Container>
  );
}
