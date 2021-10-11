/* eslint-disable no-lone-blocks */
import React from 'react';
import styled from 'styled-components';

//Component
import aliases from './aliases';
import skeleton from '../../../images/trails/map/skeleton.svg'

const AlignToCenter = styled.div`
  &::-webkit-scrollbar {
    display: none;               /* width of the entire scrollbar */
  }
  position: absolute;
  background-color: #ebeeec;
  bottom: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  z-index: 0;

  @media (max-width: 360px) { bottom: 5px; }

  @media (max-height: 630px) {
    bottom: -2.2rem;
  }
`;

const MapBackground = styled.div`
  position: relative;
  width: 100%;
  min-height: 430px;
  height: 100vh;
  transform: scale(1,.975);

  @media (max-width: 400px) {
    left: -1.5rem;
  }

  @media (max-width: 360px) {
    left: -2rem;
    transform: scale(.9,.95);
  }

  @media (max-height: 630px) {
    transform: scale(.8,.8);
  }
`;

const MapFragment = styled.div`
  position: absolute;
  left: ${props => props.left};
  bottom: ${props => props.bottom};
  transform: scale(1.03,1.028);
  z-index: 1;
`;

const Stone = styled.img`
  position: absolute;
  top: ${props => props.top};
  right: ${props => props.right};
  width: 5.25rem;
  transform: scale(1.22,1.25);
  z-index: 1;
  cursor: pointer;
`;

const Skeleton = styled.img`
  position: absolute;
  bottom: 6px;
  width: 427px;
  z-index: -1;
`;

const Map = ({ trails, trailsState, goToActivitie }) => {
  const handleMapFragmentClick = (trail, key) => {
    trail.isActive ? goToActivitie(key) : alert(`Trilha ${trail.name} bloqueada`)
  }

  return (
    <AlignToCenter>
      <MapBackground>
        {trails.map((trail, key) => {
          const aliasesName = aliases[trail.name];
          const useTrailsState = trailsState?.filter(item => item?.trailId === trail?.id && item?.state)[0]?.state || 'todo';
          
          return (
            <MapFragment
              key={key}
              left={aliases[trail.name].position.left}
              bottom={aliases[trail.name].position.bottom}
              type="image/svg+xml"
            >
              <Stone
                onClick={() => handleMapFragmentClick(trail, key)}
                top={aliasesName.stone.position.top}
                right={aliasesName.stone.position.right}
                src={aliasesName.stone.state.[useTrailsState]}
                alt={aliasesName.name}
              />
              <img onClick={() => handleMapFragmentClick(trail, key)} src={aliasesName.img} alt='mapa'/>
            </MapFragment>
          )
        })}
        <Skeleton src={skeleton} />

      </MapBackground>
    </AlignToCenter>
  );
}

export default Map;