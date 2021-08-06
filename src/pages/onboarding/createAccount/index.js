import React, { useState } from 'react';
import styled from 'styled-components';

//Components
import ProgressBar from '../../../components/progressBar'

//Styles
//Component
import Header from '../../../components/header/headerOnb';
import Form from '../../../components/form';

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
`;

const CreateAccount = (props) => {
  const steps = [
    { name: 'email', value: 1 }, { name: 'password', value: 2 },
    { name: 'username', value: 3 }, { name: 'questionKinship', value: 4 }
  ];
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [register, setRegister] = useState({ email: '', password: '', username: ''});
  const [isError, setIsError] = useState({ email: '', password: '', username: ''});

  const [isViewPassword, setIsViewPassword] = useState({});

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
    return (
      <h2>Você tem algum parentesco...?</h2>
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
      <Header text='Cadastro' handleGoBack={handleGoBack}/>
      <ProgressBar currentStep={currentStep.value} steps={steps.length} />
      <Content>
        {renderByStep()}
      </Content>
      {/* <Button handleClick={handleSubmit}>Próximo</Button> */}
    </Container>
  );
}

export default CreateAccount;