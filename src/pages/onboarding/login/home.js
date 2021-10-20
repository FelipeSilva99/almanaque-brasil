import React, { useState } from 'react';
import styled from 'styled-components';

//Components
import Button from '../../../components/buttons/button';
import SplashAlmanaque from '../../splash';
import SplashPartner from '../../splash/achievement';

//Images
import logo from '../../../images/logo/almanaque.svg';
import iconFacebook from '../../../images/icons/onboarding/iconFacebook.svg';
import iconGoogle from '../../../images/icons/onboarding/iconGoogle.svg';

const Container = styled.div`
  min-height: 100vh;
  background: #FFFEFC;
`;

const Img = styled.img`
  flex: 4;
  width: 11.25rem;
`;

const Content = styled.div`
  padding: 1.875rem 1rem 1rem;
  min-height: 100vh;
  background: #F3F3F3;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const ContentBox = styled.div`
  padding-bottom: 50px;
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

const Home = (props) => {
  const [screen, setScreen] = useState('almanaque');

  const handleClick = (type) => {
    props.history.push({ pathname: `/${type}` });
  }

  const handleNextScreen = () => {
    let timer;
    if (screen === 'almanaque') {
      timer = setTimeout(() => setScreen('partner'), 2000);
    }
    if (screen === 'partner') {
      timer = setTimeout(() => setScreen('home'), 2000);
    }
    
    return () => {
      clearTimeout(timer);
    };
  }

  const renderScreenHome = () => (
    <Content>
      <Img src={logo} alt='logo' />
      <ContentBox>
        <Button
          handleClick={() => handleClick('cadastro')}
        >
          inscreva-se
        </Button>
        <Button
          backgroundDisabled='#ccc'
          background='#FFFFFF'
          boxShadow='#EFE2E2 0px 7px 0px'
          // disabled={true}
          isIcon
          icon={iconGoogle}
        >
          continuar com o google
        </Button>
        <Button
          width='.5625rem'
          backgroundDisabled='#ccc'
          color='#fff' background='#3C5A9A'
          boxShadow='#153372 0px 7px 0px'
          // disabled={true}
          isIcon
          icon={iconFacebook}
        >
          continuar com facebook
        </Button>
        <Button
          background='#F3F3F3'
          boxShadow='#F3F3F3'
          handleClick={() => handleClick('login')}
        >
          entrar
        </Button>
      </ContentBox>
    </Content>
  )

  const renderScreen = () => {
    handleNextScreen();
    switch (screen) {
      case "almanaque":
        return <SplashAlmanaque />

      case "partner":
        return <SplashPartner />

      default:
        return renderScreenHome()
    }
  }

  return (
    <Container>
      {renderScreen()}
    </Container>
  );
}

export default Home;