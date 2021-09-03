/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';

//Images
import iconBack from '../../images/icons/onboarding/arrow.svg';

// Styles
const Container = styled.header`
  display: flex;
  position: ${props => props.trunkScreen ? 'fixed' : 'relative'};
  padding: ${props => props.trunkScreen && '1.5rem 1rem 1.5rem 0'};
  z-index: 1;
`;

const Figure = styled.figure`
  width: 2.25rem;
  z-index: 1;
  padding-left: ${props => props.trunkScreen && '1.5rem'};
`;

const Text = styled.h1`
  width: 100vw;
  font-size: 1rem;
  font-weight: 900;
  color: #373737;
  position: absolute;
  display: flex;
  justify-content: center;
  animation: .3s fadeIn ease-in-out;
	opacity: ${props => props.trunkScreen && 0};

  ${({ animation }) => animation && `
    -webkit-transition: .1s ease-in-out;
    transition: .4s ease-in-out;
    opacity: 1
  `}
`;

const Header = ({ noBack, trunkScreen, showTitle, text, onClick }) => {
  return (
    <Container trunkScreen={trunkScreen}>
      {!noBack && (
        <Figure  trunkScreen={trunkScreen} onClick={onClick}>
          <img src={iconBack} alt='Voltar' />
        </Figure>
      )}
      <Text trunkScreen={trunkScreen} animation={showTitle}>{text}</Text>
    </Container>
  );
}

export default Header;