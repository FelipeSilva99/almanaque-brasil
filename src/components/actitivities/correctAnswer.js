import React from 'react';
import styled from 'styled-components';

//Components
import Header from '../header/index';
import IndividualLetter from '../letter/individualLetter';
import Button from '../buttons/button';
import Footer from '../footer/index';

// Styles
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: auto;
  width: 90vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: #272727;

  @media (max-width: 375px) {
    margin-bottom: 2rem;
  }
`;

const TextRightAnswer = styled.p`
  font-size: 1rem;
  font-weight: 700;
  line-height: 2rem;
  color: #3daf1b;
`;

const ConteinerIndividualLetter = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 425px;

  @media (max-width: 375px) {
    margin-bottom: 2rem;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 425px;
  height: 10.9375rem;
  background: #76146c;

  @media (max-width: 375px) {
    margin-bottom: 1rem;
  }
`;

const Text = styled.p`
  padding: ${props => props.padding};
  width: 80%;
  max-width: 425px;
  font-size: 1rem;
  line-height: 1.25rem;
  color: #272727;
`;

const ContentButton = styled.div`
  width: 100%;
  position: absolute;
  bottom: 2rem;
  display: flex;
  justify-content: center;

  @media (max-width: 375px) {
    position: relative;
    bottom: 0;
  }
`;

const CorrectAnswer = ({answer, image, handlerNextActivitie}) => {
  return (
    <Container>
      {/* <Header /> */}
      <Content>
        <Title>
          O que é o que é?
        </Title>
        <TextRightAnswer>Resposta Correta</TextRightAnswer>
        <ConteinerIndividualLetter>
          {answer.split('').map((item, index) => (
            <IndividualLetter key={index} letter={item} background='#3daf1b' boxShadow='0 5px 0 #26770f' />)
          )}
        </ConteinerIndividualLetter>
        <Image src={image}/>
        <Text padding='1rem 0 0 0'>
          Você sabia que em Belo Horizonte existe uma feira anual dedicada aos amantes do velho e bom disco vinil?
        </Text>
        <Text padding='1.25rem 0 1.25rem 0'>
          Veja mais na nossa biblioteca!
        </Text>
        <ContentButton>
          <Button
            background='#3daf1b'
            boxShadow='0 10px 0 #26770f'
            handleClick={handlerNextActivitie}
          >
            Continuar trilha
          </Button>
        </ContentButton>
      </Content>
      {/* <Footer /> */}
    </Container>
  );
}

export default CorrectAnswer;