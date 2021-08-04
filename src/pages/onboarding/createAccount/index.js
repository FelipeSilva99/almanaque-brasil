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
  /* height: 90vh; */
  flex: 1;
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
      <h2>Você tem algum parentesco...?</h2>
    );
  }

  const handleChange = (ev) => {
    console.log(ev);
    setRegister({
      ...register,
      [ev.target.name]: ev.target.value,
    });
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
    console.log(currentStep),
    <Container>
      <Header text='Cadastro' />
      <ProgressBar currentStep={currentStep.value} steps={steps.length} />
      <Content>
        {renderByStep()}
      </Content>
      <Button handleClick={handleNext}>Próximo</Button>
    </Container>
  );
}

export default CreateAccount;