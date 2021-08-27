import React, { useState } from 'react';
import styled from 'styled-components';

//Component
import Header from '../../components/header/headerYellow';
import Footer from '../../components/footer/footerTrunk';

//Image
import arrow from '../../images/icons/arrow.svg';

//Styled
const Container = styled.div`
  background: #F3F3F3;
  min-height: 100vh;
`;

const ContainerBox = styled.div`
  padding: 1.5rem 1rem 0;
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

const Image = styled.div`
  margin: 0 .5rem .5rem 0;
  width: 44px;
  height: 44px;
  background: #BBBBBB;
  border-radius: 8px;

  >:last-child{
    margin-bottom: 1.0rem;
    background: red;
  }
`;

const Text = styled.h1`
  font-size: 1rem;
  font-weight: 900;
  color: #373737;
`;

const Trunk = (props) => {
  const [modal, setIsModal] = useState({ isModal: undefined, item: undefined });
  const [data] = useState([
    {
      title: 'Cultura',
      items: ['item1', 'item2', 'item3',]
    },
    {
      title: 'Empreendedorismo',
      items: ['item2', 'item2', 'item3',]
    },
    {
      title: 'História',
      items: ['item3', 'item2', 'item3',]
    },
    {
      title: 'Patrimônio',
      items: ['item4', 'item2', 'item3',]
    },
    {
      title: 'Profissão',
      items: ['item5', 'item2', 'item3',]
    },

  ]);

  const handleModal = (item) => {
    setIsModal({ isModal: !modal.isModal, item: item });
  }

  return (
    <Container>
      <Header text='Baú' />
      <ContainerBox>
        {data.map((item, index) => (
          <Content key={index}>
            <ContentTitle>
              <Title>
                {item?.title}
              </Title>
              <img src={arrow} alt='Seta' onClick={() => handleModal(index)} />
            </ContentTitle>
            {modal.isModal && modal.item === index && item?.items.map(item => (
              <ContentText>
                <Image></Image>
                <Text>{item}</Text>
              </ContentText>
            ))}
          </Content>
        ))}
      </ContainerBox>
      <Footer />
    </Container>
  );
}

export default Trunk;