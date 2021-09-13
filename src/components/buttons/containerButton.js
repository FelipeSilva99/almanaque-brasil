import React from 'react';
import styled from 'styled-components';

//Component
import Button from './button';

// Styles
const Content = styled.div`
  padding: ${props => props.noPadding || '0 1rem'};
  width: 100%;
  height: ${props => props.height || '6.2rem'};
	background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top-left-radius: ${props => !props.noBorder && '25px'};
  border-top-right-radius: ${props => !props.noBorder && '25px'};
`;

const Text = styled.p`
  padding-top: .5rem; 
  font-size: .9375rem;
  color: #373737;

  @media(max-width: 320px) {
    font-size: .875rem;
  }
`;

const ContainerButton = ({
  height,
  color,
  background,
  boxShadow,
  noBorder,
  noPadding,
  children,
  isCorrectAnswer,
  isError,
  handleClick,
}) => {
  return (
    <Content height={height} noBorder={noBorder} noPadding={noPadding}>
      {isCorrectAnswer && <Text>A resposta certa é</Text>}
      {isError && <Text>{isError}</Text>}
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
