import React from 'react'
import styled from 'styled-components';

//Images 
import arrow from '../../images/icons/arrow.svg';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .875rem 1rem;
  margin-bottom: 16px;
  background: #FFF;
  border-radius: 16px;
  box-shadow: 0px 3px 6px #00000029;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
`;

const IconArrow = styled.img`
  transform: ${props => props.isOpen && 'rotate(90deg)'};
  cursor: pointer;
`;

const Item = ({ title, handleClick }) => (
  <Container onClick={handleClick}>
    <Title>{title}</Title>
    <IconArrow src={arrow} alt='Seta' />
  </Container>
)

export default Item;
