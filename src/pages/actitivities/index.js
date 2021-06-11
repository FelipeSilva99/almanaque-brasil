import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getActivitiesThunk } from '../../dataflow/thunks/activities-thunk'
import * as Styles from './styles'
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
  const [nextQuestion, setNextQuestion] = useState(0);
  const [isAnswer, setIsAnswer] = useState('disco');
  const [clearAnswer, setClearAnswer] = useState(undefined);

  
  useEffect(() => {
    props.getActivities(trailId)
  }, []);

  const handleNextQuestion = () => {
    setNextQuestion(nextQuestion + 1);
    setIsAnswer(listLetter[nextQuestion + 1])
  };

  const handleTrails = () => {
    const activities = props.activities.data.map(item => item.type);

    switch (activities) {
      case 'O-que-e-o-que-e?':
        return  <TrailsWhatIs handleNextQuestion={handleNextQuestion} isAnswer={isAnswer}/>
        break;
      case 'coisas-nossas':
        console.log('Coisas Nossas');
      case 'papayas':
        console.log('De quem são esses olhos?');
        break;
      default:
        console.log(`Error`);
    }
  }

  let listLetter = ['disco', 'chuva', 'rua'];

  const handleCleanAnswer = () => {
    setClearAnswer(true);
  }
   

  const returnActivities = (activities) => {
    return activities.map((activitie, key) => {
      return (
        <Styles.ActivitieDescription key={key}>
          <p>{activitie.question}</p>
        </Styles.ActivitieDescription>
      );
    })
  }
  
  return (
    <Container>
      <Header />
      <TrailsWhatIs
        handleNextQuestion={handleNextQuestion}
        isAnswer={isAnswer}
      />
      <Footer
        handleCleanAnswer={handleCleanAnswer}
        handleNextQuestion={handleNextQuestion}
      />
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Acitivities);