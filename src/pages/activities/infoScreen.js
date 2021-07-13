import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import LogoOrigin from '../../components/activities/whatIsWhatIs/images/origin-logo.svg'
import LogoEureka from '../../components/activities/whatIsWhatIs/images/image-eureka.svg'

//Components
import Button from '../../components/buttons/button';

// Styles
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: #a4a4a4 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  `;

const Content = styled.div`
    width: 90vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background: #F3F3F3;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 24px;
    
  `;

const ImgOrigin = styled.img`
  width: 150px;
  `

const BoxImg = styled.div`
  width: 90%;
  height: 168px;
  overflow: hidden;
  border-radius: 10px;
  margin: 32px 0;
`

const Img = styled.img`
  width: 100%;
  position: relative;
  bottom: 15px;
`

const Title = styled.h1`
  padding-bottom: 2rem;
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  text-transform: ${props => props.textTransform};
  color: #272727;

  @media (max-width: 375px) {
    margin-bottom: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #272727;
  line-height: 1.4;

  @media (max-width: 375px) {
    margin-bottom: 2rem;
  }
`;

const ContainerButton = styled.div`
  width: 100%;
  margin-top: ${props => props.marginTop};
`;

const OriginOfTheExpression = (props) => {
  console.log("info props:", props)
  let history = useHistory();

  const handleClick = () => {
    history.goBack()
  }

  const image = props.isActivitie.imageBase64

  return (
    <Container>
      <Content>
        {
          props.isShowLogo ? <ImgOrigin src={LogoOrigin} alt="" /> :
            <ImgOrigin
              src={LogoEureka}
              alt=""
              style={{
                width: "100px",
                position: "relative",
                bottom: "5px",
              }}
            />
        }
        <BoxImg>
          <Img src={`data:image/jpeg;base64,${image}`} alt="" />
        </BoxImg>
        <Title
          fontWeight="900"
          textTransform='uppercase'
          fontSize="1.3rem"
        >
          {props.isActivitie.question}.
        </Title>
        <Subtitle>
          {props.isActivitie.answers[0].answer}
        </Subtitle>
        <ContainerButton marginTop={props.btnEureka ? '9.5rem' : '4rem'}>
          <Button
            height='39px'
            background='#ffd000'
            boxShadow='0 7px 0 #f08800'
            handleClick={props.handleNextQuestion}
          >
            Continuar
          </Button>
        </ContainerButton>
      </Content>
    </Container>
  );
}

export default OriginOfTheExpression;