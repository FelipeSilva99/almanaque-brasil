import React, { useState } from 'react';
import styled from 'styled-components';

//Components
import ProgressBar from '../../../components/progressBar'

//Styles
//Component
import Header from '../../../components/header/headerOnb';
import Form from '../../../components/form';
import Button from '../../../components/buttons/button';

const Container = styled.div`
  padding: 1rem;
  min-height: 100vh;
  background: #F3F3F3;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-top: 5vh;
  @media (max-height: 600px) {
    height: calc(95vh - 2rem );
  }
`;

const CreateAccount = (props) => {
  const steps = [
    { name: 'email', value: 1 }, { name: 'password', value: 2 },
    { name: 'username', value: 3 }, { name: 'questionKinship', value: 4 }
  ];
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [register, setRegister] = useState({ email: '' });


  const RenderCreateEmail = () => {
    return (
      <Form
        label='Digite seu e-mail'
        subtitle='Digite um e-mail que irá ser usado para acessar a sua conta'
        name='email'
        value={register.email}
        placeholder='Digite seu e-mail aqui'
        handleChange={handleChange}
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
        value={register.password}
        placeholder='Digite a senha aqui'
        handleChange={handleChange}
      />
    );
  }

  const RenderUserName = () => {
    return (
      <Form
        label='Qual é o seu nome?'
        subtitle='Gostariamos de saber o seu nome.'
        name='name'
        value={register.name}
        placeholder='Digite seu name aqui'
        handleChange={handleChange}
      />
    );
  }

  const RenderQuestionKinship = () => {
    return (
      <Form
        label='Você possui parentesco com alguém da GERDAU?'
        name='kinship'
        value={register.kinship}
        placeholder='Digite seu name aqui'
        handleChange={handleChange}
        selector
      />
    );
  }

  const handleChange = (ev) => {
    console.log(ev);
    setRegister({
      ...register,
      [ev.target.name]: ev.target.value,
    });
  }

  const handleSelect = (value) => {
    console.log("value", value)
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

  const handleNext = () => {
    if (currentStep.value < steps.length) return setCurrentStep(steps[currentStep.value])
  }

  return (
    <Container>
      <Header text='Cadastro' />
      <Content>
        <div>
          <ProgressBar currentStep={currentStep.value} steps={steps.length} />
          {renderByStep()}
        </div>
        <Button handleClick={handleNext}>Próximo</Button>
      </Content>
    </Container>
  );
}

export default CreateAccount;