import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Component
import Header from '../../components/header';
import Button from '../../components/buttons/button';
import ModalTip from '../../components/modal/tip';

//Images
import logo from '../../images/logo/ifTurnsOn.svg';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #f3f3f3;
  width: 100vw;
  height: 100vh;

  @media (min-width: 1024px) {
    justify-content: center;
  }
`

const Content = styled.div`
  padding: 2rem;
  width: 100vw;
  height: calc(100% - 83px);
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;

  @media(min-width: 768px) {margin-top: 20vh; padding-top: 5rem;}
`

const ContentInfo = styled.div`
  padding-bottom: 1rem;
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Text = styled.div`
  width: 7rem;
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: .875rem;
  color: #373737;
  font-weight: 900;
  border-radius: 8px;
  box-shadow: 0 3px 6px #00000029;
`

const Box = styled.div`
  display: flex;
  width: 100%;
  max-width: 300px;
  flex-direction: row;
  justify-content:  space-between;
`;

function IfTurnsOn({ useActivitie, handlerNextActivitie }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [activitie, setActivitie] = useState(undefined);
  const [isModalTip, setIsModalTip] = useState(undefined);

  useEffect(() => {
    setActivitie(useActivitie);
  }, [useActivitie]);

  const handleModalTip = () => {
    setIsModalTip(!isModalTip)
  }

  const handleClick = (item) => {
    if(canAdd(item.matchingPair, item.type)) {
      setSelectedItems([
        ...selectedItems,
        {
          type: item.type,
          matchingPair: item.matchingPair
        }
      ])
    }
  }

  const canAdd = (matchingPair, type) => {
    if(selectedItems.length === 0) {
      return true
    }

    let add = true
    const check = selectedItems.map(item => {
    // se existir um type e um matchingPair no array, não será possível adicionar o mesmo
    // item novamente.
      if(item.type == type & item.matchingPair == matchingPair) {
        return add = false
      }
    })
  
    if(add) {
      return true
    } else return false
  }

  return (
    <Container>
      <Header
        logo={logo}
        tips
        isSelectedTips={isModalTip}
        handleModalTip={handleModalTip}
      />
      <Content>
        <Box>
          <div>
            {
              activitie?.pairs.map(item => (
                item.type === "image" && (
                  <ContentInfo onClick={() => handleClick(item)}>
                    <img src={`data:image/jpeg;base64,${item.imageBase64}`} />
                  </ContentInfo>
                )
              ))
            }
          </div>
          <div>
            {
              activitie?.pairs.map(item => (
                item.type === "text" && (
                  <ContentInfo onClick={() => handleClick(item)}>
                    <Text>{item.text}</Text>
                  </ContentInfo>
              )))
            }
          </div>
        </Box>
        <Button>conferir resposta</Button>
      </Content>
      {isModalTip && <ModalTip text={activitie?.tips} handleModalTip={handleModalTip} />}
    </Container>
  )
}

export default IfTurnsOn;
