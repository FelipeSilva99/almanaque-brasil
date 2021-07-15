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
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: #F3F3F3;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 24px;
    max-width: 360px;
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
  margin: 32px 0;
`

const Img = styled.img`
  width: 100%;
`

const Title = styled.h1`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  text-transform: ${props => props.textTransform};
  color: #272727;

  @media(max-width: 360px){
    margin-bottom: 1rem;
  }
`;

const Subtitle = styled.p`
  height: 11.25rem;
  font-size: 1rem;
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

const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: ${props => props.marginTop};
`;

const OriginOfTheExpression = ({isActivitie, isShowLogo, eureka, handleNextQuestion}) => {

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
          <Img src={`data:image/jpeg;base64,${image}`} alt={`image${isActivitie.answers[0].answer}`} />
        </BoxImg>
        <Title
          fontWeight="900"
          textTransform='uppercase'
          fontSize="1.2rem"
        >
          {isActivitie.question}.
        </Title>
        <Subtitle>
          {isActivitie.answers[0].answer}
        </Subtitle>
        <ContainerButton>
          <Button
            height='39px'
            background='#ffd000'
            boxShadow='0 7px 0 #f08800'
            handleClick={handleNextQuestion}
          >
            Continuar
          </Button>
        </ContainerButton>
      </Content>
    </Container>
  );
}

export default OriginOfTheExpression;