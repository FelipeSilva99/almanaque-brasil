import React from 'react';
import styled from 'styled-components';
import LogoOrigin from '../../images/whatIsWhatIs/origin-logo.svg'
import LogoEureka from '../../images/whatIsWhatIs/image-eureka.svg'

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
  height: auto;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  padding: 2rem 1rem 1.5rem 1rem;
  background: #F3F3F3;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 24px;
  max-width: 360px;

  @media(max-width: 320px){min-height: 100%;}
`;

const ImgOrigin = styled.img`
  ${({ eureka }) => eureka && `
    width: 100px,
    position: relative,
    bottom: 5px,
  `}
  `

const BoxImg = styled.div`
  width: 90%;
  height: 168px;
  overflow: hidden;
  border-radius: 10px;
  margin: 1.5625rem 0 2rem 0;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Title = styled.h1`
  padding-bottom: 1rem;
  font-size: .875rem;
  font-weight: 900;
  text-transform: uppercase;
  color: #373737;

  @media(max-width: 360px){
    margin-bottom: 1rem;
  }
`;

const Subtitle = styled.p`
  padding-bottom: 1rem;
  height: 11.25rem;
  font-size: .875rem;
  color: #272727;
  line-height: 1.4;
  overflow-y: auto; 

  ::-webkit-scrollbar {
    width: 4px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 13px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #ccc;
  }
`;

const OriginOfTheExpression = ({ isActivitie, isShowLogo, eureka, handleNextQuestion }) => {

  const image = isActivitie.imageBase64;

  return (
    <Container>
      <Content>
        {
          isShowLogo ? <ImgOrigin src={LogoOrigin} alt="logo" /> :
            <ImgOrigin
              src={LogoEureka}
              alt="logo"
              eureka={eureka}
            />
        }
        <BoxImg>
          <Img src={`data:image/jpeg;base64,${image}`} alt={`image${isActivitie.question}`} />
        </BoxImg>
        <Title>
          {isActivitie.question}.
        </Title>
        <Subtitle>
          {isActivitie.answers[0].answer}
          {isActivitie.answers[0].answer}

          {isActivitie.answers[0].answer}

        </Subtitle>
        <Button
          height='39px'
          background='#ffd000'
          boxShadow='0 7px 0 #f08800'
          handleClick={handleNextQuestion}
        >
          Continuar
        </Button>
      </Content>
    </Container>
  );
}

export default OriginOfTheExpression;