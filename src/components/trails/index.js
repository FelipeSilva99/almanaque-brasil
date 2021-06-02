import React from 'react';

import {
  createNewTrails
} from '../../modules/initiative-module';

const mapStateToProps = state => ({
  createNewTrails: state.trails.createNewTrails,
});

const mapDispatchToProps = dispatch => ({
  createNewTrails: info => {
    dispatch(createNewTrails(info));
  },
});

function Trails() {
  return (
    <div>
     <p>Almanaque Miguel Burnier</p>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Trails);
