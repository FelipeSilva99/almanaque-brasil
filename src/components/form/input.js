import React from 'react';
import styled from 'styled-components';

// Styles
const Content = styled.div`
  width: 100%;
  height: 2.75rem;
  border-radius: 8px;
  background: #fff;
  font-weight: 900;
  display: flex;
  justify-content: space-between;
  
  ::placeholder{
    color: #B9B9B9;
    font-weight: normal;
  }
`;

const Input = styled.input`
  padding: 0 1rem;
  width: 100%;
  font-size: 1rem;
  color: #373737;
  background: #fff;
  font-weight: 900;
  border-radius: 8px;
  
  ::placeholder{
    color: #B9B9B9;
    font-weight: normal;
  }
`;

const ContentInput = ({
  name,
  value,
  placeholder,
  type,
  handleChange, 
  autoFocus,
  handleFocus
}) => {
  const isCodeScreen = name === 'code'
  return (
    <Content code={isCodeScreen}>
      <Input
        required
        name={name}
        value={value}
        type={type}
        placeholder={placeholder || 'Digite aqui...'}
        autoFocus={autoFocus !== undefined ? autoFocus : true}
        onChange={handleChange}
        onFocus={handleFocus}
        maxLength={isCodeScreen && 6}
      />
    </Content>
  );
}

export default ContentInput;
