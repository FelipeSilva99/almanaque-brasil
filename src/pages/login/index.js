import React, { useState } from 'react';
import styled from 'styled-components';

//Components
import Header from '../components/header/index';
import TrailsWhatIs from '../components/trails/whatIsWhatIs';
import Footer from '../components/footer/index';

// Styles
const Container = styled.div`
  margin: auto;
  width: 90vw;
  height: 100vh;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  flex-direction: column;
`;

function Login() {
  const [nextQuestion, setNextQuestion] = useState(0);
  const [isAnswer, setIsAnswer] = useState('disco');

  let listLetter = ['disco', 'chuva', 'rua'];

  const handleNextQuestion = () => {
    setNextQuestion(nextQuestion + 1);
    setIsAnswer(listLetter[nextQuestion+1])
  };

  return (
    <Container>
      <Header />
      <TrailsWhatIs 
        renderQuestion={nextQuestion}
        isAnswer={isAnswer}
      />
      <Footer
        // handleCleanAnswer={handleCleanAnswer}
        handleNextQuestion={handleNextQuestion}
      />
    </Container>
  );
}

export default Login;
