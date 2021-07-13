import React from 'react';
import styled from 'styled-components';

//Components
import Button from '../../components/buttons/button';

//Images
import LogoOrigin from '../../images/whatIsWhatIs/origin-logo.svg';
import LogoEureka from '../../images/whatIsWhatIs/image-eureka.svg';

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

const OriginOfTheExpression = ({isActivitie, isShowLogo, eureka, handleNextQuestion }) => {
  const image = isActivitie.imageBase64

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
          fontSize="1.3rem"
        >
          {isActivitie.question}.
        </Title>
        <Subtitle>
          {isActivitie.answers[0].answer}
        </Subtitle>
        <ContainerButton marginTop={eureka ? '9.5rem' : '4rem'}>
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