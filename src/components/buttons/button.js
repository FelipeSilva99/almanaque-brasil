import React from 'react';
import styled from 'styled-components';

// Styles
const Content = styled.button`
	margin-bottom: 2rem;
	width: 100%;
	height: 6rem;
  max-width: 21rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	font-weight: bold;
	color: #fff;
	background: #b9b9b9;
	border-radius: 20px;
	box-shadow: 0 12px 0 #888888;
  
	:disabled {
		background: red;
		opacity: .4;
		cursor: initial;
	}
`;

const Button = ({ children, disabled, handleClick }) => {
	return (
		<Content disabled={disabled} onClick={handleClick}>
			{children}
		</Content>
	);
}

export default Button;
