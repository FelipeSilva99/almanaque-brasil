import React from 'react';
import styled from 'styled-components';
import trailsMap from './aliases';
import aliases from './aliases';

const Container = styled.div`
  background-color: aliceblue;
  position: absolute;
  /* bottom: 0; */
  width: 100%;
  height: 300px;
`;

const MapFragment = styled.img`
  position: absolute;
`;

const Map = ({ trails, goToActivitie }) => {
  return (
    console.log('aliases', aliases),
    <Container>
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
          onClick={() => goToActivitie(trail.id)}></MapFragment>
      ))

      }
    </Container>
  );
}

export default Map;