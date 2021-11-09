import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.header`
  position: relative;
  padding: 2.375rem 1rem;
  width: 100%;
  background: #F4DE9B;
  border-radius: 0 0 24px 24px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Circle = styled.div`
  margin-right: 20px;
  width: 33px;
  height: 33px;
  display: ${props => props.isVisible ?  'flex' : 'none'};
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 900;
  border-radius: 50%;
  background-color: #ffffff;
  text-transform: capitalize;
`;

const Text = styled.h1`
  font-size: ${props => props.home ? '1.25rem' : '1.5rem'};
  font-weight: 900;
  color: #373737;
  text-decoration: none;
  z-index: 1;
`;

const Img = styled.img`
  position: absolute;
  bottom: ${props => props.bottom || '0'};
  right: ${props => props.right || '-25px'};
  width: ${props => props.home ? '6.6rem' : '8rem'};
`;

const Header = ({ text, icon, home, initialLettersName, isVisible, bottom, right }) => {
  return (
    <Container>
      <Circle isVisible={isVisible}>{initialLettersName}</Circle>
      <Text home={home}>{text}</Text>
      {icon &&
        <Img
          src={icon}
          alt={home ? 'home' : text}
          home={home}
          bottom={bottom}
          right={right}
        />
      }
    </Container>
  );
}

export default Header;