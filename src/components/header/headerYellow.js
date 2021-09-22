import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.header`
  position: relative;
  padding: 2.375rem 1rem;
  width: 100%;
  background: #F4DE9B;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  overflow: hidden;
`;

const Circle = styled.div`
  padding: 13px;
  font-weight: bold;
  border-radius: 50%;
  margin-right: 20px;
  background-color: #ffffff;
`;

const Text = styled.h1`
  font-size: ${props => props.home ? '1.25rem' : '1.5rem'};
  font-weight: 900;
  color: #373737;
  text-decoration: none;
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  right: -30px;
  width: ${props => props.home ? '7rem' : '9rem'};
`;

const Header = ({ text, icon, home, initialLettersName }) => {
  return (
    <Container>
      <Circle>{initialLettersName}</Circle>
      <Text home={home}>{text}</Text>
      {icon && <Img src={icon} alt={text} home={home} />}
    </Container>
  );
}

export default Header;