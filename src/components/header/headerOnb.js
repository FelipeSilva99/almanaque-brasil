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
`;

const Text = styled.h1`
  font-size: 1rem;
  font-weight: 900;
  color: #373737;
  position: relative;
  left: 50%;
  right: 50%;
  transform: translate(-77%);
`;

const Header = ({ text, onClick }) => {
  return (
    <Container>
      <Figure onClick={onClick}>
        <img src={iconBack} alt='Voltar' />
      </Figure>
      <Text>{text}</Text>
    </Container>
  );
}

export default Header;