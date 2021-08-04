import React, { useState } from 'react';
import styled from 'styled-components';

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

const CreateEmail = (props) => {
  const [register, setRegister] = useState({email: ''});

  const handleChange = (ev) => {
    console.log(ev);
    setRegister({
      ...register,
      [ev.target.name]: ev.target.value,
    });
  }

  const handleClick = () => {
    console.log('oi');
  }

  return (
    <Container>
      <Header text='Cadastro' />
      <Content>
        <Form
          label='Digite seu e-mail'
          subtitle='Digite um e-mail que irá ser usado para acessar a sua conta'
          name='email'
          value={register.email}
          placeholder='Digite seu e-mail aqui'
          handleChange={handleChange}
        />
        <Button width='100%' handleClick={handleClick}>Próximo</Button>
      </Content>
    </Container>
  );
}

export default CreateEmail;