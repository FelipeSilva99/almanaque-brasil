/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';

//Component
import Input from './input';
import Button from '../buttons/button';

// Styles
const Container = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Label = styled.label`
  padding: .5rem 0;
  font-size: 1.5rem;
  font-weight: 900;
  color: #373737;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #373737;
  text-align: center;
`;

const Error = styled.p`
  padding-left: 1rem;
  font-size: .75rem;
  color: #FF3333;
  align-self: self-end;
`;

const Form = ({
  label,
  subtitle,
  name,
  value,
  placeholder,
  type,
  isError,
  handleChange,
  isViewPassword,
  handleViewPassword,
  handleSubmit
}) => {
  return (
    <Container onSubmit={handleSubmit}>
      <Label>{label}</Label>
      <Subtitle>{subtitle}</Subtitle>
      <Input
        name={name}
        value={value}
        placeholder={placeholder}
        type={type}
        handleChange={handleChange}
        isViewPassword={isViewPassword}
        handleViewPassword={handleViewPassword}
      />
      <Error>{isError}</Error>
      <Button>Próximo</Button>
    </Container>
  );
}

export default Form;