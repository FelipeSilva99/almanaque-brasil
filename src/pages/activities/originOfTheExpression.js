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
  align-items: center;
  flex-direction: column;
  background: #fff;
  border: 2px red solid;
`;

const OriginOfTheExpression = (handleNextQuestion) => {
  
  return (
    <Container>
        <InfoScreen handleNextQuestion={handleNextQuestion} />
    </Container>
  );
}

export default OriginOfTheExpression;