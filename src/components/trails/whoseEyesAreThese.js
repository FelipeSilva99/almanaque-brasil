import React from 'react';
import styled from 'styled-components';



const Back = styled.p`
  font-size: 3.125rem;
  font-weight: 700;
  line-height: 0;
  color: #272727;
`;

const Time = styled.p`
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 0;
  color: #272727;
`;

const Img = styled.img`
  max-width: 100%;
  margin-top: 8vh;
`;

const BoxAnswers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  background-color: silver;
  height: 100vh;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;


const Header = (props) => {
  const Container = styled.div`
    position: fixed;
    /* margin-top: 2rem; */
    width: inherit;
    height: 10vh;
    min-height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
`;
  return (
    <Container>
      <Back>{'<'}</Back>
      {props.children}
      {/* <Time>{'/||'}</Time> */}
    </Container>
  );
}

const ContentAnswerOption = styled.button`
  margin-right: .625rem;
  margin-bottom: .875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  padding: 0 10vw 0 10vw;
  height: 2.8rem;
  font-weight: bold;
  color: #fff;
  background: ${props => props.isSelected ? '#b9b9b9' : '#c7adfc'};
  border-radius: 17px;
  box-shadow: ${props => props.isSelected ? '0 5px 0 #9c9c9c' : '0 5px 0 #9a72f6'};
`;

const WhoseEyesAreThese = (props) => {

  return(
    <>
      <Header>{props.activitie.question}</Header>
        <Img src={props.activitie.image}></Img>
        <BoxAnswers>
            <ContentAnswerOption>CLARA NUNES</ContentAnswerOption>
            <ContentAnswerOption>CARMEN MIRANDA</ContentAnswerOption>
            <ContentAnswerOption>BETH CARVALHO</ContentAnswerOption>
            <ContentAnswerOption>ALCIONE</ContentAnswerOption>
        </BoxAnswers>
    </>
  );
}

export default WhoseEyesAreThese;
