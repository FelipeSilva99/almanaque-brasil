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
  flex: 3;
  width: 11.25rem;
`;

const BtnDoubt = styled.button`
  font-family: 'Nunito', sans-serif;
  font-size: 24px;
  font-weight: bold;
  position: relative;
  top: 36px;
  left: 160px;
  padding-top: 5px;
  margin: ${props => props.margin || 'auto'};
	width: 100%;
	height: ${props => props.height || '38px'};
  max-width: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${props => props.background || '#373737'};
  border-radius: 20px;
	box-shadow: ${props => props.boxShadow || '0 7px 0 #000000'};
  color: #FFD000;

  :disabled {
    background: ${props => props.backgroundDisabled};
    opacity: ${props => props.opacityDisabled || '.4'};
    cursor: initial;
  }
`;

const BoxSpan = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  max-width: 425px;
  background: rgba(0,0,0,.3);
`;
const Span = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 135px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 16px;
  width: 95%;
  max-width: 420px;
  height: 224px;
  background: #ffffff;
  ::after {
  content: "";
  position: absolute;
  bottom: 100%;
  right: 14px;
  border-width: 20px;
  border-style: solid;
  border-color: transparent transparent #fff transparent;}
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #373737;
  font-family: 'Nunito', sans-serif;
`;
const Email = styled.h3`
  font-size: 20px;
  margin-top: 26px;
  color: #373737;
  font-family: 'Nunito', sans-serif;
`;
const Close = styled.div`
  font-size: 31px;
  margin-top: 20px;
  font-weight: bold;
  color: #373737;
  font-family: 'Nunito', sans-serif;
`;
const Content = styled.div`
  padding: 1.875rem 1rem 1rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #F3F3F3;
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

  const [openSpan, setOpenSpan]= useState(false)
  const renderSpan = () => (
    <BoxSpan>
      <Span>
        <Paragraph>Precisa de ajuda? Envie um e-mail para:</Paragraph>
        <Email>emailteste@email.com</Email>
        <Close onClick={()=> setOpenSpan(false)}>x</Close>
      </Span>
    </BoxSpan>
  )

  const renderScreenHome = () => (
    <Content>
      <BtnDoubt onClick={()=> setOpenSpan(true)}>?
      </BtnDoubt>
      {openSpan ? renderSpan() : null}
      <Img src={logo} alt='logo' />
      <ContentBox>
        <Button
          handleClick={() => handleClick('cadastro')}
        >
          inscreva-se
        </Button>
        <Button
          backgroundDisabled='#ccc'
          buttonBg='#FFFFFF'
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
          color='#fff' buttonBg='#3C5A9A'
          boxShadow='#153372 0px 7px 0px'
          // disabled={true}
          isIcon
          icon={iconFacebook}
        >
          continuar com facebook
        </Button>
        <Button
          buttonBg='#F3F3F3'
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