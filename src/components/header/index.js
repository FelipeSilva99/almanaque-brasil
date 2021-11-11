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
  position: ${props => props.positionFixed ? 'fixed' : 'relative'};
  padding: ${props => (props.trunkScreen && '1.5rem 1rem 1.5rem 0') || (!props.noPadding && '1rem')};
  background: ${props => props.background ? props.background : 'transparent'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: ${props => props.zIndex ? props.zIndex : '4'};
  animation: .3s fadeIn ease-in-out;
  box-shadow:  ${props => props.boxShadow && '0 -5px 15px #00000020'};

  ${({ animation }) => animation && `
    background: #fff;
  `}
`;

const Figure = styled.figure`
  padding-left: ${props => props.trunkScreen && '1.5rem'};
  width: 2.3rem;
  display: ${props => props.noBack ? 'none' : 'flex'};
  transition: .2s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateX(-3px);
    filter: drop-shadow(0 -2px 5px #00000010);
  }
`;

const Img = styled.img`
  width: 1rem;
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
  z-index: 6;
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

  ::first-letter {
    text-transform: capitalize;
  }
`;

const Header = ({
  title,
  tips,
  noPadding,
  noBack,
  noTip,
  isSelectedTips,
  handleModalTip,
  positionFixed,
  background,
  boxShadow,
  zIndex,
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
      history.goBack();
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
    <Container
      positionFixed={positionFixed}
      zIndex={zIndex}
      trunkScreen={trunkScreen}
      noPadding={noPadding}
      animation={showTitle}
      background={background}
      boxShadow={boxShadow}
    >
      {!noBack && renderGoBack()}
      <Title trunkScreen={trunkScreen && !showTitle} animation={showTitle}>{title}</Title>
      {tips ? renderTips() : <ButtonTip noBack={noBack || noTip} />}
      {isSelectedTips && <ModalTip text={tips} handleModalTip={handleModalTip} />}
    </Container>
  );
}

export default Header;