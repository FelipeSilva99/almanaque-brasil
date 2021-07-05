import React from 'react';
import styled from 'styled-components';

// Styles
const Content = styled.button`
	/* margin-bottom: 2rem; */
  margin: ${props => props.margin};
	width: 100%;
	/* max-height: 4rem; */
	height: ${props => props.height || '2.375rem'};
  max-width: 425px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: .75rem;
	font-weight: 900;
  letter-spacing: .05rem;
	color: ${props => props.color || "#373737"};
  text-transform: uppercase;
	background: ${props => props.background || '#fcd029'};
	border-radius: 20px;
	box-shadow: ${props => props.boxShadow || '0 7px 0 #ee892f'};
  
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
  handleClick,
  margin,
  color
}) => {
  return (
    <Content
      height={height}
      background={background}
      boxShadow={boxShadow}
      color={color}
      margin={margin}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </Content>
  );
}

export default Button;
