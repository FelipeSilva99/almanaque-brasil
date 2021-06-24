import React from 'react';
import styled from 'styled-components';

// Styles
const Container = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  margin: 1em 0; 
  font-size: 0.75rem;
  font-weight: 700;
  color: #535152;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

const Footer = ({ handleCleanAnswer, handleNextQuestion }) => {
  return (
    <Container>
      <Button onClick={handleCleanAnswer}>Limpar tudo</Button>
      <Button onClick={handleNextQuestion}>Próximo desafio {'>'}</Button>
    </Container>
  );
}

export default Footer;
