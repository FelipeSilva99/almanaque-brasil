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
  bottom: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 0;

  @media (max-width: 360px) { height: 88%; }
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
  z-index: 1;
  /* width: 100%; */
  overflow: auto;
`;

const Stone = styled.img`
  position: absolute;
  right: -20px;
  top: ${props => props.top};
  right: ${props => props.right};
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
        {trails.map((trail, key) => {
          const useAliases = aliases[trail.name].stone;
          const stone = useAliases.state;
          const renderImg = trail.isActive ? stone.doing : stone.todo;

          return (
            <MapFragment
              key={key}
              left={aliases[trail.name].position.left}
              bottom={aliases[trail.name].position.bottom}
              type="image/svg+xml"
            >
              <Stone
                onClick={() => handleMapFragmentClick(trail, key)}
                top={aliases[trail.name].stone.position.top}
                right={aliases[trail.name].stone.position.right}
                src={renderImg}
                alt={aliases[trail.name].name}
              />
              <img onClick={() => handleMapFragmentClick(trail, key)} src={aliases[trail.name].img} alt='mapa'/>
            </MapFragment>
          )
        })}
        <Skeleton src={skeleton} />

      </MapBackground>
    </AlignToCenter>
  );
}

export default Map;