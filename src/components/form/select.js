/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import styled from 'styled-components';

// Styles
const Content = styled.div`
  margin: 1rem 0;
  padding-left: 1rem;
  width: 100%;
  border-radius: 8px;
  font-size: 1rem;
  color: #373737;
  background: #fff;
  font-weight: 900;
`;

const Text = styled.p`
  margin: 1rem 1rem 1rem 0;
  font-weight: ${props => props.active ? '900' : 'normal'};
  color: ${props => props.active ? '#373737' : '#B9B9B9'};
`;

const Option = styled.option`
  margin: 1rem 0;
  width: 100%;
  border-radius: 8px;
  font-size: 1rem;
  color: #373737;
  background: #fff;
  font-weight: 900;

  >hover{
    background-color: red;
  }
`;


const Select = ({ name, value, handleChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleSelect = (value) => {
    
    handleChange({
      target: {
        name: name,
        value: value
      }
    })
  }
  const options = () => {
    return <>
      <Option onClick={() => handleSelect(true)}>Sim</Option>
      <Option onClick={() => handleSelect(false)}>Não</Option>
    </>
  }

  return (
    <Content 
    onClick={(ev) => {
      ev.stopPropagation()
      setIsOpen(!isOpen)}
    } 
    name={name}>

      {(value === true && !isOpen) && <Text active>Sim</Text>}
      {(value === false && !isOpen) && <Text active>Não</Text>}
      {(value === undefined || isOpen) &&  <Text>Escolha uma opção:</Text>}
      {isOpen && options()}

    </Content>
  );
}

export default Select;