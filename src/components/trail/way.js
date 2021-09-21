import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

//Styles
const Container = styled.div`
  position: absolute;
  max-width: 375px;
  width: 100vw;
  /* min-height: 100%; */
  z-index: 1;
`;

const LineToRight = styled.div`
  position: relative;
  left: 144px;
  transform: rotate(33deg);
  width: 180px;
  height: 180px;
  border: dashed 5px ${props => props.color};
  border-color: ${props => props.color} ${props => props.color} transparent transparent;
  border-radius: 50%;
  top: 51px;
  z-index: 1;

  @media (max-width: 320px) {
    transform: rotate(10deg);
    width: 10rem;
  }
`;

const LineStraight = styled.div`
  position: relative;
  left: 90px;
  width: 150px;
  height: 5px;
  border-top: dashed 5px ${props => props.color};
  top: 29px;
  z-index: 2;
`;

const LineToleft = styled.div`
  /* display: none; */
  position: relative;
  left: 34px;
  right: 33px;
  transform: rotate(-90deg);
  width: 157px;
  height: 147px;
  border: dashed 5px ${props => props.color};
  border-right: none;
  border-color: ${props => props.color} ${props => props.color} transparent ${props => props.color};
  border-radius: 50% 50% 0 0;
  top: 41px;
  z-index: 3;
  /* &:after{
    content: '';
    position: absolute;
    width: 100px;
    border-bottom: dashed 5px ${props => props.color};
  } */
  /* background-color: gainsboro; */

  @media (max-width: 320px) {
    left: -9px;
  }
`;

const Decoration = styled.img`
  position: absolute;
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
`;

const defineLines = (quantity) => {
  let nextItemIsSingular = true;
  let linesArray = []
  // console.log('quantity:',quantity)
  for(let i = 0; i < quantity; i++) {
    if(nextItemIsSingular) {
      // console.log("A")
      nextItemIsSingular = false
      linesArray.push("right")
    } else {
      if((i+1) % 3 === 0) {
        // console.log("B")
        nextItemIsSingular = true
        linesArray.push("left")
      }
      else {
        // console.log("C")
        linesArray.push("straight")
      }
    }
  }
  // console.log('lA:',linesArray)
  return linesArray;
}
const Way = ({ backgroundDecorations, linesQuantity, progress }) => {
  const [lines, setLines] = useState(undefined)

  useEffect(() => {
    const lines = defineLines(linesQuantity)
    setLines([...lines])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const setComponent = (type, i) => {
    switch (type) {
      case 'right':
        return <LineToRight key={i} color={setColor(i)}/>

      case 'straight':
        return <LineStraight key={i} color={setColor(i)}/>

      case 'left':
        return <LineToleft key={i} color={setColor(i)}/>

      default:
        return <LineToRight key={i} color={setColor(i)}/>
    }
  }

  const setColor = (ind) => {
    if(progress[ind].state === 'done') return '#4C90AF'
    else return 'silver'
  }

  return(
    <Container>
      <Decoration src={backgroundDecorations.top}></Decoration>
      <Decoration top={'488px'} left={'110px'} src={backgroundDecorations.center}></Decoration>
      <Decoration bottom={'0'} right={0} src={backgroundDecorations.bottom}></Decoration>
      {lines && lines.map((type, i) => {
        return setComponent(type, i)
      })}
    </Container>

  )
}

export default Way