/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';

//Images
import iconBack from '../../images/icons/onboarding/arrow.svg';

// Styles
const Container = styled.header`
  display: flex;
  position: relative;
`;

const Figure = styled.figure`
  width: 2.25rem;
  z-index: 1;
`;

const Text = styled.h1`
  width: 100%;
  font-size: 1rem;
  font-weight: 900;
  color: #373737;
  position: absolute;
  display: flex;
  justify-content: center;
`;

const Header = ({ noBack, text, onClick }) => {
  return (
    <Container>
      {!noBack && (
        <Figure onClick={onClick}>
          <img src={iconBack} alt='Voltar' />
        </Figure>
      )}
      <Text>{text}</Text>
    </Container>
  );
}

export default Header;