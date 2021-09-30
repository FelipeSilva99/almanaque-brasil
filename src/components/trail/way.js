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
  // left: 48%;
  right: -47%;
  width: 184px;
  height: 170px;
  transform: rotate(90deg);
  border: dashed 5px ${props => props.color};
  border-color: ${props => props.color} ${props => props.color} transparent ${props => props.color};
  border-radius: 50% 50% 0 0;
  z-index: 1;

  @media (max-width: 350px) {
    right: -39%;
  }
`;

const LineStraight = styled.div`
  position: relative;
  top: 61px;
  left: 33%;
  width: 130px;
  height: 10px;
  border-top: 5px dashed ${props => props.color};
  background: #fff;
  z-index: 5;
`;

const LineToLeft = styled(LineToRight)`
  top: 58px;
  left: 4%;
  margin-bottom: 5px;
  transform: rotate(-90deg);
  z-index: 3;

  @media (max-width: 350px) {
    left: 6%;
  }
`;

const Decoration = styled.img`
  position: absolute;
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
`;

const HouseImg = styled(Decoration)`
  width: 12rem;

  @media (max-width: 425px) {
    width: 11rem;
    right: 0;
  }
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
        top={'58px'}
        left={'-7%'}
        src={backgroundDecorations.top}
        alt=""
      />
      <Decoration
        top={'532px'}
        left={'28%'}
        style={{ width: '10rem' }}
        src={backgroundDecorations.center}
        alt=""
      />
      <HouseImg
        right={'-5%'}
        bottom={'-3.5rem'}
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