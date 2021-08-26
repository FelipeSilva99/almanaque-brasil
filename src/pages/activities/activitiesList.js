import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

//Components
import Header from '../../components/header/headerOnb';
import ActivitieIcon from '../../components/trail/activitieIcon'
import Way from '../../components/trail/way';

const mapStateToProps = state => ({
  activities: state.trails,
  selectedTrails: state.trails.selectedTrails,
})

// Styles
const Container = styled.div`
  padding: 1.25rem ;
  width: 100vw;
  height: 100%;
  background-color: #EDEDED ;
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
  background-color: #EDEDED ;
`;

const ActivitiesRow = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
`;

// const setActivitiesOrder = (quantity) => {
//   let nextItemIsSingular = true;
//   let linesArray = []
//   // console.log('quantity:',quantity)
//   for(let i = 0; i < quantity; i++) {
//     if(nextItemIsSingular) {
//       console.log("A")
//       nextItemIsSingular = false
//       linesArray.push("oneItem")
//     } else {
//       if((i+1) % 3 === 0) {
//         console.log("B")
//         nextItemIsSingular = true
//         linesArray.push("ignore")
//       }
//       else {
//         console.log("C")
//         linesArray.push("twoItems")
//       }
//     }
//   }
//   return linesArray;
// }

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

  // const makeListOfActivities = () => {
    
  // }

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
  
  return (
    <Container>
      <Header text='Atividades'/>

      <Trail>
      {activities && <Way linesQuantity={activities.length-1}/>}
        {
          activities && activities.length > 0
            ? renderActivities()
            // ?null
            : <h1>Carregando</h1>
        }
      </Trail>
    </Container>
  );
}

export default connect(mapStateToProps)(Activities);
