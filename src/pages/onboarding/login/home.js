import React, { useState } from 'react';
import styled from 'styled-components';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { Auth } from 'aws-amplify';

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

  async function handleSignIn(response) {




    // const { email, accessToken, data_access_expiration_time, name, userID } = response
    // const user = {name, email}
    // Auth.currentUserPoolUser().then(res => console.log('current:', res))

    // Auth.federatedSignIn(
    //   "facebook",
    //   {
    //       token: accessToken,
    //       // identity_id: userID, // Optional
    //       expires_at: data_access_expiration_time * 1000 + new Date().getTime() // the expiration timestamp
    //   },
    //   user
    // ).then(cred => {
    //     // If success, you will get the AWS credentials
    //     console.log('AWS login:', cred);
    //     return Auth.currentCredentials()
    // }).then(credentials => {
    //     // If success, the user object you passed in Auth.federatedSignIn
    //     const token = credentials.webIdentityCredentials
    //     console.log("TOKEN", token);
    // })
  
    // .catch(e => {
    //     console.log(e)
    // });





    // console.log("FB login:", response)
    // const identityId = 'us-east-1:5bb5461a-7637-43c4-b014-0b4bf5fa991b'
    // try {
    //   const user = await Auth.federatedSignIn(
    //     "facebook",
    //     { 
    //       token: accessToken,
    //       identity_id: userID,
    //       expires_at: data_access_expiration_time
    //     },
    //     user={name, email}
    //   );

    //   console.log("User Logged", user)
    //   const token = user.signInUserSession.accessToken.jwtToken;
    //   // props.signIn(user.attributes)
    //   localStorage.setItem('accessToken', token)

    //   // props.history.push('/dashboard')
    // } catch (error) {
    //   console.log('error', error);

    // };
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
        {/* <Button
          backgroundDisabled='#ccc'
          background='#FFFFFF'
          boxShadow='#EFE2E2 0px 7px 0px'
          // disabled={true}
          isIcon
          icon={iconGoogle}
        >
          continuar com o google
        </Button> */}
        <button onClick={() => {
          const provider = 'Facebook'
          Auth.federatedSignIn({provider})
        }}>
          Continuar com Facebook
        </button>

        <button onClick={() => {
          const provider = 'Google'
          Auth.federatedSignIn({provider})
        }}>
          Continuar com Google
        </button>
        {/* <Button
          width='.5625rem'
          backgroundDisabled='#ccc'
          color='#fff' background='#3C5A9A'
          boxShadow='#153372 0px 7px 0px'
          // disabled={true}
          isIcon
          icon={iconFacebook}
        >
          continuar com facebook
        </Button> */}
        {/* <FacebookLogin
          appId="849714892604010"
          fields="name,email"
          autoLoad
          callback={response => console.log("Calback response:", response)}
          render={renderProps => (
            <button onClick={() => {
              const provider = 'Facebook'
              Auth.federatedSignIn(
                {provider}
              )
            }}>continuar com facebook</button>
          )}
        /> */}
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
