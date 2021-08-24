import React from 'react';
import styled from 'styled-components';

//Component
import Button from './button';

// Styles
const Content = styled.div`
  padding: 0 1rem;
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

const Text = styled.p`
  padding-top: .5rem; 
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
  isCorrectAnswer,
  isError,
  handleClick,
}) => {
  return (
    <Content height={height} noBorder={noBorder}>
    {console.log('isError', isError)}
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
