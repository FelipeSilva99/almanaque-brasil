import React, { useEffect, useState } from 'react';
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
  /* min-height: 50vh; */
  
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
  /* padding-top: 3rem; */
  text-align: center;
`;

const CreateAccount = (props) => {
  const steps = [
    { name: 'email', value: 1 }, { name: 'password', value: 2 },
    { name: 'username', value: 3 }, { name: 'kinship', value: 4 }
  ];
  const [isTermsAccepted, setTermsAccpted] = useState(false);
  const [attention, setAttention] = useState(undefined);
  const [lastScreen, setLastScreen] = useState(false);
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [register, setRegister] = useState({ email: '', password: '', username: '',  });
  const [isError, setIsError] = useState({ email: '', password: '', username: '', kinship: false });
  const [isViewPassword, setIsViewPassword] = useState({});

  const goToAccountCreatedScreen = () => {
    props.history.push({
      pathname: `/accountCreated`,
    });
  }

  const signUp = async (username, password, email, kinship) => {
    console.log(username, password, email, kinship);
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
      console.log('error signing up:', error);
    }
  }

  const handleGoBack = () => {
    setCurrentStep(steps[currentStep.value - 1])
    // if (currentStep.value <= steps.length) setCurrentStep(steps[currentStep.value -1])
    // setCurrentStep(steps[currentStep.value - 1 ]);
  }

  const handleIsError = (name) => {
    setIsError({
      [name]: false,
    });
  }
  
  const handleChange = (ev) => {
    ev.preventDefault();

    setRegister({
      ...register,
      [ev.target.name]: ev.target.value,
    });

    handleIsError(currentStep.name);
    // setIsError({
    //   [currentStep.name]: false,
    // });
  }

  const handleChangeSelect = (ev) => {
    const target = ev?.target;

    setRegister({
      ...register,
      [target.name]: target.value,
    });

    handleIsError(currentStep.name);


    // setIsError({
    //   [target.name]: false,
    // });
  }

  const handleViewPassword = (ev) => {
    ev.preventDefault();

    setIsViewPassword(!isViewPassword);
  }

  const handleAceptTerms = () => {
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

    if(isPageValid) {
      if (currentStep.value < steps.length) {
        return setCurrentStep(steps[currentStep.value]);
      } else {
        signUp(username, password, email, kinship);
      }
    } else {
      lastScreen && isTermsAccepted === false ? setAttention(true) : setAttention(false);
      setIsError({
        [pageName]: true,
      });
    }


    // if (isNextScreen) {
      // return setCurrentStep(steps[currentStep.value]);
    // 
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
        isError={isError.username && 'O nome deve pelo menos 3 caracteres'}
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
        lastScreen='Finalizar'
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

  const handleFinish = () => {
    alert('Última tela')
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
          {/* <Button handleClick={handleNext}>
            {lastScreen ? "Finalizar" : "Próximo"}
          </Button> */}
          {attention && (
            <AttentionText>Você deve marcar que concorda com os termos para seguir</AttentionText>
          )}
        </ButtonAndAlertBox>
      </Content>
    </Container>
  );
}

export default CreateAccount;