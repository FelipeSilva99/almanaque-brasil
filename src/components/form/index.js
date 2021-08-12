import React from 'react';
import styled from 'styled-components';

//Component
import Input from './input';
import Button from '../buttons/button';
import Select from './contentSelect';

// Styles
const Container = styled.form`
  margin: auto;
  width: 100%;
  max-width: 425px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Label = styled.label`
  text-align: center;
  padding: 2rem 0 0;
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
  padding-bottom: 1rem;
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
  selector,
  lastScreen,
  handleChange,
  isViewPassword,
  handleViewPassword,
  handleSubmit,
  isTermsAccepted,
  handleAceptTerms,
  attention,
}) => {
  return (
    <Container onSubmit={handleSubmit}>
      <Label>{label}</Label>
      <Subtitle>{subtitle}</Subtitle>
      {selector ? (
        <Select
          value={value}
          name={name}
          handleChange={handleChange}
          isTermsAccepted={isTermsAccepted}
          handleAceptTerms={handleAceptTerms}
          attention={attention}
          isError={isError}
        />
      ) : (
        <>
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
        </>
      )}
      <Button>{lastScreen ? 'Finalizar' : 'Próximo'}</Button>
    </Container>
  );
}

export default Form;