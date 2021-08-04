import React from 'react';
import styled from 'styled-components';

//Images
import trunk from '../../images/icons/trunkk.png';

// Styles
const Content = styled.div`
  margin: ${props => props.margin};
	width: 100%;
	height: ${props => props.height || '2.375rem'};
  max-width: 330px;
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

const Btn = styled.button`
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
  didYouKnowScreen
}) => {
  return (
    <Content
      height={height}
      background={background}
      boxShadow={boxShadow}
      margin={margin}
    >
      {didYouKnowScreen && <Image src={trunk} />}
      <Btn color={color} disabled={disabled} onClick={handleClick}>{children}</Btn>
    </Content>
  );
}

export default Button;
