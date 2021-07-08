import React from 'react';
import styled from 'styled-components';

// Styles
const Content = styled.div`
  margin: 0 1.6%;
  margin-bottom: 1rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.563rem;
  font-weight: 700;
  /* color: #fff; */
  color: green;
  border-radius: 11px;
  border: ${props => props.border || '1px dashed #707070'};
  background: ${props => props.background};
`;

const IndividualLetter = ({background, border, letter}) => {
  return (
    <Content
      background={background}
      border={border}
    >
      {letter}
    </Content>
  );
}

export default IndividualLetter;