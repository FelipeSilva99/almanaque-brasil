import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

//Components
import Header from '../../components/header';
import ActivitieIcon from '../../components/trail/activitieIcon';
import Way from '../../components/trail/way';
import ActivitiesCompleted from '../../components/modal/activitiesCompletedModal';

//Assets
import aguaMarinhaStone from '../../images/stones/aguaMarinha/aguaMarinhaLogo.svg';
import aguaMarinha from '../../images/stones/aguaMarinha/aguaMarinha.svg';
import church from '../../images/trails/church.svg';
import houses from '../../images/trails/houses.svg';
import trainStation from '../../images/trails/trainstation.svg';

import { postActionsBook } from '../../dataflow/thunks/actionsBook-thunks';

const mapStateToProps = state => ({
  activities: state.trails,
  selectedTrails: state.trails.selectedTrails,
  actionsBook: state.actionsBook,
})

const mapDispatchToProps = dispatch => ({
  postActionsBook: (info) => {
    dispatch(postActionsBook(info));
  },
});

// Styles
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #FAFAFA;
`;

const Stone = styled.div`
  display: flex;
  justify-content: center;
  padding: ${props => props.padding || '4rem 0 5rem'};
  div{
    width: 2rem;
    height: 2rem;
    background: red;
    }
`;

const Trail = styled.div`
  display: flex;
  width: 375px;
  background-color: transparent;
  overflow: hidden;
  width: 100%;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  
  h1 {
    padding-top: 5rem;
  }
`;

const ActivitiesRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
`;

const Activities = (props) => {
  const [activities, setActivities] = useState(null);
  const [activitiesProgress, setActivitiesProgress] = useState(undefined);
  const [isModalActivitiesCompleted, setIsModalActivitiesCompleted] = useState(undefined);

  const backgroundDecorations = {
    top: church,
    center: houses,
    bottom: trainStation
  }

  useEffect(() => {
    if (activities === null) return

    let canBeDone = true;

    const activitiesStates = activities.map((activitie, ind, array) => {
      const isDoneActivitie = isDone(activitie.id);
      // const background = setBackgroundColor(activitie)
      const activitieState = isDoneActivitie ? isDoneActivitie : defineState(canBeDone && !isDoneActivitie)
      if (!isDoneActivitie) canBeDone = false
      return { id: activitie.id, state: activitieState }
    });

    setActivitiesProgress(activitiesStates);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activities]);

  useEffect(() => {
    const trail = props.selectedTrails;
    const allActivities = props.activities.data[trail].activities;
    const lastActivityDone = props.history?.location?.state?.idActivitie;
    const idLastActivity = allActivities[allActivities.length - 1].id;
    const isLastActivity = lastActivityDone === idLastActivity;

    if(isLastActivity) {
      setIsModalActivitiesCompleted(true);
    }

    setActivities(allActivities);
  }, [props.selectedTrails, props.activities.data, props.history?.location?.state?.idActivitie, activitiesProgress]);

  useEffect(() => {
    props.postActionsBook(props.actionsBook)
  }, [props]);

  const handlerNextActivitie = (index) => {
    props.history.push({
      pathname: `/activities/${index + 1}`,
    });
  }

  const renderActivities = () => {
    // logic for deciding whether to return one or two items in a row
    if (activitiesProgress === undefined) return
    let nextItemIsSingular = true;

    return activities.map((item, index, array) => {
      if (nextItemIsSingular) {
        nextItemIsSingular = false
        return (
          <ActivitiesRow key={index}>
            <ActivitieIcon
              activitieState={activitiesProgress[index]?.state}
              item={item}
              itemValue={index}
              onClick={() => handlerNextActivitie(index)}
              history={props.history}
            >{index}</ActivitieIcon>
          </ActivitiesRow>
        )
      } else {
        if ((index + 1) % 3 === 0) {
          nextItemIsSingular = true

          // skip this rendering
          return null
        } else {
          return (
            <ActivitiesRow key={index}>
              <ActivitieIcon
                activitieState={activitiesProgress[index]?.state}
                item={item}
                itemValue={index}
                lineTo={'straight'}
                onClick={() => handlerNextActivitie(index)}
                history={props}
              >{index}</ActivitieIcon>

              <ActivitieIcon
                activitieState={activitiesProgress[index + 1]?.state}
                item={array[index + 1]}
                itemValue={index + 1}
                lineTo={'left'}
                onClick={() => handlerNextActivitie(index + 1)}
                history={props}
              >{index + 1}</ActivitieIcon>
            </ActivitiesRow>
          )
        }
      }
    })
  }

  function isDone(activityId) {
    const actionsBook = [...props.actionsBook.synced, ...props.actionsBook.pendingSync]
    if (actionsBook === undefined) return

    const filteredActions = actionsBook.filter((action) => {
      return action.activityId === activityId
    })
    
    let isActivityError = filteredActions.length === 3 && filteredActions.filter(item => !item.success);

    if (isActivityError.length === 3) return 'err'
    else if (filteredActions.length > 0) {
      const checkIfIsDone = filteredActions.findIndex((action) => {
        return action.success === true
      });

      return checkIfIsDone === -1 ? false : 'done'
    } else return false
  }

  function defineState(canBeDone) {
    if (canBeDone) return "waiting"
    else return "bloqued"
  }

  const renderLogoStone = () => {
    const name = props.activities.data[props.selectedTrails].name;
    switch (name) {
      case 'Água-Marinha':
        return (
          <Stone>
            <img
              src={aguaMarinha}
              alt={name}
              style={{ width: '12rem' }}
            />
          </Stone>
        );

      default:
        return
    }
  }

  const renderStone = () => {
    const name = props.activities.data[props.selectedTrails].name;

    switch (name) {
      case 'Água-Marinha':
        return (
          <Stone padding='4rem 0 2rem 0'>
            <img
              src={aguaMarinhaStone}
              alt={name}
              style={{ width: '4rem' }}
            />
          </Stone>
        );

      default:
        return
    }
  }

  return (
    <Container>
      <Header
        title={props.activities.data[props.selectedTrails].name}
        goBack={() => { props.history.push('/trails') }}
      />

      {renderLogoStone()}

      <Trail>
        {activities && 
          <Way
            progress={activitiesProgress}
            backgroundDecorations={backgroundDecorations}
            linesQuantity={activities.length - 1}
          />
        }
        {
          activities && activities.length > 0
            ? renderActivities()
            : <h1>Carregando</h1>
        }
      </Trail>

      {renderStone()}

      {isModalActivitiesCompleted && <ActivitiesCompleted history={props.history}/>}
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Activities);
