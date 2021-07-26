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
  const [availableColors, setAvailableColors] = useState([
    colors.green, colors.green,
    colors.orange, colors.orange,
    colors.blue, colors.blue,
    colors.yellow, colors.yellow
  ])
  const [activitie, setActivitie] = useState(undefined);
  const [isModalTip, setIsModalTip] = useState(undefined);
  const [modalWrongAnswer, setModalWrongAnswer] = useState(undefined);
  const [modalCorrectAnswer, setModalCorrectAnswer] = useState(undefined);
  const [amountTrial, setAmountTrial] = useState(3);
  const [showAnswer, setShowAnswer] = useState(false);
  const [inMemoryItem, setInMemoryItem] = useState(undefined);

  useEffect(() => {
    const newArrayOfActivities = useActivitie?.pairs.map((pair, i) => {
      return {
        id: i,
        ...pair,
        backgroundColor: "#fff"
      }
    })

    setPairs(newArrayOfActivities)
  }, [useActivitie]);

  const handleModalTip = () => {
    setIsModalTip(!isModalTip)
  }

  const handleClick = (item) => {
    const itemIndex = isSelected(item)
    if(itemIndex < 0) {
      if(inMemoryItem !== undefined) add(item, inMemoryItem)
      else add(item)

    } else {
      if(inMemoryItem === undefined) remove(itemIndex, item)
    }
  }

  const isSelected = (item) => {
    console.log("isSelected:", item.id)
    const validation = selectedItems.findIndex((x) => {
      return x.id === item.id;
    })

    return validation
  }

  const remove = (index, item) => {
    const newSelectedItems = selectedItems
    const removed = newSelectedItems[index]
    newSelectedItems.splice(index, 1)
    setSelectedItems(newSelectedItems)
    setBackgroundColor(item, "#fff")
    setInMemoryItem({
      index: index,
      ...removed
    })
  }

  const add = (item, inMemoryItem) => {
    if(inMemoryItem) {
      const newSelectedItems = selectedItems;
      newSelectedItems.splice(inMemoryItem.index, 0, {
        id: item.id,
        type: item.type,
        matchingPair: item.matchingPair,
        backgroundColor: inMemoryItem.backgroundColor
      })

      setSelectedItems(newSelectedItems)
      setBackgroundColor(item, inMemoryItem.backgroundColor)
      setInMemoryItem(undefined)
      return null
    }
    const color = choiceColor()
    setBackgroundColor(item, color)
    setSelectedItems([
      ...selectedItems,
      {
        id: item.id,
        type: item.type,
        matchingPair: item.matchingPair,
        backgroundColor: color
      }
    ])
    return null
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

  const setBackgroundColor = (item, color) => {
    const itemInd = pairs.findIndex(x => {
      return x.id === item.id;
    })

    const newArray = pairs
    newArray[itemInd].backgroundColor = color

    setPairs([...newArray])
  }

  const choiceColor = () => {
    // if(selectedItems.length <= 1) return colors.green
    // else if(selectedItems.length <= 3) return colors.orange
    // else if(selectedItems.length <= 5) return colors.blue
    // else if(selectedItems.length <= 7) return colors.yellow
    const newAvailableColors = availableColors;
    const selected = newAvailableColors.shift();
    setAvailableColors([...newAvailableColors]);
    console.log('New AC', newAvailableColors);
    return selected;

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
                  <ContentInfo key={item.id}
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
                  <ContentInfo key={item.id}
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
