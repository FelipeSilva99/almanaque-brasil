import React from 'react';
import styled from 'styled-components';

// Styles
const Content = styled.button`
  margin: ${props => props.margin || 'auto'};
	width: 100%;
	height: ${props => props.height || '2.375rem'};
  max-width: 425px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${props => props.background || '#fcd029'};
	border-radius: 20px;
	box-shadow: ${props => props.boxShadow || '0 7px 0 #ee892f'};
  
  :disabled {
    background: ${props => props.backgroundDisabled};
    opacity: ${props => props.opacityDisabled || '.4'};
    cursor: initial;
  }
`;

const Image = styled.img`
  width: 24px;
  margin-right: 1rem;
`

const Btn = styled.p`
  max-width: 300px;
  font-size: .75rem;
	font-weight: 900;
  letter-spacing: .05rem;
	color: ${props => props.color || "#373737"};
  text-transform: uppercase;
`

const Button = ({
  height,
  background,
  boxShadow,
  children,
  disabled,
  handleClick,
  margin,
  color,
  isIcon,
  icon,
}) => {
  return (
    <Content
      height={height}
      background={background}
      boxShadow={boxShadow}
      margin={margin}
      disabled={disabled}
      onClick={handleClick}
    >
      {isIcon && <Image isIcon={isIcon} src={icon} />}
      <Btn color={color}>{children}</Btn>
    </Content>
  );
}

export default Button;
