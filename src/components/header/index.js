import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

//Component
import ModalTip from '../modal/tip';

//Images
import iconBack from '../../images/icons/arrow.svg';
import tip from '../../images/icons/tip.svg';
import selectedTip from '../../images/icons/selectedTip.svg';

// Styles
const Container = styled.header`
  width: 100%;
  max-width: 425px;
  position: ${props => props.trunkScreen ? 'fixed' : 'relative'};
  padding: ${props => (props.trunkScreen && '1.5rem 1rem 1.5rem 0') || (!props.noPadding && '1rem')};
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  animation: .3s fadeIn ease-in-out;

  ${({ animation }) => animation && `
    background: #fff;
  `}
`;

const Figure = styled.figure`
  padding-left: ${props => props.trunkScreen && '1.5rem'};
  width: 2.25rem;
  display: ${props => props.noBack ? 'none' : 'flex'};
  cursor: pointer;
`;

const Img = styled.img`
  width: .80rem;
  transform: rotate(180deg);
`;

const ButtonTip = styled.button`
  padding: ${props => props.isSelectedTips && '.5rem'};
  width: 2.25rem;
  border-radius: 50%;
  display: ${props => props.noBack ? 'none' : 'flex'};
  justify-content: center;
  align-items: center;
  background: ${props => props.isSelectedTips && '#fff'};
  z-index: 2;
`;

const Title = styled.h1`
  width: 100%;
  font-size: 1rem;
  font-weight: 900;
  line-height: 0;
  color: #373737;
  text-align: center;
  animation: .3s fadeIn ease-in-out;
	opacity: ${props => props.trunkScreen && 0};

  ${({ animation }) => animation && `
    -webkit-transition: .1s ease-in-out;
    transition: .4s ease-in-out;
    opacity: 1
  `}
`;

const Header = ({
  title,
  tips,
  noPadding,
  noBack,
  isSelectedTips,
  handleModalTip,
  trunkScreen,
  showTitle,
  goBack
}) => {
  const history = useHistory();
  const imgTip = isSelectedTips ? selectedTip : tip;

  const handleGoBack = () => {
    if (goBack) {
      goBack();
    } else {
      history.push('/activities');
    }
  }

  const renderGoBack = () => (
    <Figure
      trunkScreen={trunkScreen}
      onClick={handleGoBack}
    >
      <Img src={iconBack} alt='Voltar' />
    </Figure>
  )

  const renderTips = () => (
    <ButtonTip isSelectedTips={isSelectedTips} onClick={handleModalTip}>
      <img src={imgTip} alt='Dica' />
    </ButtonTip>
  )

  return (
    <Container trunkScreen={trunkScreen} noPadding={noPadding} animation={showTitle}>
      {!noBack && renderGoBack()}
      <Title trunkScreen={trunkScreen} animation={showTitle}>{title}</Title>
      {tips ? renderTips() : <ButtonTip noBack={noBack} />}
      {isSelectedTips && <ModalTip text={tips} handleModalTip={handleModalTip} />}
    </Container>
  );
}

export default Header;