import React, { useState } from 'react';
import styled from 'styled-components';
import { Auth } from 'aws-amplify';

//Components
import Header from '../../../components/header';
import Form from '../../../components/form';

//Styles
const Container = styled.div`
  padding: 1rem;
  min-height: 100vh;
  background: #F3F3F3;
`;

const Info = styled.p`
  margin: 3rem auto;
  padding: 0.5rem;
  width: fit-content;
  background: #ccc;
  border-radius: 8rem;
  animation: .3s fadeIn ease-in-out;
	opacity: 0;

  ${({ isSuccessNewPassword }) => isSuccessNewPassword && `
    margin: 1rem auto;
    -webkit-transition: .1s ease-in-out;
    transition: .4s ease-in-out;
    opacity: 1
  `}
`;

const ResetPassword = (props) => {
  const steps = [
    { name: 'email', value: 1 },
    { name: 'code', value: 2 },
    { name: 'password', value: 3 },
  ];
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [register, setRegister] = useState({ email: '', password: '', code: ''});
  const [isError, setIsError] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isSuccessNewPassword, setIsSuccessNewPassword] = useState(false);

  const handleCheckEmail = async (email) => {
    Auth.forgotPassword(email)
      .then(data => console.log('data', data))
      .catch(err => {
        if(err.message === "Username/client id combination not found.") {
          props.history.push({
            pathname: `/cadastro`,
            state: { email: register?.email }
          });
        }
        console.log('error', err);
      });
  }

  const handleNewPassword = async (email, code, password) => {
    Auth.forgotPasswordSubmit(email, code, password)
      .then(data => {
        setIsSuccessNewPassword(true);
        setTimeout(() => {
          props.history.push({ pathname: `/` });
        }, 2000);
      })
      .catch(err => {
        if (err.code === "CodeMismatchException") {
          setCurrentStep({ name: 'code', value: 2 });
          setIsError({
            code: true,
            msg: 'Código de verificação inválido, tente novamente.'
          });
        }
        console.log('err', err);
      });
  }

  const handleGoBack = () => {
    if (currentStep.value > 1) {
      setCurrentStep(steps[currentStep.value - 2]);
    } else {
      props.history.goBack();
    }
  }

  const handleIsError = (name) => {
    setIsError({
      [name]: false,
    });
  }

  const handleChange = (ev) => {
    ev.preventDefault();
    const value = ev.target.value;
    const name = ev.target.name;

    setRegister({
      ...register,
      [name]: value,
    });

    handleIsError(currentStep.name);
  }

  const handleChangeSelect = (ev) => {
    const target = ev?.target;

    setRegister({
      ...register,
      [target.name]: target.value,
    });

    handleIsError(currentStep.name);
  }

  const handleViewPassword = (ev) => {
    ev.preventDefault();

    setShowPassword(!showPassword);
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const { email, code, password } = register;
    const pageName = currentStep.name;

    const isEmailValid = !!email;
    const isPageEmailValid = pageName === 'email' && isEmailValid;

    const isCodeValid = !!code;
    const isPageCodeValid = pageName === 'code' && isCodeValid;

    const isPasswordValid = !!password && password.length >= 6;
    const isPagePasswordValid = pageName === 'password' && isPasswordValid;

    const isPageValid = isPageEmailValid || isPageCodeValid || isPagePasswordValid;

    if (isPageValid) {
      if (pageName === 'email') {
        handleCheckEmail(email);
      }
      if (pageName === 'password') {
        handleNewPassword(email, code, password);
        return null;
      }

      return setCurrentStep(steps[currentStep.value]);
    } else {
      setIsError({
        [pageName]: true,
        msg: isError,
      });
    }
  }

  const RenderEmail = () => {
    return (
      <Form
        label='Vamos te ajudar a redefinir sua senha'
        subtitle='Digite um e-mail abaixo para redefinir sua senha.'
        name='email'
        value={register?.email}
        type='email'
        placeholder='Digite o e-mail de redefinição aqui'
        handleChange={handleChangeSelect}
        children='enviar email de redefinição'
        handleSubmit={handleSubmit}
      />
    );
  }

  const RenderCode = () => {
    return (
      <Form
        label='Verifique seu e-mail'
        subtitle='Digite abaixo o código que você recebeu por e-mail.'
        name='code'
        value={register?.code}
        placeholder='Digite o código aqui'
        maxLength='6'
        isError={isError?.code && isError?.msg}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    );
  }

  const RenderNewPassword = () => {
    return (
      <Form
        label='Nova senha'
        subtitle='Digite abaixo sua nova senha'
        name='password'
        type={showPassword ? 'text' : 'password'}
        value={register?.password}
        placeholder='Digite sua nova senha aqui'
        isError={isError?.password && 'Sua senha deve conter no mínimo 6 caracteres'}
        handleChange={handleChange}
        showPassword={showPassword}
        handleViewPassword={handleViewPassword}
        handleSubmit={handleSubmit}
      />
    );
  }

  const renderByStep = () => {
    switch (currentStep.name) {
      case steps[0].name: return <RenderEmail />
      case steps[1].name: return <RenderCode />
      case steps[2].name: return <RenderNewPassword />
      default: return <RenderEmail />
    }
  }

  return (
    <Container>
      <Header title='Redefinir senha' noPadding goBack={handleGoBack} />
      {renderByStep()}
      <Info isSuccessNewPassword={isSuccessNewPassword}>{isSuccessNewPassword && 'Senha redefinida com sucesso!'}</Info>
    </Container>
  );
}

export default ResetPassword;
