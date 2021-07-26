import React from 'react';
import styled from 'styled-components';

//Component
import Button from './button';

// Styles
const Content = styled.div`
  padding: 0 .8rem 1.5rem;
  width: 100vw;
  height: ${props => props.height || '6.2rem'};
	background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top-left-radius: ${props => !props.noBorder && '25px'};
  border-top-right-radius: ${props => !props.noBorder && '25px'};
  z-index: 1;
`;

const TextError = styled.div`
  padding: 1.375rem 0 1.4375rem 0;
  font-size: .9375rem;
  color: #373737;
`;

const ContainerButton = ({
  height,
  color,
  background,
  boxShadow,
  noBorder,
  children,
  handleClick,
  isCorrectAnswer,
}) => {
  return (
    <Content height={height} noBorder={noBorder}>
      {isCorrectAnswer && <TextError>A resposta certa é</TextError>}
      <Button
        color={color}
        background={background}
        boxShadow={boxShadow}
        handleClick={handleClick}
      >
        {children}
      </Button>
    </Content>
  );
}

export default ContainerButton;
