import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { Auth } from 'aws-amplify';

//Components
import Header from '../../../components/header/headerOnb';
import Button from '../../../components/buttons/button';

// Styles
const Container = styled.div`
  padding: 1rem;
  width: 100vw;
  height: 100vh;
  background: #F3F3F3;
`;

const Content = styled.div`
  height: calc(100% - 30px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  padding: 2rem 0 0.5rem 0;
  font-size: 1.5rem;
  font-weight: 900;
  color: #373737;
  text-align: center;
`;

const Text = styled.p`
  padding-bottom: 1rem;
  width: 20rem;
  font-size: 1rem;
  color: #373737;
  text-align: center;
`;

const Error = styled.p`
  font-size: .85rem;
  color: #FF3333;
`;

const AccountCreated = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setUsername(history?.location?.state?.username);
  }, []);

  const goHome = () => {
    history.push("/");
  }

  async function resendConfirmationCode() {
    try {
      await Auth.resendSignUp(username);
      console.log('success resending code:');
    } catch (err) {
      setIsError({isError: true, msg: err.message});
      console.log('error resending code: ', err);
    }
  }

  return (
    <Container>
      <Header onClick={goHome} text='Verificar e-mail' />
      <Content>
        <Title>Verifique seu e-mail</Title>
        <Text>Enviamos uma mensagem de confirmação para o seu e-mail cadastrado.</Text>
        <Button margin='1rem' handleClick={resendConfirmationCode}>reenviar</Button>
        {isError && <Error>{isError.msg ? isError.msg : 'Erro ao reenviar'}</Error>}
      </Content>
    </Container>
  );
}

export default AccountCreated;
