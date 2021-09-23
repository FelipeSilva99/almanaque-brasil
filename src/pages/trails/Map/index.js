import React from 'react';
import styled from 'styled-components';

//Component
import aliases from './aliases';
import skeleton from '../../../images/trails/map/skeleton.svg'

const AlignToCenter = styled.div`
  &::-webkit-scrollbar {
    display: none;               /* width of the entire scrollbar */
  }
  overflow: auto;
  position: absolute;
  background-color: #ebeeec;
  bottom: 39px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const MapBackground = styled.div`
  position: relative;
  width: 413px;
  min-height: 430px;
  height: 100vh;
`;

const MapFragment = styled.div`
  position: absolute;
  left: ${props => props.left};
  bottom: ${props => props.bottom};

  p{
    position: absolute;
    color: red;
    z-index: 3;
  }
`;

const Skeleton = styled.img`
  position: absolute;
  bottom: 0;
`;

const Map = ({ trails, goToActivitie }) => {
  const handleMapFragmentClick = (trail, key) => {
    trail.isActive ? goToActivitie(key) : alert(`Trilha ${trail.name} bloqueada`)
  }

  return (
    <AlignToCenter>
      <MapBackground>
        {trails.map((trail, key) => (
          <MapFragment 
            key={key}
            left={aliases[trail.name].position.left}
            bottom={aliases[trail.name].position.bottom}
            type="image/svg+xml"
            >
            <img onClick={() => handleMapFragmentClick(trail, key)} src={aliases[trail.name].img} />
          </MapFragment>
        ))}
        <Skeleton src={skeleton} />
        
      </MapBackground>
    </AlignToCenter>
  );
}

export default Map;