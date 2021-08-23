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
    { name: 'nickname', value: 4 },
    { name: 'kinship', value: 5 }
  ];
  const [isTermsAccepted, setTermsAccpted] = useState(false);
  const [attention, setAttention] = useState(undefined);
  const [lastScreen, setLastScreen] = useState(false);
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [register, setRegister] = useState({ email: '', password: '', username: '', nickname: '', });
  const [isError, setIsError] = useState({ email: '', password: '', username: '', kinship: undefined });
  const [showPassword, setShowPassword] = useState(false);

  const goToAccountCreatedScreen = () => {
    props.history.push({
      pathname: `/accountCreated`,
      state: { nickname: register.nickname }
    });
  }

  const signUp = async (name, nickname, password, email, kinship, isTermsAccepted) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const { user } = await Auth.signUp({
        password,
        username: nickname,
        attributes: {
          email,
          name,
        },
        custom: {
          isGerdauRelated: kinship,
          agreeTermsOfUse: isTermsAccepted,
        },
      });
      goToAccountCreatedScreen();
    } catch (error) {
      if (error.message === "An account with the given email already exists.") {
        setCurrentStep({ name: 'email', value: 1 });
        setIsError({ email: true, msg: 'Já existe uma conta com o e-mail fornecido.' });
      }

      if (error.code === "UsernameExistsException") {
        setCurrentStep({ name: 'nickname', value: 4 });
        setIsError({ nickname: true, msg: 'Esse apelido já existe' });
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

    setShowPassword(!showPassword);
  }

  const handleAceptTerms = () => {
    !isTermsAccepted  && setAttention(false);
    handleIsError('kinship');
    setTermsAccpted(!isTermsAccepted);
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const { email, password, username, nickname, kinship } = register;
    const pageName = currentStep.name;

    const isEmailValid = !!email;
    const isPageEmailValid = pageName === 'email' && isEmailValid;

    const isPasswordValid = !!password && password.length >= 6;
    const isPagePasswordValid = pageName === 'password' && isPasswordValid;

    const isNameValid = !!username && username.length >= 3;
    const isPageNameValid = pageName === 'username' && isNameValid;

    const isKinshipValid = !!kinship;
    const isPageKinshipValid = isKinshipValid && isTermsAccepted;

    const isPageNickNameValid = pageName === 'nickname' && nickname.length >= 3;

    const isPageValid = isPageEmailValid || isPagePasswordValid || isPageNameValid || isPageNickNameValid ||  isPageKinshipValid;
    if (isPageValid) {
      if (currentStep.value < steps.length) {
        return setCurrentStep(steps[currentStep.value]);
      } else {
        signUp(username, nickname, password, email, kinship, isTermsAccepted);
      }
    } else {
      const isNameError = (pageName === 'username' || pageName === 'nickname') && 'O nome deve ter pelo menos 3 caracteres';
      const isEmailError = pageName === 'email' && 'Esse e-mail já existe';
      const isError = isNameError || isEmailError;
      console.log('false');

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
        isError={isError?.email && isError?.msg}
      />
    );
  }

  const RenderCreatePassword = () => {
    return (
      <Form
        label='Crie sua senha'
        subtitle='Crie uma senha fácil de lembrar para poder acessar sua conta'
        name='password'
        type={showPassword ? 'text' : 'password'}
        value={register?.password}
        placeholder='Digite a senha aqui'
        isError={isError?.password && 'Sua senha deve conter 6 caracteres'}
        handleChange={handleChange}
        showPassword={showPassword}
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
        placeholder='Digite seu nome aqui'
        isError={isError.username && isError.msg}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    );
  }

  const RenderNickName = () => {
    return (
      <Form
        label='Qual é o seu apelido?'
        subtitle='Digite um apelido'
        name='nickname'
        value={register?.nickname}
        placeholder='Digite seu apelido aqui'
        isError={isError.nickname && isError.msg}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    );
  }

  const RenderQuestionKinship = () => {
    setLastScreen(true);
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
      case steps[3].name: return <RenderNickName />
      case steps[4].name: return <RenderQuestionKinship />
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