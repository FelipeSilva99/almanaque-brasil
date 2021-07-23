import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Component
import Header from '../../components/header';
import Button from '../../components/buttons/button';
import ModalTip from '../../components/modal/tip';
import WrongAnswer from '../../components/activities/wrongAnswer';
import CorrectAnswer from '../../components/activities/correctAnswer';

//Images
import logo from '../../images/logo/ifTurnsOn.svg';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
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

  @media(min-width: 768px) {height: 70vh; padding-top: 6rem;}
`

const ContentInfo = styled.div`
  padding-bottom: 1rem;
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.backgroundColor};
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

function IfTurnsOn({ useActivitie, handleNextQuestion }) {
  const colors = {
    green: "#00FFEA", orange: "#F29F32", blue: "#8EBEFF", yellow: "#FFD932"
  }
  const [selectedItems, setSelectedItems] = useState([]);
  const [pairs, setPairs] = useState(undefined);
  const [activitie, setActivitie] = useState(undefined);
  const [isModalTip, setIsModalTip] = useState(undefined);
  const [modalWrongAnswer, setModalWrongAnswer] = useState(undefined);
  const [modalCorrectAnswer, setModalCorrectAnswer] = useState(undefined);
  const [amountTrial, setAmountTrial] = useState(3);
  const [showAnswer, setShowAnswer] = useState(false);
  const [removedItem, setRemovedItem] = useState(undefined);

  useEffect(() => {
    const newArrayOfActivities = useActivitie?.pairs.map((pair) => {
      return {
      ...pair,
      backgroundColor: "#fff"
    }})

    setPairs(newArrayOfActivities)
  }, [useActivitie]);

  const handleModalTip = () => {
    setIsModalTip(!isModalTip)
  }

  const handleClick = (item) => {
    const itemIndex = isSelected(item)
    if(itemIndex < 0) {
      // if(canAdd(item.matchingPair, item.type)) {
      add(item)

    } else {
      if(removedItem === undefined) remove(itemIndex, item)
    }

  }

  const isSelected = (item) => {
    // verificar se o botão está ou não selecionado
    const validation = selectedItems.findIndex((x) => {
      return x.type === item.type & x.matchingPair === item.matchingPair;
    })

    return validation
  }

  const remove = (index, item) => {
    // remover o item selecionado do selectedItems
    const newArray = selectedItems
    const removed = newArray[index]
    newArray.splice(index, 1)
    // newArray[index] = undefined
    setSelectedItems(newArray)
    // setBackgroundColor(item, true)
    setBackgroundColor(item, "#fff")
    
    setRemovedItem({
      index: index,
      ...removed
    })
  }

  const add = (item) => {

    if(removedItem !== undefined) {
      const newSelectedItems = selectedItems;
      newSelectedItems.splice(removedItem.index, 0, {
        type: item.type,
        matchingPair: item.matchingPair,
        backgroundColor: removedItem.backgroundColor
      })

      setSelectedItems(newSelectedItems)
      setBackgroundColor(item, removedItem.backgroundColor)
      setRemovedItem(undefined)

    } else {
      const color = choiceColor()
      setBackgroundColor(item, color)
      setSelectedItems([
        ...selectedItems,
        {
          type: item.type,
          matchingPair: item.matchingPair,
          backgroundColor: color
        }
      ])
    }
  } 

  const handleSubmit = () => {
    // if (selectedAnswer === correctAnser) {
      // setModalCorrectAnswer(true)
    // } else {
      setModalWrongAnswer(true);
      setAmountTrial(amountTrial - 1);
    // }
  }

  const handleWrongAnswer = () => {
    setModalWrongAnswer(false);
  }

  const showModalAnswer = () => {
    setModalWrongAnswer(false);
    setModalCorrectAnswer(false);
    setShowAnswer(true);
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

  const setBackgroundColor = (item, color) => {
    
    const itemInd = pairs.findIndex(x => {
      return x.type === item.type & x.matchingPair === item.matchingPair;
    })

    const newArray = pairs
    newArray[itemInd].backgroundColor = color

    setPairs([...newArray])
  }

  const choiceColor = () => {
    if(selectedItems.length <= 1) return colors.green
    else if(selectedItems.length <= 3) return colors.orange
    else if(selectedItems.length <= 5) return colors.blue
    else if(selectedItems.length <= 7) return colors.yellow
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
              pairs?.map((item, i) => (
                item.type === "image" && (
                  <ContentInfo key={i}
                    backgroundColor={item.backgroundColor}
                    onClick={() => handleClick(item)}>
                    <img src={`data:image/jpeg;base64,${item.imageBase64}`} />
                  </ContentInfo>
                )
              ))
            }
          </div>
          <div>
            {
              pairs?.map((item, i) => (
                item.type === "text" && (
                  <ContentInfo key={i}
                    backgroundColor={item.backgroundColor}
                    onClick={() => handleClick(item)}>
                    <Text>{item.text}</Text>
                  </ContentInfo>
              )))
            }
          </div>
        </Box>
        <Button handleClick={handleSubmit}>conferir resposta</Button>
      </Content>
      {isModalTip && <ModalTip text={activitie?.tips} handleModalTip={handleModalTip} />}
       {modalWrongAnswer && <WrongAnswer chances={amountTrial} handleClick={handleWrongAnswer} handleShowAnswer={showModalAnswer} />}
      {modalCorrectAnswer && <CorrectAnswer handlerNextActivitie={handleNextQuestion} answer={useActivitie.answers[0]} toScore amountTrial={amountTrial} />}
      {showAnswer && <CorrectAnswer handlerNextActivitie={handleNextQuestion} answer={useActivitie.answers} amountTrial={amountTrial}/>}
    </Container>
  )
}

export default IfTurnsOn;
