import React from 'react';
import styled from 'styled-components';

// Styles
const Content = styled.button`
	/* margin-bottom: 2rem; */
	width: 100%;
	/* max-height: 4rem; */
	height: ${props => props.height || '38px'};
  max-width: 425px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: .85rem;
	font-weight: bold;
	color: #373737;
  text-transform: uppercase;
	background: ${props => props.background || '#b9b9b9'};
	border-radius: 20px;
	box-shadow: ${props => props.boxShadow || '0 12px 0 #888888'};
  
  :disabled {
    background: ${props => props.backgroundDisabled};
    opacity: ${props => props.opacityDisabled || '.4'};
    cursor: initial;
  }
/*   
  @media (min-width: 1024px) {
    height: 5rem;
  }

  @media (max-width: 375px) {
    min-height: 3rem;
  } */
`;

const Button = ({
  height,
  background,
  boxShadow,
  children,
  disabled,
  handleClick
}) => {
  return (
    <Content
      height={height}
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
