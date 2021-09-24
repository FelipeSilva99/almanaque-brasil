import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

//Components
import Button from '../buttons/button';

//Images
import dialogBox from '../../images/dialogBox/dialogBox.svg';
import iconElifas from '../../images/elifas/tip.svg';

//Styled
const Container = styled.div`
  background: #70707073;
   position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  z-index: 3;
  overflow: hidden;
`;

const Content = styled.div`
  position: relative;
  top: 6rem;
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center; 
`;

const ContentInfo = styled.div`
  padding: 0 1rem;
  width: 100%;
  max-width: 340px;
  position: absolute;
  top: 0;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 900;
  color: #373737;
  text-align: center;

  strong {
    font-size: 2.5rem;
  }
`;

const SubTitle = styled.p`
  font-size: 1rem;
  color: #373737;
`;

const ImgDialogBox = styled.img`
  width: 100%;
  transform: scaleX(-1);
`;

const ImgBento = styled.img`
  width: min-content;
  position: relative;
  right: -30%;
  bottom: -10px
`;

function TrailCompleted(props) {
  const history = useHistory();

  const handleClick = () => {
    history.push('/trails');
  }

  return (
    <Container>
      <Content>
        <ImgDialogBox src={dialogBox} alt='Elifas' />
        <ContentInfo>
          <Title>
            Parabéns!
          </Title>
          <SubTitle>
            Você concluiu a trilha, e conquistou:
          </SubTitle>
          <Title>
            <strong>100</strong>pts
          </Title>
          <SubTitle>
            vamos continuar nessa jornada de conhecimento?
          </SubTitle>
          <Button handleClick={handleClick} margin='0' on>escolher outra trilha</Button>
        </ContentInfo>
      </Content>
      <ImgBento src={iconElifas} alt='Elifas' />
    </Container>
  )
}

export default TrailCompleted;
