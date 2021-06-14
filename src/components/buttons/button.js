import React from 'react';
import styled from 'styled-components';

// Styles
const Content = styled.button`
	margin-bottom: 2rem;
	width: 100%;
	max-height: 4rem;
	height: 6rem;
  max-width: 425px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	font-weight: bold;
	color: #fff;
	background: ${props => props.background || '#b9b9b9'};
	border-radius: 20px;
	box-shadow: ${props => props.boxShadow || '0 12px 0 #888888'};
  
  :disabled {
    background: ${props => props.backgroundDisabled};
    opacity: ${props => props.opacityDisabled || '.4'};
    cursor: initial;
  }
  
  @media (min-width: 1024px) {
    height: 5rem;
  }

  @media (max-width: 375px) {
    min-height: 3rem;
  }
`;

const Button = ({
  background,
  boxShadow,
  children,
  disabled,
  handleClick
}) => {
  return (
    <Content
      background={background}
      boxShadow={boxShadow}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </Content>
  );
}

export default Button;
