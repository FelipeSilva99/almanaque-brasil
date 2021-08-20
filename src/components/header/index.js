/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

//Images
import iconBack from '../../images/icons/iconBack.svg';
import tip from '../../images/icons/tip.svg';
import selectedTip from '../../images/icons/selectedTip.svg';

// Styles
const Container = styled.header`
  width: 100vw;
  /* height: 100px; */
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1024px) { height: 5rem; }
`;

const Figure = styled(Link)`
  width: 2.25rem;
`;

const ButtonTip = styled.button`
  padding: ${props => props.isSelectedTips && '.5rem'};
  width: 2.25rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.isSelectedTips && '#fff'};
  z-index: 2;
`;

const Image = styled.img`
  width: 4.875rem;

`;

const Header = ({ logo, tips, isSelectedTips, handleModalTip }) => {
  const imgTip = isSelectedTips ? selectedTip : tip;

  return (
    <Container>
      <Figure to="/activities">
        <img src={iconBack} alt='Voltar' />
      </Figure>
      <Image src={logo} alt='Logo' />
      {tips ? (
        <ButtonTip isSelectedTips={isSelectedTips} onClick={handleModalTip}>
          <img src={imgTip} alt='Dica'/>
        </ButtonTip>
      ) : <ButtonTip/>}
    </Container>
  );
}

export default Header;