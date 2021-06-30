import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const mapStateToProps = state => ({
  activities: state.trails,
  selectedTrails: state.trails.selectedTrails,
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

const Content = styled.button`
  margin: 1.5rem;
  width: ${props => props.type === 'origem-da-expressao' ? '30px' : '56px'};
  height: ${props => props.type === 'origem-da-expressao' ? '30px' : '56px'};
  background-color: ${props => props.type === 'origem-da-expressao' ? '#cfa151' : '#f8cc80'};
  border: ${props => props.type === 'origem-da-expressao' ? '2px solid #956517' : '2px solid #cfa151'};
  border-radius: 50%;
  cursor: pointer;
`;

const Activities = (props) => {
  const [activities, setActivities] = useState(null);

  useEffect(() => {
    const trail = props.selectedTrails;
    const allActivities = props.activities.data[trail].activities;
    
    setActivities(allActivities);
  }, []);

  const handlerNextActivitie = (item) => {
    
    if (hasNextActivitie) {
      if(item.type === 'origem-da-expressao') {
        props.history.push({
          pathname: `/origin-of-the-expression`,
        });

        return null;
      }

      props.history.push({
        pathname: `/activities/${item.id+1}`,
      });
    }
  }

  const hasNextActivitie = () => {
    return true
  }

  return (
    <Container>
      {
        activities && activities.length > 0
          ? activities.map(item => <Content type={item.type} onClick={() => handlerNextActivitie(item)}/>)
          : <h1>Carregando</h1>
      }
    </Container>
  );
}

export default connect(mapStateToProps)(Activities);
