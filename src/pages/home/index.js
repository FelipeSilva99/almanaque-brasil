import React, { useEffect } from 'react';
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
  const returnTrails = (trails) => {
    return trails.map((trail, key) => {
      return (
        <Link key={key} to={`/activities/${trail.id}`}>
          <Card >
            <h2>{`Trilha ${trail.id}`}</h2>
          </Card>
        </Link>
      )
    })
  }
  return (
    <Box>
      <Header><h1>Olá Fulano!</h1></Header>
      {
        props.trails && props.trails.data
        ? returnTrails(props.trails.data)
        : <p>carregando...</p>
      }
      {
        (props.trails && props.trails.data) && (
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

    </Box>
  );
}

export default connect(
  mapStateToProps,
)(Home);