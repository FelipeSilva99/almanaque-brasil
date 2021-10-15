import React from 'react'
import styled from 'styled-components';

//Images 
import arrow from '../../images/icons/arrow.svg';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 14px 20px 14px 16px;
  margin-bottom: 16px;
  background: #FFF;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 16px;
`;

const UpSide = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 900;
`;

const IconArrow = styled.img`
  transform: ${props => props.isOpen && 'rotate(90deg)'};
`;

const BottomSide = styled.div`
  width: 100%;
  display: ${props => props.isCheck ? 'flex' : 'none'};

  button {
    width: 40%;
    min-width: 100px;
    height: 2rem;
    margin: 12px 0 0 0;
  }
`;

const Item = ({
  title,
  children,
  handleClick,
  isOpen,
  isCheck,
}) => (
  <Container>
    <UpSide>
      <Title>{title}</Title>
      <IconArrow
        src={arrow}
        alt='Seta'
        isOpen={isOpen}
        onClick={handleClick}
      />
    </UpSide>
    <BottomSide isCheck={isCheck}>
      {children}
    </BottomSide>
  </Container>
)

export default Item