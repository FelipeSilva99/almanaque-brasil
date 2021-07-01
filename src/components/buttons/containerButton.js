import React from 'react';
import styled from 'styled-components';

//Component
import Button from './button';

// Styles
const Content = styled.div`
  padding: 0 .8rem 1.5rem;
  width: 100vw;
  height: 6.2rem;
	background: #fff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 1;

`;

const ContainerButton = ({
  background,
  boxShadow,
  children,
}) => {
  return (
    <Content>
      <Button background={background} boxShadow={boxShadow}>
        {children}
      </Button>
    </Content>
  );
}

export default ContainerButton;
