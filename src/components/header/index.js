import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  /* position: fixed; */
  /* margin-top: 2rem; */
  width: 100vw;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #fff; */
  /* box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px; */

  @media (min-width: 1024px) { height: 5rem; }
`;

const ImgIconBack = styled.img`
  width: 1.0625rem;
  position: absolute;
  left: .8rem;
`;

const Image = styled.img`
  width: 4.375rem;

  @media (min-width: 1024px) { width: 6rem; }

`;

const Header = ({ iconBack, logo }) => {
  return (
    <Container>
      <ImgIconBack src={iconBack} />
      <Image src={logo} />
    </Container>
  );
}

export default Header;