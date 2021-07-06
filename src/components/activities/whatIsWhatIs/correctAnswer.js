import React, {useState} from 'react';
import styled from 'styled-components';

//Components
import Button from '../../buttons/button';

//Styles
const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #f3f3f3;

  @media (min-width: 1024px) {
    justify-content: center;
  }
`;

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding-top: 4vh;
  background-color: #FFFFFF;
  width: 100vw;
  height: 90vh;

  @media(max-width: 425px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;

const CongratulationsText = styled.div`
  margin: 10vh 0 18vh 0;
  text-align: center;
  h1{
    font-size: 3rem;
    color: #399119;
  }
  p{
    font-size: 1.5rem;
    strong{
      font-size: 3rem;
      color: #399119;
    }
  }
`;

const ScoreText = styled.p`
  font-size: 2.5rem;
  font-weight: 900;
  strong{
    font-size: 4rem;
    color: #399119;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding-top: 4vh;
  background-color: #FFFFFF;
  width: 100vw;


  @media(max-width: 425px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;


const CorrectAnswer = () => {
  const modals = {
    congratulations: "congratulations",
    answerDescription: "answerDescription"
  }
  const [actualModal, setActualModal] = useState(modals.congratulations)

  const hanleContinue = () => {
    switch (actualModal) {
      case modals.congratulations:
        setActualModal(modals.answerDescription);
        break;
    
      default:
        break;
    }
  }

  const renderModal = () => {
    switch (actualModal) {
      case modals.congratulations:
        return(
          <MessageBox>
            <CongratulationsText>
              <h1>Parabéns</h1>
              <p>Você acertou e ganhou:</p>
            </CongratulationsText>
            <ScoreText><strong>10</strong> pts</ScoreText>
            <ButtonBox>
              <Button
                color={"#fff"}
                margin={"0 0 20px 0"}
                background={"#399119"}
                boxShadow={"#245812 0px 7px 0px"}
              >Continuar</Button>
            </ButtonBox>
          </MessageBox>
        );

    
      case modals.answerDescription:
        return(
          <h1>Continuee</h1>
        );
    }
  }

  return(
    <Container>
      {renderModal()}
    </Container>
  );
}

export default CorrectAnswer;