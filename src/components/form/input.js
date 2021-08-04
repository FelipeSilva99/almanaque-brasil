/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';

// Styles
const Content = styled.input`
  margin: 1rem 0;
  padding-left: 1rem;
  width: 100%;
  height: 2.75rem;
  border-radius: 8px;
  font-size: 1rem;
  color: #373737;
  background: #fff;
  font-weight: 900;
  
  ::placeholder{
    color: #B9B9B9;
    font-weight: normal;
  }
`;


const Input = ({ name, value, placeholder, type, handleChange }) => {
  return (
    <Content
      name={name}
      value={value}
      placeholder={placeholder || 'Digite aqui...'}
      type={type || 'text'}
      autofocus='true'
      onChange={handleChange}
    />
  );
}

export default Input;