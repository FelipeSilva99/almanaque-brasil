import React from 'react';
import styled from 'styled-components';

import iconVisualized from '../../images/activity/iconVisualized.svg';
import iconVisualizedBloqued from '../../images/activity/iconVisualizedBloqued.svg';

//Styles
const ActivitiesCircle = styled.button`
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

const ActivitieIcon = (props) => {
  const setColor = () => {
    return props.activitieState === 'bloqued' ? '#a0a0a0' : '#2a2929'
  }

  const handleClick = () => {
    return props.activitieState === 'bloqued' ? undefined : props.onClick
  }

  return (
    <Box>
      <ActivitiesCircle type={props.item.type} onClick={handleClick()} history={props.history}>
        { props.activitieState === 'bloqued' ? <img src={iconVisualizedBloqued} /> : <img src={iconVisualized} /> }
        <Text color={() => setColor()}>{props.children + 1}</Text>
      </ActivitiesCircle>
      <p>{props.item.name}</p>
    </Box>
  )
}

export default ActivitieIcon