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

const Content = styled.div`
  margin: auto;
  max-width: 425px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-top: 5vh;
  
  @media (max-height: 600px) {
    height: calc(95vh - 2rem );
  }
`;

const AttentionText = styled.p`
  margin-top: 1rem;
  font-size: .9rem;
  color: #FF3333;
`;

const ButtonAndAlertBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
`;

const ResetPassword = (props) => {
  const steps = [
    { name: 'email', value: 1 },
    { name: 'newPassword', value: 2 },
  ];
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [register, setRegister] = useState({ email: '', password: '', username: '', });
  const [isError, setIsError] = useState({ email: '', password: '', username: '', kinship: false });
  const [isViewPassword, setIsViewPassword] = useState({});

  const goToAccountCreatedScreen = () => {
    props.history.push({
      pathname: `/accountCreated`,
      state: { username: register.username }
    });
  }

  const signUp = async (username, password, email, kinship) => {
    try {
      const { user } = await Auth.signUp({
        password,
        username,
        attributes: {
          name: username,
          email,
        },
        custom: { isGerdauRelated: kinship },
      });
      goToAccountCreatedScreen();
    } catch (error) {
      if (error.code === "UsernameExistsException") {
        setCurrentStep({ name: 'username', value: 3 });
        setIsError({ username: true, msg: 'Esse nome já existe' });
      }
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
    const formattedValue = name === 'username' ? value.replace(/ /g, "") : value;

    setRegister({
      ...register,
      [name]: formattedValue,
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
    console.log('olá');
    // const { email, password, username, kinship } = register;
    // const pageName = currentStep.name;

    // const isEmailValid = !!email;
    // const isPageEmailValid = pageName === 'email' && isEmailValid;

    // const isPasswordValid = !!password && password.length >= 6;
    // const isPagePasswordValid = pageName === 'password' && isPasswordValid;

    // const isPageValid = isPageEmailValid || isPagePasswordValid;

    // if (isPageValid) {
    //   if (currentStep.value < steps.length) {
    //     return setCurrentStep(steps[currentStep.value]);
    //   } else {
    //     signUp(username, password, email, kinship);
    //   }
    // } else {
    //   const isNameError = pageName === 'username' && 'O nome deve pelo menos 3 caracteres';
    //   const isEmailError = pageName === 'email' && 'Esse e-mail já existe';
    //   const isError = isNameError || isEmailError;

    //     setIsError({
    //       [pageName]: true,
    //       msg: isError,
    //     });
    // }
  }

  const RenderValidateEmail = () => {
    return (
      <Form
        label='Vamos te ajudar a redefinir sua senha'
        subtitle='Digite um e-mail abaixo para redefinir sua senha.'
        name='kinship'
        value={register?.kinship}
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