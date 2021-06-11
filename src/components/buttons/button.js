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
`;

const Button = ({
	answerResult,
	children,
	disabled,
	handleClick
}) => {
	const background = answerResult === 'checkAnswer' && '#19918d' || answerResult === 'wrong' && '#ec8383';
	const boxShadow = answerResult === 'checkAnswer' && '0 12px 0 #275653' || answerResult === 'wrong' && '0 12px 0 #bb6060';
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
