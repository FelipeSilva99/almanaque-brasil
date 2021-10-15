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
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 16px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
`;

const IconArrow = styled.img`
  transform: ${props => props.isOpen && 'rotate(90deg)'};
`;

const Item = ({
  title,
  handleClick,
  isOpen,
}) => (
  <Container>
      <Title>{title}</Title>
      <IconArrow
        src={arrow}
        alt='Seta'
        isOpen={isOpen}
        onClick={handleClick}
      />
  </Container>
)

export default Item;
