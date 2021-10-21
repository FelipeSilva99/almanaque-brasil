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
  margin-right: 20px;
  width: 33px;
  height: 33px;
  display: ${props => props.isVisible ? 'none' : 'flex'};
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
`;

const Img = styled.img`
  position: absolute;
  bottom: ${props => props.bottom || '0'};
  right: ${props => props.right || '-30px'};
  width: ${props => props.home ? '7rem' : '9rem'};
`;

const Header = ({ text, icon, home, initialLettersName, isVisible, bottom, right }) => {
  return (
    <Container>
      {initialLettersName
        ? (
        <>
          <Circle isVisible={isVisible}>{initialLettersName}</Circle>
          <Text home={home}>{text}</Text>
        </>
      ) : <Text>Olá</Text>}
      {console.log(text)}
      {icon &&
        <Img
          src={icon}
          alt={text}
          home={home}
          bottom={bottom}
          right={right}
        />
      }
    </Container>
  );
}

export default Header;