import React from 'react';
import styled from 'styled-components';

//Image
import iconBookBloqued from '../../images/activity/iconBookBloqued.svg';
import iconBookVisualized from '../../images/activity/iconBookVisualized.svg';
import checkIcon from '../../images/activity/check.svg';
import checkErr from '../../images/activity/checkErr.svg';

//Styles
const ActivitiesCircle = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 3.6rem .5rem;
  cursor: pointer;
  z-index: 30;

  @media (max-width: 350px) {
    margin: 1.5rem 2.5rem .5rem;
  }
`;

const Box = styled.div`
  text-align: center;
  height: 117px;
  margin-bottom: 3.8rem;
  z-index: 3;
`;
  
const Text = styled.p`
  color: #2A2929;
  position: absolute;
  font-size: 1.5rem;
  font-weight: 800;
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

const ActivitieIcon = ({item, children, activitieState, onClick, history, iconBloqued, iconVisualized }) => {
  const handleClick = () => {
    return activitieState === 'bloqued' ? undefined : onClick
  };

  //Alterar quando tiver a imagem
  const renderImageBloqued = () => {
    const name =  item?.name;
    return name === 'Eureka' || name === 'Origem da expressão' ? iconBookBloqued : iconBloqued; 
  }

  const renderImageVisualized = () => {
    const name =  item?.name;
    return name === 'Eureka' || name === 'Origem da expressão' ? iconBookVisualized : iconVisualized;
  }

  return (
    <Box>
      <ActivitiesCircle onClick={handleClick()} history={history}>
        { activitieState === 'bloqued' ? <img src={renderImageBloqued()} alt={item?.name} /> : <img src={renderImageVisualized()} alt={item?.name}/> }
        <Text>{children + 1}</Text>
        {(activitieState === 'right' && <Check src={checkIcon} alt='check' />) || (activitieState === 'wrong' && <Check src={checkErr} alt='check'/>)}
      </ActivitiesCircle>
      <BoxName><p>{item?.name}</p></BoxName>
    </Box>
  )
}

export default ActivitieIcon;
