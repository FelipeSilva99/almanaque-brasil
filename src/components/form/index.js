/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';

//Component
import Input from './input';


// Styles
const Container = styled.form`
  flex: 2;
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

const Form = ({
  label,
  subtitle,
  name,
  value,
  placeholder,
  type,
  handleChange
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Subtitle>{subtitle}</Subtitle>
      <Input
        name={name}
        value={value}
        placeholder={placeholder}
        type={type}
        handleChange={handleChange}
      />
    </Container>
  );
}

export default Form;