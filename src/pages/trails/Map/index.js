import React from 'react';
import styled from 'styled-components';
import trailsMap from './aliases';
import aliases from './aliases';

const MapBackground = styled.div`
  position: relative;
  width: 361px;
  min-height: 430px;
  height: 100vh;
`;

const AlignToCenter = styled.div`
  position: absolute;
  background-color: #d5e2ff;
  bottom: 48px;
  display: flex;
  justify-content: center;
  width: 100%;

`;

const MapFragment = styled.img`
  position: absolute;
  left: ${props => props.left};
  bottom: ${props => props.bottom};
`;

const Map = ({ trails, goToActivitie }) => {
  return (
    console.log('aliases', aliases),
    <AlignToCenter>
      <MapBackground>
        {/* {trails.map((trail, key) => (
          console.log(aliases[trail.name].img),
          <MapFragment 
            key={key}
            src={aliases[trail.name].img}
            onClick={() => goToActivitie(trail.id)}></MapFragment>
        ))} */}
        {Object.keys(aliases).map((trail, key) => (
          console.log('trail', trail),

          <MapFragment 
            key={key}
            src={aliases[trail].img}
            left={aliases[trail].position.left}
            bottom={aliases[trail].position.bottom}
            onClick={() => goToActivitie(trail.id)}></MapFragment>
        ))

        }
      </MapBackground>
    </AlignToCenter>
  );
}

export default Map;