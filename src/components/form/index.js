/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';

//Component
import Input from './input';
import Select from './select';

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



const Form = ({
  label,
  subtitle,
  name,
  value,
  placeholder,
  type,
  handleChange,
  selector
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Subtitle>{subtitle}</Subtitle>
      {selector ? (
          <Select value={value} name={name} handleChange={handleChange}/>
        ) : (
          <Input
            name={name}
            value={value}
            placeholder={placeholder}
            type={type}
            handleChange={handleChange}
          />
        )}
    </Container>
  );
}

export default Form;