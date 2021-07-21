import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Component
import Header from '../../components/header';

//Images
import logo from '../../images/logo/ifTurnsOn.svg';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #f3f3f3;
  width: 100vw;
  height: 100vh;

  @media (min-width: 1024px) {
    justify-content: center;
  }
`


function IfTurnsOn({ useActivitie, handlerNextActivitie }) {
  const [activitie, setActivitie] = useState(undefined);

  useEffect(() => {
    setActivitie(useActivitie);
  }, [useActivitie]);

  return (
    <Container>
      <Header
        logo={logo}
      />
    </Container>
  )
}

export default IfTurnsOn;
