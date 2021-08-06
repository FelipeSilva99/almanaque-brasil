import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

//Components
import ProgressBar from '../../../components/progressBar';
import CheckBox from '../../../components/form/checkBox';
import Header from '../../../components/header/headerOnb';
import Form from '../../../components/form';
import Button from '../../../components/buttons/button';

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
  min-height: 50vh;
  
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
  padding-top: 3rem;
  text-align: center;
`;

const CreateAccount = (props) => {
  const steps = [
    { name: 'email', value: 1 }, { name: 'password', value: 2 },
    { name: 'username', value: 3 }, { name: 'questionKinship', value: 4 }
  ];
  const [termsAccepted, setTermsAccpted] = useState(false)
  const [attention, setAttention] = useState(undefined)
  const [lastScreen, setLastScreen] = useState(false)
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [register, setRegister] = useState({ email: '', password: '', username: ''});
  const [isError, setIsError] = useState({ email: '', password: '', username: ''});
  const [isViewPassword, setIsViewPassword] = useState({});

  useEffect(() => {
    if(termsAccepted) setAttention(undefined)
  }, [termsAccepted])

  const handleGoBack = () => {
    setCurrentStep(steps[currentStep.value -1])
    // if (currentStep.value <= steps.length) setCurrentStep(steps[currentStep.value -1])
    // setCurrentStep(steps[currentStep.value - 1 ]);
  }

  const handleChange = (ev) => {
    ev.preventDefault();

    setRegister({
      ...register,
      [ev.target.name]: ev.target.value,
    });

    setIsError({
      [currentStep.name]: false,
    });
  }

  const handleViewPassword = (ev) => {
    ev.preventDefault();

    setIsViewPassword(!isViewPassword);
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const isEmailValid = !!register?.email;
    const isPasswordValid = !!register?.password && register?.password.length >= 6;
    const isNameValid = !!register?.username && register?.username.length >= 3;
    const isNextScreen = (currentStep.name === 'email' && isEmailValid) || (currentStep.name === 'password' && isPasswordValid) || (currentStep.name === 'username'  && isNameValid);

    if (lastScreen)  {
      if(!termsAccepted) setAttention(true)
      else handleFinish()
    }
    if(isNextScreen) {
      if (currentStep.value < steps.length) {
        if(isEmailValid && isPasswordValid && isNameValid) {
          console.log('fazer post na aqui');
        }
        return setCurrentStep(steps[currentStep.value]);
      }
      
    } else {
      setIsError({
        [currentStep.name]: true,
      });
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
        type='password'
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
    setLastScreen(true)
    return (
      <>
        <Form
          label='Você possui parentesco com alguém da GERDAU?'
          name='kinship'
          value={register?.kinship}
          placeholder='Digite seu name aqui'
          handleChange={handleChange}
          selector
          lastScreen='Finalizar'
        />
        <CheckBox
          isSelected={termsAccepted}
          onClick={handleAceptTerms}
          attetion={attention}/>
      </>
    );
  }

  const handleAceptTerms = () => {
    setTermsAccpted(!termsAccepted)
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
      <Header text='Cadastro' handleGoBack={handleGoBack}/>
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