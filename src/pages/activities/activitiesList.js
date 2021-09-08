import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

//Components
import Header from '../../components/header/headerOnb';
import ActivitieIcon from '../../components/trail/activitieIcon'
import Way from '../../components/trail/way';

//Assets
import aquamarineStone from '../../images/stones/aquamarine2.svg'
import aquamarine from '../../images/stones/aquamarine.svg'
import church from '../../images/trails/church.svg'
import houses from '../../images/trails/houses.svg'
import trainStation from '../../images/trails/trainstation.svg'

import { postActionsBook } from '../../dataflow/thunks/actionsBook-thunks';


const mapStateToProps = state => ({
  activities: state.trails,
  selectedTrails: state.trails.selectedTrails,
  actionsBook: state.actionsBook
})

const mapDispatchToProps = dispatch => ({
  postActionsBook: (info) => {
    dispatch(postActionsBook(info));
  },
});

// Styles
const Container = styled.div`
  padding: 1.25rem ;
  width: 100vw;
  height: 100%;
  background-color: #FAFAFA;
`;

const Stone = styled.div`
  display: flex;
  justify-content: center;
  margin: ${props => props.margin || '4rem 0 6rem 0'};
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
`;

const ActivitiesRow = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
`;

const Activities = (props) => {
  const [activities, setActivities] = useState(null);
  const backgroundDecorations = {
    top: church,
    center: houses,
    bottom: trainStation
  }

  useEffect(() => {
    const trail = props.selectedTrails;
    const allActivities = props.activities.data[trail].activities;
    
    setActivities(allActivities);
  }, [props.selectedTrails, props.activities.data]);

  useEffect(() => {
    props.postActionsBook(props.actionsBook)
  }, [])

  const handlerNextActivitie = (index) => {
    if (hasNextActivitie) {
      props.history.push({
        pathname: `/activities/${index+1}`,
      });
    }
  }

  const hasNextActivitie = () => {
    return true
  }

  const renderActivities = () => {
    // logic for deciding whether to return one or two items in a row
    let nextItemIsSingular = true;
    return activities.map((item, index, array) => {
      if(nextItemIsSingular) {
        nextItemIsSingular = false
        return(
          <ActivitiesRow key={index}>
            <ActivitieIcon
            item={item}
            itemValue={index}
            onClick={() => handlerNextActivitie(index)}
            history={props}
            >{index}</ActivitieIcon>
          </ActivitiesRow>
        )
      } else {
        if((index+1) % 3 === 0) {
          nextItemIsSingular = true
          // skip this rendering
          return null
        }
        else {
          return (
            <ActivitiesRow key={index}>
              <ActivitieIcon
                item={item}
                itemValue={index}
                lineTo={'straight'}
                onClick={() => handlerNextActivitie(index)}
                history={props}
                >{index}</ActivitieIcon>

              <ActivitieIcon
                item={array[index+1]}
                itemValue={index+1}
                lineTo={'left'}
                onClick={() => handlerNextActivitie(index+1)}
                history={props}
                >{index+1}</ActivitieIcon>
            </ActivitiesRow>
          )
        }
      }
    })
  }

  function isDone(activitie) {
    const actionsBook = [...props.actionsBook.synced, ...props.actionsBook.pendingSync]

    const filteredActions = actionsBook.actions.filter((action) => {
      return action.activityId === activitie
    })
  
    if(filteredActions.length >= 3) return true
    else if(filteredActions.length > 0) {
      const checkIfIsDone = filteredActions.findIndex((action) => {
        return action.success === true
      })
      return checkIfIsDone === -1 ? false : true
    } else return false
  }
  
  function defineState(canBeDone) {
    if(canBeDone) return "Em espera"
    else return "Bloqueada"
  }

  const renderLogoStone = () => {
    switch (props.activities.data[props.selectedTrails].name) {
      case 'Água-Marinha':
        return (
          <Stone>
            <img src={aquamarine} />
          </Stone>
        );

    
      default:
        return
    }
  }

  const renderStone = () => {
    switch (props.activities.data[props.selectedTrails].name) {
      case 'Água-Marinha':
        return (
          <Stone margin='4rem 0 2rem 0'>
            <img src={aquamarineStone} />
          </Stone>
        );

    
      default:
        return
    }
  }
  
  return (
    <Container>
      <Header 
        onClick={() => {props.history.push('/trails')}}
        text={props.activities.data[props.selectedTrails].name}
      />

      {renderLogoStone()}

      <Trail>
      {activities && <Way backgroundDecorations={backgroundDecorations} linesQuantity={activities.length-1}/>}
        {
          activities && activities.length > 0
            ? renderActivities()
            : <h1>Carregando</h1>
        }
      </Trail>

      {renderStone()}
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Activities);
