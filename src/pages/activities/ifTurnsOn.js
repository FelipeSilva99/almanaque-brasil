import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { shuffle } from '../../utils'

// Component
import Header from '../../components/header';
import ContainerButton from '../../components/buttons/containerButton';
import ModalTip from '../../components/modal/tip';
import WrongAnswer from '../../components/activities/wrongAnswer';
import SplashScreen from './splashScreen';
import ScoreScreen from '../../components/activities/scoreScreen';

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
`

const Content = styled.div`
  padding: 2rem;
  padding-bottom: 0;
  width: 100vw;
  height: calc(100% - 83px);
  background: ${props => !props.isCorrectAnswer && '#fff'};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;

  @media(min-width: 768px) {height: 70vh; padding-top: 6rem;}
`

const ContentInfo = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  user-select: none;
  background-color: ${props => (props.isCorrectAnswer && 'none') || props.backgroundColor};
  img { opacity: ${props => (props.isCorrectAnswer && '1') || props.opacity}}
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
  box-shadow: ${props => props.isCorrectAnswer ? 'none' : '0 3px 6px #00000029'};
`

const Box = styled.div`
  display: flex;
  width: 100%;
  max-width: 300px;
  flex-direction: row;
  justify-content:  ${props => props.isCorrectAnswer ? 'space-evenly' : 'space-between'};
  
`;

