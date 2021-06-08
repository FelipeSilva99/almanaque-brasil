import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as TrailsStyles from './styles';
import { Link } from 'react-router-dom';

import {
  getTrailsThunk
} from '../../dataflow/thunks/trails-thunk';

const mapStateToProps = state => ({
  trails: state.trails
});

const mapDispatchToProps = dispatch => ({
  getTrailsThunk: () => {
    dispatch(getTrailsThunk());
  },

});

function Trails(props) {
  const handleClick = () => {
    props.getTrailsThunk();
  }

  useEffect(() => {
    props.getTrailsThunk();
  }, []);


  const returnTrails = (trails) => {
    return trails.map((trail, key) => {
      return (
        <Link to={`/activities/${trail.id}`}>
          <TrailsStyles.Trail key={key}>
            <h2>{`Trilha ${trail.id}`}</h2>
            
          </TrailsStyles.Trail>
        </Link>
      )
    })
  }

  return (
    <TrailsStyles.Box>
    {console.log('trails', props.trails.data)}

      <h1>Trails</h1>
      <div>
        {
          props.trails && props.trails.data ? returnTrails(props.trails.data) : <p>carregando...</p>
        }
      </div>
    </TrailsStyles.Box>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Trails);
