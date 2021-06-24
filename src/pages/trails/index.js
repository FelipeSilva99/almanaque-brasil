import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Card,
  Header,
  Box,
  Row
} from './styles'

const mapStateToProps = state => ({
  trails: state.trails
});

const Home = (props) => {

  const handleClick = (trail) => {
    props.history.push({
      pathname: `/activities/${trail}`,
      state: { trail: trail }
    });
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

  const trails = props?.trails?.data;

  return (
    <Box>
      <Header><h1>Olá Fulano!</h1></Header>
      {
        trails
        ? (
          <>
            {renderTrails(trails)}
            {renderOptions()}
          </>
        ) 
        : <p>carregando...</p>
      }
    </Box>
  );
}

export default connect(
  mapStateToProps,
)(Home);