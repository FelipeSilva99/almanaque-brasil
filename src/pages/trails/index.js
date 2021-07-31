import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

//Redux
import {
  selectedTrails,
} from '../../dataflow/modules/trails-module';

const mapStateToProps = state => ({
  trails: state.trails.data
});

const mapDispatchToProps = dispatch => ({
  selectedTrails: (info) => {
    dispatch(selectedTrails(info));
  },
});

export const Card = styled.button`
  min-height: 150px;
  margin: 10px;
  border-radius: 25px;
  padding: 25px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  > h1,h2 {
    text-decoration: none;
  }
  background-color: #fff;s

  &:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

export const Box = styled.div`
  min-height: 100vh;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding-left: 35px;
  height: 10vh;
  >h1{
    color: #F99D07;
  }
`;

const Trails = (props) => {

  const handleClick = (trail) => {
    props.history.push({pathname: '/activities'});
    props.selectedTrails(trail);
  }

  const renderTrails = (trails) => {
    return trails.map((trail, key) => {
      return (
        <Card key={key} onClick={() => handleClick(trail.id)}>
          <h2>{`Trilha ${trail.id}`}</h2>
        </Card>
      )
    })
  }

  const renderOptions = () => {
    return (
      <Row>
        <Card>
          <h2>Biblioteoca</h2>
        </Card>
        <Card>
          <h2>Conteúdo por tema</h2>
        </Card>
      </Row>
    )
  }

  const trails = props?.trails;

  return (
    <Box>
      <Header><h1>Olá Fulano!</h1></Header>
      {
        trails && (
          <>
            {renderTrails(trails)}
            {renderOptions()}
          </>
        ) 
      }
    </Box>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Trails);