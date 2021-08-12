import React, { useState } from 'react';
import styled from 'styled-components';
import { Auth } from 'aws-amplify';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';

//Components
import Form from '../../../components/form'
import Header from '../../../components/header/headerOnb';
import Button from '../../../components/buttons/button';

import { signIn } from '../../../dataflow/modules/signIn-modules'

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

const mapDispatchToProps = dispatch => {
	return {
		signIn: (info) => dispatch(signIn(info))
	}
};

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
    handleSignIn() 
  }

  async function handleSignIn() {
		// Auth.signIn(register.email, register.password)
		// 	.then(user => {
		// 		props.signIn(user)
		// 	})
		// 	.then(user => {
		// 		props.history.push('/dashboard')
		// 	})
		// 	.catch(err => {
		// 		if(error.code === "NotAuthorizedException") setError("O e-mail ou senha inseridos estão incorretos.")
		// 	})

			try {
				const user = await Auth.signIn(register.email, register.password)
				props.signIn(user)
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

export default connect(
	null,
	mapDispatchToProps
)(Login);