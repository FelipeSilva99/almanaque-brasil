import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  useParams,
} from "react-router-dom";

//Components
import WhatIsWhatIs from './whatIsWhatIs';
import WhoseEyesAreThese from './whoseEyesAreThese';
import InfoScreen from '../../components/activities/infoScreen';

const mapStateToProps = state => ({
  activities: state.trails,
  selectedTrails: state.trails.selectedTrails,
})

// Styles
const Container = styled.div`
  display: flex;
  background-color: #fff;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;

const Activities = (props) => {
  const [activities, setActivities] = useState(null);
  const [currentActivitie, setCurrentActivitie] = useState(1);
  const { trailId } = useParams();

  useEffect(() => {
    const trail = props.selectedTrails;
    const allActivities = props.activities.data[trail].activities;
    // const filterActivities = allActivities.filter(item => item.type !== "origem-da-expressao");
    
    setActivities(allActivities);
  }, []);

  useEffect(() => {
    const convertIdToNumber = parseInt(trailId);

    setCurrentActivitie(convertIdToNumber);
  }, [trailId]);
  
  const handlerNextActivitie = () => {
    
    if (hasNextActivitie) {
      props.history.push({
        pathname: `/activities/${currentActivitie + 1}`,
      });
    }
  }

  const hasNextActivitie = () => {
    return true
  }

  const renderActivitie = (currentActivitie) => {
    // Renderizar component de acordo com o tipo de ativivdade
    switch (currentActivitie.type) {
      case "de-quem-sao-estes-olhos":
        return <WhoseEyesAreThese isActivitie={currentActivitie} handlerNextActivitie={handlerNextActivitie} />

      case "o-que-e-o-que-e":
        return <WhatIsWhatIs isActivitie={currentActivitie} handleNextQuestion={handlerNextActivitie} />

      case "coisas-nossas":
        return <p>coisas-nossas</p>;
      
      case "origem-da-expressao":
        return <InfoScreen isActivitie={currentActivitie} />

      default:
        return <h1>{currentActivitie.question}</h1>;

    }
  }

  const renderScreen = (currentActivitie) => {
    return (
      <>
        {
          currentActivitie
            ? (
              <>
                {renderActivitie(currentActivitie)}
                {/* {renderBtnNextQuestion()} */}
              </>
            )
            : <h1>não tem mais atividades</h1>
        }
      </>
    )
  }

  const renderBtnNextQuestion = () => (
    <button
      onClick={handlerNextActivitie}
    >
      próxima questão
    </button>
  )

  return (
    <Container>
      {
        activities && activities.length > 0
          ? renderScreen(activities[currentActivitie-1])
          : <h1>Carregando</h1>
      }
    </Container>
  );
}

export default connect(mapStateToProps)(Activities);
