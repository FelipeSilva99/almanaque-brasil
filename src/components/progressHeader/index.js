import React from 'react';
import styled from 'styled-components';

// Assets
import headerBackground from '../../images/progressHeaderBackground.svg'
import trophiesIcon from '../../images/icons/progressHeader/trophies.svg'
import booksIcon from '../../images/icons/progressHeader/books.svg'
import trailsIcon from '../../images/icons/progressHeader/trails.svg'

const Container = styled.header`
  position: absolute;
  top: -20px;
  width: 100%;
  background-color: #d5e2ff;
  overflow: hidden;
  z-index: 1;

  img{
    position: relative;
    left: -14px;
    width: 456px;
  }
`;

const Square = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 10px; */
  width: 40px;
  height: 43px;
  border-radius: 4px;
  background-color: #FFD000;

  img{
    position: relative;
    left: 0px;
    width: 22px;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* min-height: 43px; */
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  top: 52px;
  width: 100%;
  /* height: 30px; */
  z-index: 1;
`;

const ValueBox = styled.div`
  width: 66px;
  padding: 2px 0 2px 0;
  border: 2px solid #D8D3D3;
  border-left: none;
  border-radius: 0px 6px 6px 0;
  text-align: center;
  font-weight: 800;
  font-size: 1.2rem;
`;

export default ({ points=0, trails=0, books=0 }) => {
  const items = [
    { value: points, icon: trophiesIcon}, 
    { value: trails, icon: trailsIcon },
    { value: books, icon: booksIcon }
  ]

  return(
    <Container>
      <img src={headerBackground}></img>
      <Row>
        {items.map(item => {
          return <Item>
            <Square><img src={item.icon} alt="icon" /></Square>
            <ValueBox>{item.value}</ValueBox>
          </Item>
        })}
      </Row>
    </Container>
  );
}
