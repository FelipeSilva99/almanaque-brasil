import React from 'react';
import styled from 'styled-components';
import trailsMap from './aliases';
import aliases from './aliases';


const AlignToCenter = styled.div`
  position: absolute;
  background-color: #d5e2ff;
  /* bottom: 48px; */
  display: flex;
  justify-content: center;
  width: 100%;
`;

const MapBackground = styled.div`
  position: relative;
  width: 361px;
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

const Map = ({ trails, goToActivitie }) => {
  const handleMapFragmentClick = (trail, key) => {
    trail.isActive ? goToActivitie(key) : alert(`Trilha ${trail.name} bloqueada`)
  }

  return (
    console.log('aliases', aliases),
    <AlignToCenter>
      <MapBackground>
        {trails.map((trail, key) => (
          // console.log('trail dfd:', trail.name),
          <MapFragment 
            key={key}
            left={aliases[trail.name].position.left}
            bottom={aliases[trail.name].position.bottom}
            type="image/svg+xml"
            ><img onClick={() => handleMapFragmentClick(trail, key)} src={aliases[trail.name].img} />
          </MapFragment>
        ))}
        {/* {Object.keys(aliases).map((trail, key) => (
          console.log('trail', trail),

          <MapFragment 
            key={key}
            src={aliases[trail].img}
            left={aliases[trail].position.left}
            bottom={aliases[trail].position.bottom}
            onClick={() => goToActivitie(trail.id)}></MapFragment>
        ))

        } */}
        
      </MapBackground>
    </AlignToCenter>
  );
}

export default Map;