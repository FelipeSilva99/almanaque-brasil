import React from 'react'
import styled from 'styled-components'


const Scroll = styled.div`
  margin: auto;
  padding-top: ${props => props.isModal && '1rem'};
  ${({ isModal }) => isModal && `flex: 1`};

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

const Content = styled.div`
  padding: 0 2rem;
  max-width: 475px;
  flex: 1;
  display: flex;
  flex-direction: column;
  /* justify-content: ${props => !props.isModal && 'center'}; */
  align-items: center;
  z-index: 1;

  @media (max-width: 320px) { padding: 0; }
`;

const Img = styled.img`
  width: 17.188rem;
  max-width: 300px;
  border-radius: 10px;
  box-shadow: 0px 5px 6px silver;
`;

const Title = styled.h1`
  padding: 2vh 0;
  width: 19rem;
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

  @media (max-width: 320px) { width: 18rem; }

`;

const contentImageText = ({ isModal, image, title, info }) => {
  return (
    <Scroll isModal={isModal}>
      <Content isModal={isModal}>
        <Img src={image} alt={"imagem da atividade"} />
        <Title>{title}</Title>
        {info && !isModal && <Text>{info}</Text>}
      </Content>
    </Scroll>
  )
}

export default contentImageText
