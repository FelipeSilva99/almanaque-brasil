import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Auth } from 'aws-amplify';
import { connect } from 'react-redux';

// Redux modules
import { signIn } from '../../../dataflow/modules/signIn-modules';
import { getActionsBook } from '../../../dataflow/thunks/actionsBook-thunks';

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
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${props => props.margin || 'auto'};
  padding-top: 5px;
  width: 100%;
  height: ${props => props.height || '34px'};
  max-width: 36px;
  border-radius: 50%;
  font: 900 1.5rem 'Nunito', sans-serif;
	box-shadow: ${props => props.boxShadow || '0 5px 0 #000000'};
	background: ${props => props.background || '#373737'};
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
  height: ${props => props.openSpan && '100%'};
  max-width: 425px;
  background: ${props => props.openSpan && 'rgba(0,0,0,.3)'};
  transition: .1s;
`;

const ContentHelp = styled.div`
  position: relative;
  top: 5.2rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 3.5rem;
  width: 93%;
  max-width: 420px;
  box-shadow: 0 5px 5px #999;
  border-radius: 22px 4px 20px 20px;
  background: #fff;

  &:after {
    content: "";
    position: absolute;
    top: -2.4rem; right: 0;
    border: 20px solid;
    border-color: transparent transparent #fff transparent;
  }
`;

const Paragraph = styled.p`
  color: #373737;
  font: 500 1rem 'Nunito', sans-serif;
`;

const Email = styled.h3`
  padding: 1.688rem 0 1.836rem 0;
  color: #373737;
  font: 900 1.2rem 'Nunito', sans-serif;
  word-break: break-word;

  @media (max-width: 400px) { font-size: 1rem; }
`;

const Close = styled.div`
  color: #373737;
  font: 800 2.1rem 'Nunito', sans-serif;
  transform: scale(1,.85);
  transition: .2s ease;
  cursor: pointer;

  &:hover { transform: scale(1.1,.95); }
`;

const Content = styled.div`
  position: relative;
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

const mapDispatchToProps = dispatch => {
  return {
    signIn: (info) => dispatch(signIn(info)),
    getActionsBook: () => dispatch(getActionsBook())
  }
};


const Home = (props) => {
  const [screen, setScreen] = useState('almanaque');

  const handleClick = (type) => {
    props.history.push({ pathname: `/${type}` });
  };

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
  };

  useEffect(() => {
    console.log("testing")
    Auth.currentAuthenticatedUser().then(user => {
      console.log("USER", user)
      const idToken = user.signInUserSession.idToken.jwtToken;
      // const idToken = user.signInUserSession.idToken.jwtToken;
      props.signIn(user.attributes)
      localStorage.setItem('idToken', idToken)
      props.getActionsBook()
      props.history.push('/dashboard')
      console.log("User", user)
    }).catch(err => console.log("Errorrrrr", err))
  }, [])

  async function federatedeSignin(provider) {
    try {
      Auth.federatedSignIn({ provider })
    } catch (error) {
      console.log('error', error);
    }
  };

  const [openSpan, setOpenSpan]= useState(false);

  const renderSpan = () => (
    <ContentHelp openSpan={openSpan}>
      <Paragraph>Precisa de ajuda? Envie um e-mail para:</Paragraph>
      <Email>ajuda.almanaque.app@precisaser.org</Email>
      <Close onClick={()=> setOpenSpan(false)}>x</Close>
    </ContentHelp>
  );

  const renderScreenHome = () => (
    <Content>
      <BoxSpan openSpan={openSpan}>
        <BtnDoubt onClick={()=> setOpenSpan(openSpan ? false : true)}>?</BtnDoubt>
        {openSpan ? renderSpan() : null}
      </BoxSpan>
      
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
          handleClick={() => federatedeSignin("Facebook")}
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
          handleClick={() => federatedeSignin("Facebook")}
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

export default connect(
  null,
  mapDispatchToProps
)(Home);
