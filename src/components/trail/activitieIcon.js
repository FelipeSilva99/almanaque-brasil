import React from 'react';
import styled from 'styled-components';

import iconVisualized from '../../images/activity/iconVisualized.svg';
import iconVisualizedBloqued from '../../images/activity/iconVisualizedBloqued.svg';
import checkIcon from '../../images/activity/check.svg';

//Styles
const ActivitiesCircle = styled.button`
  position: relative;
  margin: 1.5rem 3rem .5rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 30;
`;

const Box = styled.div`
  text-align: center;
  height: 117px;
  margin-bottom: 3rem;
  z-index: 3;
`;
  
const Text = styled.p`
  color: ${props => props.color};
  position: absolute;
  font-size: 1.5rem;
`;

const Check = styled.img`
  position: absolute;
  top: 43px;
  right: -5px;
`;

const BoxName = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  p{ width: 6.25rem; }
`;

const ActivitieIcon = ({item, children, activitieState, onClick, history }) => {
  const setColor = () => {
    return activitieState === 'bloqued' ? '#a0a0a0' : '#2a2929'
  }

  const handleClick = () => {
    return activitieState === 'bloqued' ? undefined : onClick
  }

  return (
    <Box>
      <ActivitiesCircle type={item.type} onClick={handleClick()} history={history}>
        { activitieState === 'bloqued' ? <img src={iconVisualizedBloqued} alt={item.name} /> : <img src={iconVisualized} alt={item.name}/> }
        <Text color={() => setColor()}>{children + 1}</Text>
        {activitieState === 'done' && <Check src={checkIcon}/>}
      </ActivitiesCircle>
      <BoxName><p>{item.name}</p></BoxName>
    </Box>
  )
}

export default ActivitieIcon;
