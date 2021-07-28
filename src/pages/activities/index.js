import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  useParams,
} from "react-router-dom";

//Components
import WhatIsWhatIs from './whatIsWhatIs';
import WhoseEyesAreThese from './whoseEyesAreThese';
import InfoScreen from './infoScreen';
import DidYouKnow from './didYouKnow';
import IfTurnsOn from './ifTurnsOn';
import OurStuff from './ourStuff';
import EnigmaticWord from './enigmaticWord'

const mapStateToProps = state => ({
  activities: state.trails,
  selectedTrails: state.trails.selectedTrails,
})

// Styles
const Container = styled.div`
  display: flex;
  justify-content: center;
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

    setActivities(allActivities);
  }, [props.activities.data, props.selectedTrails]);

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
        return <WhoseEyesAreThese useActivitie={currentActivitie} handleNextQuestion={handlerNextActivitie} />

      case "o-que-e-o-que-e":
        return <WhatIsWhatIs useActivitie={currentActivitie} handleNextQuestion={handlerNextActivitie} />

      case "coisas-nossas":
        return <OurStuff useActivitie={currentActivitie} handleNextQuestion={handlerNextActivitie} />;
      
      case "origem-da-expressao":
        return <InfoScreen useActivitie={currentActivitie} handleNextQuestion={handlerNextActivitie} isShowLogo />

      case "eureka":
        return <InfoScreen useActivitie={currentActivitie} handleNextQuestion={handlerNextActivitie} eureka />
      
      case "voce-sabia":
        return <DidYouKnow useActivitie={currentActivitie} handlerNextActivitie={handlerNextActivitie}/>

      case "se-liga":
        return <IfTurnsOn useActivitie={currentActivitie} handlerNextActivitie={handlerNextActivitie}/>

      case "palavra-enigmatica":
        return <EnigmaticWord useActivitie={currentActivitie} handlerNextActivitie={handlerNextActivitie}/>

      default:
        return <h1>{currentActivitie.question}</h1>;

    }
  }

  const renderScreen = (currentActivitie) => {
    return (
      <>
        {
          currentActivitie
            ? renderActivitie(currentActivitie)
            : <h1>não tem mais atividades</h1>
        }
      </>
    )
  }

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