function IfTurnsOn({ useActivitie, handlerNextActivitie }) {
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
  ]);
  const [activitie, setActivitie] = useState(undefined);
  const [isModalTip, setIsModalTip] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true)
  const [modalWrongAnswer, setModalWrongAnswer] = useState(undefined);
  const [amountTrial, setAmountTrial] = useState(3);
  const [inMemoryItem, setInMemoryItem] = useState(undefined);
  const [hasItemInMemory, setHasItemInMemory] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(undefined);
  const [isModalCorrectAnswer, setIsModalCorrectAnswer] = useState(undefined);

  useEffect(() => {
    inMemoryItem === undefined
      ? setHasItemInMemory(false)
      : setHasItemInMemory(true)
  }, [inMemoryItem])

  useEffect(() => {
    const newArrayOfActivities = useActivitie?.pairs.map((pair, i) => {
      return {
        id: i,
        ...pair,
        backgroundColor: "#fff"
      }
    });
    setActivitie(useActivitie);
    setPairs(shuffle(newArrayOfActivities));
  }, [useActivitie]);


  useEffect(() => {
    const timer = setTimeout(() => {
      if (!!useActivitie) setIsLoading(false)
    }, 2000);
    return () => clearTimeout(timer);
  }, [useActivitie]);

  const handleModalTip = () => {
    setIsModalTip(!isModalTip)
  }

  const handleClick = (item) => {
    const itemIndex = isSelected(item)
    if (itemIndex < 0) {
      if (inMemoryItem !== undefined) add(item, inMemoryItem)
      else add(item)

    } else {
      if (inMemoryItem === undefined) remove(itemIndex, item)
      else if (inMemoryItem !== undefined & checkBackgroundColor(item, inMemoryItem)) {
        remove(itemIndex, item)
      }
    }
  }

  const handleCorrectAnswer = () => {
    let pairsList = [];
    let newPairsList = [];

    pairs.forEach(element => {
      const pair = element.matchingPair;

      const includesItem = pairsList.includes(pair);
      setModalWrongAnswer(false);
      // setShowAnswer(true);
      if (!includesItem) {
        pairsList.push(pair);
      }

      // eslint-disable-next-line array-callback-return
      newPairsList = pairsList.map(item => {
        pairs.filter(i => {
          return i.matchingPair === item;
        })
      })
    })

    return newPairsList.flat(Infinity);
  }

  const handleContinue = () => {
    handleModalCorrectAnswer();
    setIsCorrectAnswer(true);
  }

  const checkBackgroundColor = (item, inMemoryItem) => {
    return item.backgroundColor === inMemoryItem.backgroundColor ? true : false
  }

  const isSelected = (item) => {
    const validation = selectedItems.findIndex((x) => {
      return x.id === item.id;
    })

    return validation
  }

  const remove = (index, item) => {
    const newSelectedItems = selectedItems
    const removed = newSelectedItems[index]
    newSelectedItems.splice(index, 1)


    if (hasItemInMemory) {
      const newAvailableColors = availableColors;
      newAvailableColors.unshift(item.backgroundColor);
      newAvailableColors.unshift(item.backgroundColor);
      setSelectedItems(newSelectedItems)
      setBackgroundColor(item, "#fff")
      setInMemoryItem(undefined)
      setAvailableColors([...newAvailableColors]);

    } else {
      setSelectedItems(newSelectedItems)
      setBackgroundColor(item, "#fff")
      setInMemoryItem({
        index: index,
        ...removed
      })
    }
  }

  const add = (item, inMemoryItem) => {
    if (inMemoryItem) {
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

  const handleModalCorrectAnswer = () => {
    setIsModalCorrectAnswer(!isModalCorrectAnswer);
  }

  const handleSubmit = () => {
    if (selectedItems.length < pairs.length) return
    if (isCorrectAnswer) {
      handlerNextActivitie();
    } else if (isCorrect()) {
      handleCorrectAnswer();
      handleModalCorrectAnswer();
    } else {
      setModalWrongAnswer(true);
      setAmountTrial(amountTrial - 1);
    }
  }


  const handleWrongAnswer = () => {
    const removeBackground = [];
    pairs.map(item => removeBackground.push({ ...item, backgroundColor: '#fff' }))

    setModalWrongAnswer(false);
    setPairs(removeBackground);
  }

  const showModalAnswer = () => {
    setModalWrongAnswer(false);
    setIsCorrectAnswer(true);
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
    const newAvailableColors = availableColors;
    const selected = newAvailableColors.shift();
    setAvailableColors([...newAvailableColors]);
    return selected;
  }

  const setOpacity = (color) => {
    if (color !== "#fff") return ".3"
    return "1.0"
  }

  function isCorrect() {
    let isCorrect = true;
    selectedItems.map((item, i, array) => {
      if (i % 2 === 0) return null
      const par = [array[i], array[i - 1]]
      if (par[0].matchingPair !== par[1].matchingPair) return isCorrect = false;
      return null
    });

    return isCorrect;
  }

  const renderScreen = () => {
    return (
      <Box isCorrectAnswer={isCorrectAnswer}>
        <div>
          {
            pairs?.map((item, i) => (
              item.type === "image" && (
                <ContentInfo key={i}
                  backgroundColor={item.backgroundColor}
                  isCorrectAnswer={isCorrectAnswer}
                  onClick={() => handleClick(item)}
                  opacity={setOpacity(item.backgroundColor)}>
                  <img src={`data:image/jpeg;base64,${item.imageBase64}`} isCorrectAnswer={isCorrectAnswer} alt={`img-${item.matchingPair}`}/>
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
                  isCorrectAnswer={isCorrectAnswer}
                  onClick={() => handleClick(item)}>
                  <Text isCorrectAnswer={isCorrectAnswer}>{item.text}</Text>
                </ContentInfo>
              )))
          }
        </div>
      </Box>
    )
  }

  return (
    isLoading ? <SplashScreen activitieLogo={logo} /> : (
      <Container>
        <Header
          logo={logo}
          tips
          isSelectedTips={isModalTip}
          handleModalTip={handleModalTip}
        />
        <Content isCorrectAnswer={isCorrectAnswer}>
          {renderScreen(pairs)}
          <ContainerButton
            color={isCorrectAnswer && '#fff'}
            background={isCorrectAnswer && '#399119'}
            boxShadow={isCorrectAnswer && '0 7px 0 #245812'}
            noBorder={!isCorrectAnswer}
            isCorrectAnswer={isCorrectAnswer}
            handleClick={handleSubmit}
          >
            {isCorrectAnswer ? 'continuar trilha' : 'conferir resposta'}
          </ContainerButton>
        </Content>
        {isModalTip && <ModalTip text={activitie?.tips} handleModalTip={handleModalTip} />}
        {modalWrongAnswer && <WrongAnswer chances={amountTrial} handleClick={handleWrongAnswer} handleShowAnswer={showModalAnswer} />}
        {isModalCorrectAnswer && <ScoreScreen amountTrial={amountTrial} handleClick={handleContinue} />}
      </Container>
    )
  )
}

export default IfTurnsOn;
