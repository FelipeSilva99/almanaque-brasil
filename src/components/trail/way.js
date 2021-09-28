import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

//Styles
const Container = styled.div`
  position: absolute;
  max-width: 375px;
  width: 100vw;
  z-index: 1;
`;

const LineToRight = styled.div`
  position: relative;
  top: 60px;
  left: 48%;
  width: 184px;
  height: 170px;
  transform: rotate(90deg);
  border: dashed 5px ${props => props.color};
  border-color: ${props => props.color} ${props => props.color} transparent ${props => props.color};
  border-radius: 50% 50% 0 0;
  z-index: 1;

  @media (max-width: 320px) {
    transform: rotate(10deg);
    width: 10rem;
  }
`;

const LineStraight = styled.div`
  position: relative;
  top: 61px;
  left: 33%;
  width: 130px;
  height: 10px;
  border-top: 5px dashed  ${props => props.color};
  background: #fff;
  z-index: 5;
`;

const LineToLeft = styled(LineToRight)`
  top: 58px;
  left: 4%;
  margin-bottom: 5px;
  transform: rotate(-90deg);
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
        linesArray.push("straight")
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
        return <LineToLeft key={i} color={setColor(i)}/>

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
        style={{ width: '12rem' }}
        top={'20px'}
        left={'-12%'}
        alt=""
      />
      <Decoration
        top={'532px'}
        left={'29%'}
        src={backgroundDecorations.center}
        alt=""
      />
      <Decoration
        style={{ width: '12rem' }}
        bottom={'-3.5rem'}
        right={'-5%'}
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