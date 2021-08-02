import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

//Components
import ActivitieIcon from '../../components/trail/activitieIcon'
import Way from '../../components/trail/way'

const mapStateToProps = state => ({
  activities: state.trails,
  selectedTrails: state.trails.selectedTrails,
})

// Styles

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Trail = styled.div`
  display: flex;
  width: 375px;
  background-color: transparent;
  overflow: hidden;
  width: 100vw;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #EDEDED ;
`;

const ActivitiesRow = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
`;





const Activities = (props) => {
  const [activities, setActivities] = useState(null);


  useEffect(() => {
    const trail = props.selectedTrails;
    const allActivities = props.activities.data[trail].activities;
    
    setActivities(allActivities);
  }, [props.selectedTrails, props.activities.data]);

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

  const makeListOfActivities = () => {
    
  }

  const renderActivities = () => {
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
          return
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
                {/* <h1>Mais um</h1> */}

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
  
  return (
    <Container>
      <Trail>
      {activities && <Way linesQuantity={activities.length-1}/>}
        {
          activities && activities.length > 0
            ? renderActivities()
            : <h1>Carregando</h1>
        }
      </Trail>
    </Container>
  );
}

export default connect(mapStateToProps)(Activities);
