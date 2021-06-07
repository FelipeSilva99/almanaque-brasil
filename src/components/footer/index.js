import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// import {
//   createNewTrails
// } from '../../modules/trails-module';

// const mapStateToProps = state => ({
//   isTrails: state.trails.isTrails,
// });

// const mapDispatchToProps = dispatch => ({
//   createNewTrails: info => {
//     dispatch(createNewTrails(info));
//   },
// });

//Components
import Button from '../buttons/button';

// Styles
const Container = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.button`
  margin: 1em 0; 
  font-size: 12px;
  font-weight: 700;
  color: #535152;
`;

const Footer = ({ handleCleanAnswer, handleNextQuestion }) => {
  return (
    <Container>
      <Text onClick={handleCleanAnswer}>Limpar tudo</Text>
      <Text onClick={handleNextQuestion}>Próximo desafio {'>'}</Text>
    </Container>
  );
}

export default Footer;