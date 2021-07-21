import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Component
import Header from '../../components/header';
import Button from '../../components/buttons/button';

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

const Content = styled.div`
  padding: 2rem;
  width: 100vw;
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const ContentInfo = styled.div`
  padding-bottom: 1rem;
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Text = styled.div`
  width: 7rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: .875rem;
  color: #373737;
  font-weight: 900;
  border-radius: 8px;
  box-shadow: 0 3px 6px #00000029;
`

function IfTurnsOn({ useActivitie, handlerNextActivitie }) {
  const [activitie, setActivitie] = useState(undefined);

  useEffect(() => {
    setActivitie(useActivitie);
  }, [useActivitie]);

  console.log(useActivitie);

  return (
    <Container>
      <Header
        logo={logo}
      />
      <Content>
        {activitie?.pairs?.map(item => (
          <ContentInfo>
            <img src={`data:image/jpeg;base64,${item.imageBase64}`} />
            <Text>{item.text}</Text>
          </ContentInfo>
        ))}
        <Button>conferir resposta</Button>
      </Content>
    </Container>
  )
}

export default IfTurnsOn;
