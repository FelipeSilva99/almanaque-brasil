/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';

//Images
import iconBack from '../../images/icons/iconBack.svg';

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

const ButtonTip = styled.button`
  padding: .5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  z-index: 2;
`;

const Image = styled.img`
  width: 4.375rem;

  @media (min-width: 1024px) { width: 6rem; }
`;

const Header = ({ logo, tips, isSelectedTips, handleModalTip }) => {
  return (
    <Container>
      <Figure>
        <img src={iconBack} />
      </Figure>
      <Image src={logo} />
      {tips ? (
        <ButtonTip isSelectedTips={isSelectedTips} onClick={handleModalTip}>
          <img src={tips} />
        </ButtonTip>
      ) : <div/>}
    </Container>
  );
}

export default Header;