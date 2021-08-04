/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

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
  transform: translate(-100%);

`;

const Header = ({ text }) => {
  const history = useHistory()
  
  const goBack = () => {
    history.goBack()
  }
  
  return (
    <Container>
      <Figure onClick={goBack}>
        <img src={iconBack} alt='Voltar' />
      </Figure>
      <Text>{text}</Text>
    </Container>
  );
}

export default Header;