import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

//Components
import Header from '../../components/header';
import ActivitieIcon from '../../components/trail/activitieIcon';
import Way from '../../components/trail/way';
import ActivitiesCompleted from '../../components/modal/activitiesCompletedModal';
import activityDesign from './activityDesign';

//Assets
import aguaMarinhaStone from '../../images/activity/stones/aguaMarinha/aguaMarinhaLogo.svg';
import aguaMarinha from '../../images/activity/stones/aguaMarinha/aguaMarinha.svg';
import church from '../../images/activity/houses/blue/church.svg';
import houses from '../../images/activity/houses/blue/houses.svg';
import trainStation from '../../images/activity/houses/blue/trainstation.svg';

//Redux
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
  
  img {
    width: ${props => props.width};

  }
  /* div{
    width: 2rem;
    height: 2rem;
    } */
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
  const [score, setScore] = useState(0)
  const [activities, setActivities] = useState(null);
  const [currentActivity, setCurrentActivity] = useState(null);
  const [activitiesProgress, setActivitiesProgress] = useState(undefined);
  const [isModalActivitiesCompleted, setIsModalActivitiesCompleted] = useState(undefined);

  const activityName = activityDesign && activityDesign[currentActivity];

  const backgroundDecorations = {
    top: activityName?.houses?.church,
    center: activityName?.houses?.houses,
    bottom: activityName?.houses?.trainStation
  }

  useEffect(() => {
    if (activities === null) return

    let canBeDone = true;

    // let newListActivities = [];

    const activitiesStates = activities.map((activitie) => {
      const isDoneActivitie = isDone(activitie.id);
      // const background = setBackgroundColor(activitie)
      const activitieState = isDoneActivitie ? isDoneActivitie : defineState(canBeDone && !isDoneActivitie)
      if (!isDoneActivitie) canBeDone = false;
      // newListActivities.push({...activitie, state: activitieState});
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
    const { pendingSync, synced } = props.actionsBook;
    let pendingScore;
    let syncedScore;

    if (pendingSync.length > 0) {
      let pendingList = pendingSync.filter(action => action.success === true);
      let trailId = synced[pendingSync.length - 1]?.trailId;

      const points = pendingList
      .filter(action => action.trailId === trailId)
      .map(action => action.score);

      if (points.length > 1) {
        pendingScore = points.length > 0 && points.reduce((prev, cur) => prev + cur);
      } else {
        pendingScore = +points.join("");
      }
    } else {
      console.log("no pendingSync actions");
    }
    
    if (synced.length > 0) {
      const syncedList = synced.filter(action => action.success === true);
      const trailId = synced[synced.length - 1]?.trailId;

      const points = syncedList
      .filter(action => action.trailId === trailId)
      .map(action => action.score);

      syncedScore = points.length > 0 && points.reduce((prev, cur) => prev + cur);
    } else {
      console.log("no synced actions");
    }
    
    if (pendingScore > 0) {
      setScore(pendingScore + syncedScore);
    } else {
      setScore(syncedScore);
    }
  }, [props.actionsBook]);
  
  useEffect(() => {
    props.postActionsBook(props.actionsBook)
  }, [props]);

  useEffect(() => {
    const useCurrentActivity = props.activities.data[props.selectedTrails].name;

    setCurrentActivity(useCurrentActivity);
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
              iconBloqued={activityName?.stone?.bloqued}
              iconVisualized={activityName?.stone?.visualized}
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
                iconBloqued={activityName?.stone?.bloqued}
                iconVisualized={activityName?.stone?.visualized}
              >{index}</ActivitieIcon>

              <ActivitieIcon
                activitieState={activitiesProgress[index + 1]?.state}
                item={array[index + 1]}
                itemValue={index + 1}
                lineTo={'left'}
                onClick={() => handlerNextActivitie(index + 1)}
                history={props}
                iconBloqued={activityName?.stone?.bloqued}
                iconVisualized={activityName?.stone?.visualized}
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

    let isActivityError = filteredActions.length >= 3 && filteredActions.filter(item => !item.success);

    if (isActivityError.length >= 3) return 'wrong'
    else if (filteredActions.length > 0) {
      const checkIfIsDone = filteredActions.findIndex((action) => {
        return action.success === true
      });

      return checkIfIsDone === -1 ? false : 'right'
    } else return false
  }

  function defineState(canBeDone) {
    if (canBeDone) return "waiting"
    else return "bloqued"
  }

  const renderStone = () =>  (
    <Stone width='12rem'>
      <img
        src={activityName?.stone.stone}
        alt={activityName?.name}
      />
    </Stone>
  )

  const renderLogoStone = () => (
    <Stone padding='4rem 0 2rem 0' width='4rem'>
      <img
        src={activityName?.stone.logo}
        alt={activityName?.name}
      />
    </Stone>

  )

  return (
    <Container>
      <Header
        title={activityName?.name}
        goBack={() => { props.history.push('/trails') }}
      />

      {renderStone()}

      <Trail>
        {activities && activityName &&
          <Way
            progress={activitiesProgress}
            backgroundDecorations={backgroundDecorations}
            linesQuantity={activities.length - 1}
            lineColor={activityName?.color}
          />
        }
        {
          activities && activities.length > 0
            ? renderActivities()
            : <h1>Carregando</h1>
        }
      </Trail>

      {renderLogoStone()}
      {isModalActivitiesCompleted && <ActivitiesCompleted score={score} history={props.history}/>}
      
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Activities);
