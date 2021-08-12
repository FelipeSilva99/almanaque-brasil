import React, { useState } from 'react';
import styled from 'styled-components';
import { Auth } from 'aws-amplify';

//Components
import ProgressBar from '../../../components/progressBar';
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

const CreateAccount = (props) => {
  const steps = [
    { name: 'email', value: 1 },
    { name: 'password', value: 2 },
    { name: 'username', value: 3 },
    { name: 'kinship', value: 4 }
  ];
  const [isTermsAccepted, setTermsAccpted] = useState(false);
  const [attention, setAttention] = useState(undefined);
  const [lastScreen, setLastScreen] = useState(false);
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
      setAttention(false);
      console.log('error signing up:', error);
    }
  }

  const handleGoBack = () => {
    if (currentStep.value > 1) {
      setCurrentStep(steps[currentStep.value - 2]);
      setLastScreen(false);
    } else {
      props.history.goBack()
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

  const handleAceptTerms = () => {
    !isTermsAccepted  && setAttention(false);
    handleIsError('kinship');
    setTermsAccpted(!isTermsAccepted);
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const { email, password, username, kinship } = register;
    const pageName = currentStep.name;

    const isEmailValid = !!email;
    const isPageEmailValid = pageName === 'email' && isEmailValid;

    const isPasswordValid = !!password && password.length >= 6;
    const isPagePasswordValid = pageName === 'password' && isPasswordValid;

    const isNameValid = !!username && username.length >= 3;
    const isPageNameValid = pageName === 'username' && isNameValid;

    const isKinshipValid = !!kinship;
    const isPageKinshipValid = isKinshipValid && isTermsAccepted;

    const isPageValid = isPageEmailValid || isPagePasswordValid || isPageNameValid || isPageKinshipValid;

    if (isPageValid) {
      if (currentStep.value < steps.length) {
        return setCurrentStep(steps[currentStep.value]);
      } else {
        signUp(username, password, email, kinship);
      }
    } else {
      const isNameError = pageName === 'username' && 'O nome deve pelo menos 3 caracteres';
      const isEmailError = pageName === 'email' && 'Esse e-mail já existe';
      const isError = isNameError || isEmailError;

      if(lastScreen) {
        isTermsAccepted === false ? setAttention(true) : setAttention(false)
        isKinshipValid ? setIsError({[pageName]: false}) : setIsError({[pageName]: true})
      } else {
        setIsError({
          [pageName]: true,
          msg: isError,
        });
      }
    }
  }

  const RenderCreateEmail = () => {
    return (
      <Form
        label='Digite seu e-mail'
        subtitle='Digite um e-mail que irá ser usado para acessar a sua conta'
        name='email'
        type='email'
        value={register?.email}
        placeholder='Digite seu e-mail aqui'
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    );
  }

  const RenderCreatePassword = () => {
    return (
      <Form
        label='Crie sua senha'
        subtitle='Crie uma senha fácil de lembrar para poder acessar sua conta'
        name='password'
        type={isViewPassword ? 'password' : 'text'}
        value={register?.password}
        placeholder='Digite a senha aqui'
        isError={isError?.password && 'Sua senha deve conter 6 caracteres'}
        handleChange={handleChange}
        isViewPassword={isViewPassword}
        handleViewPassword={handleViewPassword}
        handleSubmit={handleSubmit}
      />
    );
  }

  const RenderUserName = () => {
    return (
      <Form
        label='Qual é o seu nome?'
        subtitle='Gostariamos de saber o seu nome.'
        name='username'
        value={register?.username}
        placeholder='Digite seu name aqui'
        isError={isError.username && isError.msg}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    );
  }

  const RenderQuestionKinship = () => {
    setLastScreen(true);
    console.log('error', isError);
    return (
      <Form
        label='Você possui parentesco com alguém da GERDAU?'
        name='kinship'
        value={register?.kinship}
        placeholder='Digite seu name aqui'
        handleChange={handleChangeSelect}
        selector
        children='Finalizar'
        isError={isError?.kinship && 'Por favor, Selecione uma opção'}
        handleSubmit={handleSubmit}
        isTermsAccepted={isTermsAccepted}
        handleAceptTerms={handleAceptTerms}
        attention={attention} />
    );
  }

  const renderByStep = () => {
    switch (currentStep.name) {
      case steps[0].name: return <RenderCreateEmail />
      case steps[1].name: return <RenderCreatePassword />
      case steps[2].name: return <RenderUserName />
      case steps[3].name: return <RenderQuestionKinship />
      default: return <renderCreateEmail />
    }
  }

  return (
    <Container>
      <Header text='Cadastro' onClick={handleGoBack} />
      <Content>
        <div>
          <ProgressBar currentStep={currentStep.value} steps={steps.length} />
          {renderByStep()}
        </div>
        <ButtonAndAlertBox>
          {attention && (
            <AttentionText>Você deve marcar que concorda com os termos para seguir</AttentionText>
          )}
        </ButtonAndAlertBox>
      </Content>
    </Container>
  );
}

export default CreateAccount;