import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 75%;
  margin: auto;
  padding-top: ${props => props.isModal && '1rem'};
  ${({ isModal }) => isModal && `flex: 1`};
  display: flex;
  flex-direction: column;
  align-items: center;

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
    background: transparent;
    border-radius: 13px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: transparent;
  }

  @media (max-width: 320px) { width: 80%; }
`;

const Img = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 5px 6px silver;
`;

const Title = styled.h1`
  padding: 1rem 0;
  font-size: 1rem;
  font-weight: 800;
  line-height: 1.3rem;
  color: #373737;
  text-align: center;
`;

const Text = styled.p`
  padding-bottom: 1rem;
  font-size: .875rem;
  color: #000000;
`;

const ContentImageText = ({ isModal, image, title, info }) => {
  return (
    <Container isModal={isModal}>
      <Img src={image} alt={"imagem da atividade"} />
      <Title>{title}</Title>
      {info && !isModal && <Text>{info}</Text>}
    </Container>
  )
}

export default ContentImageText;
