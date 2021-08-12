import React, { useState } from 'react';
import styled from 'styled-components';
import { Auth } from 'aws-amplify';
import { useHistory } from 'react-router';

//Components
import Form from '../../../components/form'
import Header from '../../../components/header/headerOnb';
import Button from '../../../components/buttons/button';


//Styles
const Container = styled.div`
  padding: 1.875rem 1rem 1rem;
  min-height: 100vh;
  background: #F3F3F3;
`;

const TextDiv = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  color: #373737;
  font-weight: bold;
  cursor: pointer;
`;

const ButtonSpacer = styled.div`
  margin-top: 2rem;
  width: 100%;
`;

const Login = (props) => {
  const [register, setRegister] = useState(
    {
      email: '',
      password: ''
    }
  )

  const [error, setError] = useState('')

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    signIn() 
  }

  async function signIn() {

    try {
        const user = await Auth.signIn(register.email, register.password);
        console.log(user)
        props.history.push('/dashboard')
    } catch (error) {
      if(error.code === "NotAuthorizedException") setError("O e-mail ou senha inseridos estão incorretos.")
    }
  }


  return (
    <Container>
      <Header text="Login" />
      <Form
        login
        handleLogin={handleLogin}
        handleChange={handleChange}
        emailValue={register.email}
        passValue={register.password}
        isError={error}
        pass
      />
    </Container>
  );
}

export default Login;