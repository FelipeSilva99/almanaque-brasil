import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  padding-top: ${props => props.isModal && '1rem'};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: ${props => !props.isModal && 'center'};
  align-items: center;
  z-index: 1;
 
  span {
    font-size: 2.5rem;
    font-weight: 700;
    color: #36A39A;
    line-height: 0;
    :last-child {
      padding-top: ${props => props.isModal ? '2.5rem' : '1rem'}
    }
  }
  img {
    width: 17.188rem;
    max-width: 300px;
    border-radius: 10px;
    box-shadow: 0px 5px 6px silver;
  }
`;
const Title = styled.h1`
  margin-top: 2vh;
  width: 20rem;
  font-size: 1rem;
  font-weight: 800;
  line-height: 2rem;
  color: #373737;
  text-align: center;
  
  @media (max-width: 320px) { width: 18rem; }
`;

const contentImageText = ({ isModal, image, title }) => {
  return (
      <Content isModal={isModal}>
        <img src={image} alt={"imagem da atividade"} />
        <Title>{title}</Title>
      </Content>
  )
}

export default contentImageText
