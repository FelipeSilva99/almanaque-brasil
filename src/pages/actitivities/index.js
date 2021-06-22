import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getActivitiesThunk } from '../../dataflow/thunks/activities-thunk'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//Components
import TrailsWhatIs from '../../components/trails/whatIsWhatIs';
import WhoseEyesAreThese from '../../components/trails/whoseEyesAreThese';

const mapDispatchToProps = dispatch => ({
  getActivities: (trailId) => dispatch(getActivitiesThunk(trailId))
});

const mapStateToProps = state => ({
  activities: state.activities
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

const Acitivities = (props) => {
  const { trailId } = useParams();
  const [activities, setActivities] = useState(null);
  const [currentActivitie, setCurrentActivitie] = useState(0);
  
  useEffect(() => {
    props.getActivities(trailId);
  }, []);

  useEffect(() => {
    setActivities(props.activities.data);
  })

  const handlerNextActivitie = () => {
    if(hasNextActivitie) {
      setCurrentActivitie(currentActivitie+1)
    }
  }

  const hasNextActivitie = () => {
    return true
  }

  const renderActivitie = (currentActivitie) => {
    // Renderizar component de acordo com o tipo de ativivdade
    switch (currentActivitie.type) {
      case "de-quem-sao-estes-olhos":
        return <WhoseEyesAreThese activitie={currentActivitie} handlerNextActivitie={handlerNextActivitie}/>

      case "o-que-e-o-que-e":
        return  <TrailsWhatIs isActivitie={currentActivitie} handleNextQuestion={handlerNextActivitie} />
    
      case "coisas-nossas":
        return  console.log('coisas-nossas');

      default:
        return <h1>{currentActivitie.question}</h1>;
    }
  }

  
  return (
    <Container>
      {
        activities && activities.length > 0
        ? renderActivitie(activities[currentActivitie+1])
        : (<h1>Carregando</h1>) 
      }
      <Link  to={`/activities/${currentActivitie+1}`}>
        <button
          onClick={handlerNextActivitie}
        >próxima questão</button>

      </Link>

    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Acitivities);