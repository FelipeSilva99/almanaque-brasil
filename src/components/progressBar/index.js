import React from 'react'
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Text = styled.p`
  margin-left: 10px;
  color: #373737;
  font-size: .8rem;
`;

const BoxBar = styled.div`
  flex: 1;
  height: 11px;
  border-radius: 5px;
  background-color: #fff;
  overflow: auto;
`;

const run = keyframes`
  from{width: 0%;}
  to{width: ${props => (props.width+'%')}}
`

const Progress = styled.div`
  width: ${props => (props.width+'%')};
  height: 100%;
  border-radius: 0 5px 5px 0;
  background-color: #FFD000;
  /* animation: ${run} .5s linear; */
`;

const setWidth = (currentValue, totalValue) => currentValue*(100/totalValue)

const ProgressBar = ({currentStep, steps}) => {
  return (
    <Container>
      <BoxBar>
        <Progress width={setWidth(currentStep, steps)}/>
      </BoxBar>
      <Text>Passo {currentStep} de {steps}</Text>
    </Container>
  );
}

export default ProgressBar;