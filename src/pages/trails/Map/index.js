/* eslint-disable no-lone-blocks */
import React from 'react';
import styled from 'styled-components';

//Component
import aliases from './aliases';
import skeleton from '../../../images/trails/map/skeleton.svg'

const AlignToCenter = styled.main`
  &::-webkit-scrollbar {
    display: none;               /* width of the entire scrollbar */
  }
  position: fixed;
  background-color: #ebeeec;
  bottom: 20px;
  height: 100%;
  min-width: 425px;
  overflow: hidden;
  z-index: 0;

  @media (max-width: 320px) {
    bottom: -32px;
  }
`;

const MapBackground = styled.div`
  position: fixed;
  max-width: 425px;
  transform: scale(1,.975);
  min-height: 100%;
  height: -webkit-fill-available;
  
  @media (max-width: 360px) {
    left: -2rem;
    transform: scale(.9,.85);
  }
  @media (max-height: 630px) {
    transform: scale(.8,.8);
  }
  
  @media (max-width: 400px) {
    left: -1.5rem;
  }
  
  @media (max-width: 320px) {
    left: -1rem;
    transform: scale(.8,.7);
  }
`;

const MapFragment = styled.div`
  position: absolute;
  left: ${props => props.left};
  bottom: ${props => props.bottom};
  display: unset;
  transform: scale(1.03,1.028);
  z-index: ${props => props.esmeralda ? '2' : '1'};
`;

const Stone = styled.img`
  position: absolute;
  top: ${props => props.top};
  right: ${props => props.right};
  max-width: 5.25rem;
  transform: scale(1.22,1.25);
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
    trail.isActive ? goToActivitie(trail, key) : alert(`Trilha ${trail.name} bloqueada`)
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
              left={aliasesName.position.left}
              bottom={aliasesName.position.bottom}
              type="image/svg+xml"
              esmeralda={trail.name === 'Esmeralda'}
              onClick={() => handleMapFragmentClick(trail, key)}
            >
              <Stone
                top={aliasesName.stone.position.top}
                right={aliasesName.stone.position.right}
                src={aliasesName.stone.state.[useTrailsState]}
                alt={aliasesName.name}
              />
              <img src={aliasesName.img}  alt='mapa'/>
            </MapFragment>
          )
        })}
        <Skeleton src={skeleton} />

      </MapBackground>
    </AlignToCenter>
  );
}

export default Map;