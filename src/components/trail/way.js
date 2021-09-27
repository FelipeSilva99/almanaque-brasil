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
  top: 57px;
  left: 52%;
  transform: rotate(32deg);
  width: 170px;
  height: 160px;
  border: dashed 5px ${props => props.color};
  border-color: ${props => props.color} ${props => props.color} transparent transparent;
  border-radius: 50%;
  z-index: 1;

  @media (max-width: 320px) {
    transform: rotate(10deg);
    width: 10rem;
  }
`;

const LineStraight = styled.div`
  position: absolute;
  top: 3.5rem;
  left: 39%;
  width: 110px;
  height: 10px;
  border-top: 5px dashed rgb(76, 144, 175);
  background: #fff;
  z-index: 2;
`;
export { LineStraight };

const LineToleft = styled.div`
  position: relative;
  left: 3%;
  transform: rotate(-90deg);
  width: 170px;
  height: 170px;
  border: dashed 5px ${props => props.color};
  border-color: ${props => props.color} ${props => props.color} transparent ${props => props.color};
  border-radius: 50% 50% 0 0;
  top: 61px;
  z-index: 3;

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

const Way = ({ backgroundDecorations, linesQuantity, progress }) => {
  const [lines, setLines] = useState(undefined)
  
  const defineLines = (quantity) => {
    let nextItemIsSingular = true;
    let linesArray = []
    
    for(let i = 0; i < quantity; i++) {
      if(nextItemIsSingular) {
        nextItemIsSingular = false
        linesArray.push("right")
      } else {
        if((i+1) % 3 === 0) {
          nextItemIsSingular = true
          linesArray.push("left")
        }
      }
    }
    return linesArray;
  }

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
    if(progress[ind]?.state === 'done') return '#4C90AF'
    else return 'silver'
  }

  return(
    <Container>
      <Decoration
        src={backgroundDecorations.top}
        alt=""
      />
      <Decoration
        top={'488px'}
        left={'110px'}
        src={backgroundDecorations.center}
        alt=""
      />
      <Decoration
        bottom={'0'}
        right={0}
        src={backgroundDecorations.bottom}
        alt=""
      />
      {lines && lines.map((type, i) => {
        return setComponent(type, i)
      })}
    </Container>
  )
}

export default Way