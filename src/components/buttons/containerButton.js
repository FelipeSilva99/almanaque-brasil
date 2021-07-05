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
  align-items: flex-end;
  justify-content: center;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  z-index: 1;
`;

const ContainerButton = ({
  height,
  background,
  boxShadow,
  children,
  handleClick,
}) => {
  return (
    <Content height={height}>
      <Button
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
