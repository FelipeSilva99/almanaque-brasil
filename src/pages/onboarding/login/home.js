import React from 'react';
import styled from 'styled-components';

//Components
import Button from '../../../components/buttons/button';

//Images
import logo from '../../../images/logo/almanaque.svg';
import iconFacebook from '../../../images/icons/onboarding/iconFacebook.svg';
import iconGoogle from '../../../images/icons/onboarding/iconGoogle.svg';

const Container = styled.div`
  padding: 1.875rem 1rem 1rem;
  min-height: 100vh;
  background: #F3F3F3;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Img = styled.img`
  flex: 4;
  width: min-content;
`;

const Content = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

const Home = (props) => {
  const handleClick = (type) => {
    props.history.push({ pathname: `/${type}` });
  }

  return (
    <Container>
      {/* <Title>Almanaque Miguel Burnier</Title> */}
      <Img src={logo} alt='logo' />
      <Content>
        <Button
          handleClick={() => handleClick('createAccount')}
        >
          inscreva-se
        </Button>
        <Button
          backgroundDisabled='#ccc'
          background='#FFFFFF'
          boxShadow='#EFE2E2 0px 7px 0px'
          disabled={true}
          isIcon
          icon={iconGoogle}
        >
          continuar com o google
        </Button>
        <Button
          backgroundDisabled='#ccc'
          color='#fff' background='#3C5A9A'
          boxShadow='#153372 0px 7px 0px'
          disabled={true}
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
      </Content>
    </Container>
  );
}

export default Home;