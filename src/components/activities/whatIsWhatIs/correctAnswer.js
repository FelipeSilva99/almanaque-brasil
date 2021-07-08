import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//Components
import Button from '../../buttons/button';

//Styles
const StlyedLink = styled(Link)`
  display: flex;
  justify-content: center;
  width: 100%;
`;

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
  height: ${props => props.height || "90vh"};

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

const Img = styled.img`
  max-width: 500px;
  width: 100%;
`;

const ComplementaryInformationBox = styled.div`
  /* margin: 10vh 0 18vh 0; */
  text-align: center;
  color: #373737;
  p {
    strong{ font-size: 2rem; }
  }

  div {
    margin-top: 4vh;
    width: 80vw;
    max-width: 348px;
    text-align: left;
    p {

    }
  }
`;

const CorrectAnswer = ({ answer, handlerNextActivitie, toScore }) => {
  const modals = {
    toScore: "toScore",
    answerDescription: "answerDescription"
  }
  const [actualModal, setActualModal] = useState(undefined)

  useEffect(() => {
    toScore
      ? setActualModal(modals.toScore)
      : setActualModal(modals.answerDescription)
  })
  const handleContinue = () => {
    switch (actualModal) {
      case modals.toScore:
        return setActualModal(modals.answerDescription);
    
      default:
        break;
    }
  }

  const renderModal = () => {
    switch (actualModal) {
      case modals.toScore:
        return(
          <MessageBox>
            <CongratulationsText>
              <h1>Parabéns</h1>
              <p>Você acertou e ganhou:</p>
            </CongratulationsText>
            <ScoreText><strong>10</strong> pts</ScoreText>
            <ButtonBox>
              <Button
                handleClick={() => handleContinue()}
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
          <MessageBox height={"50vh"}>
            <ComplementaryInformationBox>
              <p>A reposta é:<br/><strong>{answer[0].answer}</strong></p>
              <div>
                <p>{answer[0].complementaryInformation}</p>
              </div>

            </ComplementaryInformationBox>
            <ButtonBox>
              {/* <StlyedLink to="/">  */}
              <Button
                handleClick={() => handlerNextActivitie()}
                color={"#fff"}
                margin={"0 0 20px 0"}
                background={"#399119"}
                boxShadow={"#245812 0px 7px 0px"}
              >Continuar Trilha</Button>
              {/* </StlyedLink> */}
            </ButtonBox>
          </MessageBox>
        );
    }
  }

  return(
    console.log(answer),
    <Container>
      {(answer[0]?.imageBase64) && <Img src={`data:image/jpeg;base64,${answer[0].imageBase64}`}></Img>}
      {renderModal()}
    </Container>
  );
}

export default CorrectAnswer;