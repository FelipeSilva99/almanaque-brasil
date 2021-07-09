/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';

//Images
import iconBack from '../../assets/iconBack.svg';

// Styles
const Container = styled.div`
  width: 100vw;
  /* height: 4rem; */
  padding: 1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1024px) { height: 5rem; }
`;

const Figure = styled.figure`
  width: 2.5rem;
`;

const Image = styled.img`
  width: 4.375rem;

  @media (min-width: 1024px) { width: 6rem; }
`;

const Header = ({ logo, tips }) => {
  return (
    <Container>
      <Figure>
        <img src={iconBack} />
      </Figure>
        <Image src={logo} />
      <Figure>
        {tips ? <img src={tips} /> : <div/>}
      </Figure>
    </Container>
  );
}

export default Header;