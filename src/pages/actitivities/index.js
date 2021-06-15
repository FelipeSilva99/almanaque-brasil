import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getActivitiesThunk } from '../../dataflow/thunks/activities-thunk'
import styled from 'styled-components';

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
const ActivitieDescription = styled.div`
  margin: 10px 1% 0 1%;
  min-height: 30px;
  background-color: #35D461;
`

const Container = styled.div`
  display: flex;
  background-color: #fff;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;

  /* @media (max-width: 375px) {
    height: 100%;
  } */
`;

const Acitivities = (props) => {
  const { trailId } = useParams();
  const [nextQuestion, setNextQuestion] = useState(0);
  const [isAnswer, setIsAnswer] = useState('disco');
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

      case "O que é o que é?":
        return  <TrailsWhatIs isActivitie={currentActivitie} handleNextQuestion={handlerNextActivitie} />
    
      default:
        return <h1>{currentActivitie.question}</h1>;
    }
  } 

  const handleNextQuestion = () => {
    setNextQuestion(nextQuestion + 1);
    setIsAnswer(listLetter[nextQuestion + 1])
  };

  let listLetter = ['disco', 'chuva', 'rua'];

  // const handleCleanAnswer = () => {
  //   setClearAnswer(true);
  // }
   

  // const returnActivities = (activities) => {
  //   return activities.map((activitie, key) => {
  //     return (
  //       <ActivitieDescription key={key}>
  //         <p>{activitie.question}</p>
  //       </ActivitieDescription>
  //     );
  //   })
  // }
  
  return (
    <Container>
      {
        activities && activities.length > 0
        // activities
        ? renderActivitie(activities[currentActivitie+1])
        : (<h1>Carregando</h1>) 
      }
      <button
        onClick={handlerNextActivitie}
      >próxima questão</button>

    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Acitivities);