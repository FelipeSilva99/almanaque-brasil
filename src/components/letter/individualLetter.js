import React from 'react';
import styled from 'styled-components';

// Styles
const Content = styled.div`
  margin: 0 .6%;
  margin-bottom: 1rem;
  width: 2rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 900;
  color: #36A39A;
  border-bottom: 1px solid #707070;

  :first-child{
    text-transform: capitalize;
  }
`;

const IndividualLetter = ({letter}) => {
  return (
    <Content>
      {letter}
    </Content>
  );
}

export default IndividualLetter;