/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  padding: 2.375rem 1rem;
  background: #FFD000;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
`;

const Text = styled.h1`
  font-size: 1.5rem;
  font-weight: 900;
  color: #373737;
  text-decoration: none;
`;

const Header = ({ text }) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
}

export default Header;