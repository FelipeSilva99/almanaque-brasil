import React, { useState } from 'react';
import styled from 'styled-components';
import { Auth } from 'aws-amplify';
import { connect } from 'react-redux';

//Components
import Form from '../../../components/form'
import Header from '../../../components/header/headerOnb';

//Redux
import { signIn } from '../../../dataflow/modules/signIn-modules';
import { clearActionsBook } from '../../../dataflow/modules/actionsBook-modules';

//Styles
const Container = styled.div`
  padding: 1.25rem 1rem 1rem;
  min-height: 100vh;
  background: #F3F3F3;
`;

const ResetButton = styled.button`
  /* width: 100%; */
	display: flex;
	justify-content: center;
	align-items: center;
  text-align: center;
  font-size: .75rem;
	padding: 1rem;
  color: #373737;
  font-weight: 900;
  cursor: pointer;
`;

const ButtonSpacer = styled.div`
  width: 100%;
	display: flex;
	justify-content: center;
`;

const mapDispatchToProps = dispatch => {
	return {
		signIn: (info) => dispatch(signIn(info)),
    clearActionsBook: () => dispatch(clearActionsBook())
	}
};

const Login = (props) => {
  const [register, setRegister] = useState(
    {
      email: '',
      password: ''
    }
  )
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleViewPassword = (ev) => {
    ev.stopPropagation();
console.log('aquiii');
    setShowPassword(!showPassword);
  }

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
		try {
      props.clearActionsBook()
			const user = await Auth.signIn(register.email, register.password);
      const token = user.signInUserSession.accessToken.jwtToken;
			props.signIn(user.attributes)
      localStorage.setItem('accessToken', token)
			props.history.push('/dashboard')
		} catch (error) {
      console.log('error', error);
			if(error.code === "NotAuthorizedException") setError("O e-mail ou senha inseridos estão incorretos.");
			if(error.code === "UserNotConfirmedException") {
        props.history.push({
          pathname: `/accountCreated`,
          state: { email: register.email }
        });
      };
      if(error.code === "UserNotFoundException") {
        props.history.push({
          pathname: `/createAccount`,
          state: { email: register.email }
        });
      };
		}
  }

	const resetPassword = () => {
		props.history.push('/resetPassword');
	}

  const goBack = () => {
		props.history.push('/');
	}

  return (
    <Container>
      <Header text="Login" onClick={goBack}/>
      <Form
        login
        handleLogin={handleLogin}
        handleChange={handleChange}
        emailValue={register.email}
        passValue={register.password}
        showPassword={showPassword}
        handleViewPassword={handleViewPassword}
        isError={error}
        pass
      />
			<ButtonSpacer>
				<ResetButton onClick={resetPassword}>Esqueceu a senha?</ResetButton>
			</ButtonSpacer>
    </Container>
  );
}

export default connect(
	null,
	mapDispatchToProps
)(Login);