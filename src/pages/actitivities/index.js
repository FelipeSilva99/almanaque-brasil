import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getActivitiesThunk } from '../../dataflow/thunks/activities-thunk'
import styled from 'styled-components';

//Components
import Header from '../../components/header/index';
import TrailsWhatIs from '../../components/trails/whatIsWhatIs';
import Footer from '../../components/footer/index';

const mapDispatchToProps = dispatch => ({
  getActivities: (trailId) => dispatch(getActivitiesThunk(trailId))
});

const mapStateToProps = state => ({
  activities: state.activities
})

// Styles
const Container = styled.div`
  margin: auto;
  width: 90vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Acitivities = (props) => {
  const { trailId } = useParams();
  // const [nextQuestion, setNextQuestion] = useState(0);
  // const [isAnswer, setIsAnswer] = useState('disco');
  const [activities, setActivities] = useState(null);
  const [currentActivitie, setCurrentActivitie] = useState(0);

  useEffect(() => {
    props.getActivities(trailId)
  }, []);

  useEffect(() => {
    setActivities(props.activities.data)
  })

  // let listLetter = ['disco', 'chuva', 'rua'];

  // const handleNextQuestion = () => {
  //   setNextQuestion(nextQuestion + 1);
  //   setIsAnswer(listLetter[nextQuestion + 1])
  // };

  const renderActivitie = (currentActivitie) => {
    // Renderizar component de acordo com o tipo de ativivdade
    // switch (currentActivitie.type) {
    //   case value:
        
    //     break;
    
    //   default:
    //     break;
    // }
    console.log("CURRENTACTIVITIE:", currentActivitie)
    return (
      <h1>{currentActivitie.question}</h1>
    );
  } 

  const handlerNextActivitie = () => {
    if(hasNextActivitie) {
      setCurrentActivitie(currentActivitie+1)
    }
  }

  const hasNextActivitie = () => {
    return true
  }

  return (
    console.log("ACTIVITIES.STATE", activities),
    <Container>
      <Header />
      {/* <TrailsWhatIs
        renderQuestion={nextQuestion}
        isAnswer={isAnswer}
      /> */}
      { 
        activities ? renderActivitie(activities[currentActivitie+1]) : (<h1>Carregando</h1>) 
      }

      <button
        onClick={handlerNextActivitie}
      >próxima questão</button>

    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Acitivities);