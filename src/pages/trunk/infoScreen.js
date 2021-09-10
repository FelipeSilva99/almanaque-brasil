import React, { useState, useEffect, createRef } from 'react';
import styled from 'styled-components';

//Component
import Header from '../../components/header';

//Styles
const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
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

const MessageBox = styled.div`
  position: relative;
  top: -4rem;
  padding: 3rem 1rem 0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media(max-width: 425px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100vh;
  min-height: 245px;
  max-width: 500px;
  object-fit: fill;

  @media(max-width: 425px) {max-height: 310px;}
  @media(min-width: 1024px) {height: 40vh;  object-fit: contain;}
`;

const Title = styled.h1`
  padding-bottom: 1.3125rem;
  font-size: 1.5rem;
  font-weight: 900;
`;

const Text = styled.p`
  margin-bottom: .5rem;
  font-size: 1rem;
  color: #373737;
`;

const InfoScreen = ({ itemData, onClick }) => {
  const [showTitle, setShowTitle] = useState(undefined);
  const [data, setData] = useState([]);
  const myRef = createRef();

  useEffect(() => {
    setData(itemData);
  });

  const onScroll = () => {
    const scrollTop = myRef.current.scrollTop

    scrollTop >= 220 ? setShowTitle(true) : setShowTitle(false);
  }

  return (
    <Container ref={myRef} onScroll={onScroll}>
      <Header trunkScreen showTitle={showTitle} title={data.category} goBack={onClick} />
      <Img src={`data:image/jpeg;base64,${data.imageBase64}`} alt='Imagem da atividade' />
      <MessageBox>
        <Title>
          {data.title}
        </Title>
        <Text>{data.content}</Text>
      </MessageBox>
    </Container>
  );
}

export default InfoScreen;