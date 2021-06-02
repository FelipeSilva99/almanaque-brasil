import React from 'react';
import { connect } from 'react-redux';

import {
  getTrailsThunk
} from '../../dataflow/thunks/trails-thunk';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  getTrailsThunk: () => {
    dispatch(getTrailsThunk())
  },

});

function Trails(props) {
  const handleClick = () => {
    props.getTrailsThunk();
  }

  return (
    <div>
     <p>Almanaque Miguel Burnier</p>
     <button onClick={handleClick}>GetTrails</button>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Trails);
