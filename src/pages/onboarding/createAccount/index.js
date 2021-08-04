import React, { useState } from 'react';
import styled from 'styled-components';

//Components
import ProgressBar from '../../../components/progressBar'

//Styles
//Component
import Header from '../../../components/header/headerOnb';

const Container = styled.div`
  padding: 1rem;
  min-height: 100vh;
  background: #F3F3F3;
`;

const NextButton = styled.button`
  padding: 1rem;
  border-radius: 20px;
  background-color: gainsboro;
`;

const CreateEmail = () => {
  return (
    <h2>Criar email</h2>
  );
}

const CreatePassword = () => {
  return (
    <h2>Criar senha</h2>
  );
}

const UserName = () => {
  return (
    <h2>Nome</h2>
  );
}

const QuestionKinship = () => {
  return (
    <h2>Você tem algum parentesco...?</h2>
  );
}

const CreateAccount = (props) => {
  const steps = [
    { name:'email',value: 1 }, { name:'password',value: 2 },
    { name:'username',value:3 }, { name:'questionKinship', value: 4 }
  ];
  const [currentStep, setCurrentStep] = useState(steps[0])

  const renderByStep = () => {
    switch (currentStep.name) {
      case steps[0].name: return <CreateEmail />
      case steps[1].name: return <CreatePassword />
      case steps[2].name: return <UserName />
      case steps[3].name: return <QuestionKinship />
      default: return <CreateEmail />
    }
  }

  const handleNext = () => {
    if(currentStep.value < steps.length) return setCurrentStep(steps[currentStep.value])
  }

  return (
    console.log(currentStep),
    <Container>
      <Header text='Cadastro' />
      <ProgressBar currentStep={currentStep.value} steps={steps.length}/>
      {renderByStep()}

      {/* Depois pode apagar esse botão. Coloquei só pra simular a troca de telas */}
      <NextButton onClick={handleNext}>Próximo</NextButton>
    </Container>
  );
}

export default CreateAccount;