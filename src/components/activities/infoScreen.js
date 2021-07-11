import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import LogoOrigin from '../activities/whatIsWhatIs/images/origin-logo.svg'
import ImagePill from '../activities/whatIsWhatIs/images/image-pill.png'

//Components
import Button from '../buttons/button';

// Styles
const Container = styled.div`
  padding: 2rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #00000029;
`;

const ImgOrigin = styled.img`
  width: 150px;
  margin-bottom: 32px;
  `

const Img = styled.img`
  width: 241px;
  border-radius: 8px;
  margin-bottom: 32px;
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
  font-size: 1.2rem;
  color: #272727;
  line-height: 1.5;

  @media (max-width: 375px) {
    margin-bottom: 2rem;
  }
`;

const ContainerButton = styled.div`
  margin: auto;
  width: ${props => props.width};
  position: absolute;
  bottom: 1rem;
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
      <ImgOrigin src={LogoOrigin} alt="" />
      <div>
        {/* <Img src={`data:image/jpeg;base64,${image}`} alt="" /> */}
        <Img src={ImagePill} alt="" />
      </div>
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
      <ContainerButton width="80%">
        <Button
          height='39px'
          background='#ffd000'
          boxShadow='0 10px 0 #f08800'
          handleClick={handleClick}
        >
          Continuar
        </Button>
      </ContainerButton>
    </Container>
  );
}

export default OriginOfTheExpression;