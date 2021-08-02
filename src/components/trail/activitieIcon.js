import React from 'react';
import styled from 'styled-components';


//Styles
const ActivitiesCircle = styled.button`
  margin: 1.5rem 3rem .5rem 3rem;
  width: 63px;
  height: 63px;
  background-color: #f8cc80;
  border: 2px solid #cfa151;
  /* font-size: 2rem; */
  font-weight: 800;
  color: #2A2929;
  border-radius: 50%;
  cursor: pointer;
  z-index: 30;
`;
const Box = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  z-index: 3;
`;
const Text = styled.p`
  font-size: 1.5rem;
`;

const ActivitieIcon = (props) => {

  return(
    <Box>
      <ActivitiesCircle type={props.item.type} onClick={props.onClick} history={props.history}>
        <Text>{props.children+1}</Text>
      </ActivitiesCircle>
      <p>{props.item.name}</p>
    </Box>
  )
}

export default ActivitieIcon