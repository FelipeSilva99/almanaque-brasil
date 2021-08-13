import React, { useState } from 'react';
import styled from 'styled-components';
import { Auth } from 'aws-amplify';

//Components
import Header from '../../../components/header/headerOnb';
import Form from '../../../components/form';

//Styles
const Container = styled.div`
  padding: 1rem;
  min-height: 100vh;
  background: #F3F3F3;
`;

const ResetPassword = (props) => {
  const steps = [
    { name: 'email', value: 1 },
    { name: 'password', value: 2 },
  ];
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [register, setRegister] = useState({ email: '', password: '' });
  const [isError, setIsError] = useState({ email: '', password: '' });
  const [isViewPassword, setIsViewPassword] = useState({});

  const handleCheckEmail = async (email) => {
    console.log('verificar email');

    try {
      // const { user } = await Auth.signUp({
      //   email,
      //   attributes: {
      //     email,
      //   },
      // });
      return setCurrentStep(steps[currentStep.value]);
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleNewPassword = async (password) => {
    console.log('handleNewPassword');

    try {
      // const { user } = await Auth.signUp({
      //   email,
      //   attributes: {
      //     email,
      //   },
      // });
      // return setCurrentStep(steps[currentStep.value]);
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleGoBack = () => {
    props.history.goBack()
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

    setIsViewPassword(!isViewPassword);
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const { email, password } = register;
    const pageName = currentStep.name;

    const isEmailValid = !!email;
    const isPageEmailValid = pageName === 'email' && isEmailValid;

    const isPasswordValid = !!password && password.length >= 6;
    const isPagePasswordValid = pageName === 'password' && isPasswordValid;

    const isPageValid = isPageEmailValid || isPagePasswordValid;
    console.log('olá', !!password);
    console.log('isPageEmailValid', isPageEmailValid);

    console.log('register', register);


    if (isPageValid) {
      // if (currentStep.value < steps.length) {
      //   return setCurrentStep(steps[currentStep.value]);
      // }
      if (pageName === 'email') {
        handleCheckEmail();
      } else {
        handleNewPassword();
      }
    } else {
      setIsError({
        [pageName]: true,
        msg: isError,
      });
    }
  }

  const RenderValidateEmail = () => {
    return (
      <Form
        label='Vamos te ajudar a redefinir sua senha'
        subtitle='Digite um e-mail abaixo para redefinir sua senha.'
        name='email'
        value={register?.email}
        type='email'
        placeholder='Digite o e-mail de redefinição aqui'
        handleChange={handleChangeSelect}
        isError={isError?.kinship && 'Por favor, Selecione uma opção'}
        children='enviar email de redefinição'
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
        type={isViewPassword ? 'password' : 'text'}
        value={register?.password}
        placeholder='Digite sua nova senha aqui'
        isError={isError?.password && 'Sua senha deve conter 6 caracteres'}
        handleChange={handleChange}
        isViewPassword={isViewPassword}
        handleViewPassword={handleViewPassword}
        handleSubmit={handleSubmit}
      />
    );
  }

  const renderByStep = () => {
    switch (currentStep.name) {
      case steps[0].name: return <RenderValidateEmail />
      case steps[1].name: return <RenderNewPassword />
      default: return <RenderValidateEmail />
    }
  }

  return (
    <Container>
      <Header text='Redefinir senha' onClick={handleGoBack} />
      {renderByStep()}
    </Container>
  );
}

export default ResetPassword;