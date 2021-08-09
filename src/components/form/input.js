/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from 'styled-components';

//Images
import eye from '../../images/icons/onboarding/eye.svg';
import eyeBlocked from '../../images/icons/onboarding/eyeBlocked.svg';

// Styles
const Content = styled.div`
  margin: 1rem 0;
  padding: 0 1rem;
  width: 100%;
  max-width: 425px;
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
  width: 100%;
  font-size: 1rem;
  color: #373737;
  background: #fff;
  font-weight: 900;
  
  ::placeholder{
    color: #B9B9B9;
    font-weight: normal;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
`;


const ContentInput = ({
  name,
  value,
  placeholder,
  type,
  handleChange, 
  isViewPassword,
  handleViewPassword
}) => {
  return (
    <Content>
      <Input
        required
        name={name}
        value={value}
        type={type}
        placeholder={placeholder || 'Digite aqui...'}
        autoFocus={true}
        onChange={handleChange}
      />
      {name === 'password' && (
        <Button onClick={handleViewPassword}>
          <img src={isViewPassword ? eye : eyeBlocked} alt='visualizar senha' />
        </Button> 
      )}
    </Content>
  );
}

export default ContentInput;
