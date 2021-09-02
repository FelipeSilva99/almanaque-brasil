import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

//Component
import Header from '../../components/header/headerYellow';
import InfoScreen from './infoScreen';
import Footer from '../../components/footer/footerTrunk';

//Image
import arrow from '../../images/icons/arrow.svg';

//Styled
const Container = styled.div`
  background: #F3F3F3;
  min-height: 100vh;
`;

const ContainerBox = styled.div`
  padding: 1.5rem 1rem 4rem;
`;

const Content = styled.div`
  margin-bottom: 1.0rem;
`;

const ContentTitle = styled.div`
  padding-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 900;
  color: #373737;
`;

const ContentText = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  margin: 0 .5rem .5rem 0;
  width: 44px;
  height: 44px;
  background: #BBBBBB;
  border-radius: 8px;
  object-fit: cover;

  >:last-child{
    margin-bottom: 1.0rem;
  }
`;

const Text = styled.h1`
  font-size: 1rem;
  font-weight: 900;
  color: #373737;
`;

const Trunk = () => {
  const [modal, setIsModal] = useState({ isModal: undefined, item: undefined });
  const [infoModal, setIsInfoModal] = useState({ isModal: undefined, data: undefined });
  const [data, setData] = useState([
    {
      category: 'História',
      title: 'Dragão do Mar',
      content: 'teatetest testestet testest',
    }
  ]);

  const getDataThunk = async () => {
    const accessToken = localStorage.getItem('accessToken');

    try {
      const response = await axios({
        method: 'get',
        url: `https://qqxtiq6upd.execute-api.us-east-1.amazonaws.com/dev/chest`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${accessToken}`,
        },
      })
      setData(response.data.Items);
    }
    catch (err) {
      console.log('err', err);
    }
  }

  useEffect(() => {
    getDataThunk();
  }, []);

  const handleModal = (item) => {
    setIsModal({ isModal: !modal.isModal, item: item });
  }

  const handleInfoModal = (data) => {
    setIsInfoModal({ isModal: true, data: data });
  }

  const handleCloseModal = () => {
    setIsInfoModal({ isModal: false });
  }

  const renderTitle = (item, index) => (
    <ContentTitle>
      <Title>
        {item.category}
      </Title>
      <img src={arrow} alt='Seta' onClick={() => handleModal(index)} />
    </ContentTitle>
  )

  const renderOptions = (item) => (
    <ContentText onClick={() => handleInfoModal(item)}>
      <Image src={`data:image/jpeg;base64,${item.imageKey}`} alt='Img' />
      <Text>{item.title}</Text>
    </ContentText>
  )

  return (
    <Container>
      <Header text='Baú' />
      <ContainerBox>
        {data && data.map((item, index) => (
          <Content key={index}>
            {renderTitle(item, index)}
            {modal.isModal && modal.item === index && renderOptions(item)}
          </Content>
        ))}
      </ContainerBox>
      <Footer />
      {infoModal.isModal && <InfoScreen itemData={infoModal.data} onClick={handleCloseModal}/>}
    </Container>
  );
}

export default Trunk;
