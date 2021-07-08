import React from 'react';
import styled from 'styled-components';

//Components
import InfoScreen from '../../components/activities/infoScreen';

// Styles
const Container = styled.div`
  padding: 2rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  background: #fff;
`;

const OriginOfTheExpression = () => {
  
  return (
    <Container>
        <InfoScreen />
    </Container>
  );
}

export default OriginOfTheExpression;