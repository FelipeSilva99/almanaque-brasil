import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

//Components
import TrailsWhatIs from '../../components/actitivities/whatIsWhatIs';
import WhoseEyesAreThese from '../../components/actitivities/whoseEyesAreThese';

const mapStateToProps = state => ({
  activities: state.trails,
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
  const [currentActivitie, setCurrentActivitie] = useState(0);

  useEffect(() => {
    const { trail } = props.history.location.state;
    const allActivities = props.activities.data[trail].activities;

    setActivities(allActivities);
  }, []);

  const handlerNextActivitie = () => {
    if (hasNextActivitie) {
      setCurrentActivitie(currentActivitie + 1);
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
        return <WhoseEyesAreThese activitie={currentActivitie} handlerNextActivitie={handlerNextActivitie} />

      case "o-que-e-o-que-e":
        return <TrailsWhatIs isActivitie={currentActivitie} handleNextQuestion={handlerNextActivitie} />

      case "coisas-nossas":
        return <p>coisas-nossas</p>;

      default:
        return <h1>{currentActivitie.question}</h1>;
    }
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
          ? (
            <>
              {renderActivitie(activities[currentActivitie])}
              {renderBtnNextQuestion()}
            </>
          )
          : <h1>Carregando</h1>
      }
    </Container>
  );
}

export default connect(mapStateToProps)(Activities);
