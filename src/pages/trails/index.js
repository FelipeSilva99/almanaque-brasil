import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

//Images
// import grupo1149 from '../../images/trails/grupo1149.svg';
// import grupo1150 from '../../images/trails/grupo1150.svg';
// import grupo1151 from '../../images/trails/grupo1151.svg';
// import grupo1152 from '../../images/trails/grupo1152.svg';
// import grupo1153 from '../../images/trails/grupo1153.svg';
// import grupo1154 from '../../images/trails/grupo1154.svg';
// import grupo1155 from '../../images/trails/grupo1155.svg';
// import grupo1156 from '../../images/trails/grupo1156.svg';
// import grupo1157 from '../../images/trails/grupo1157.svg';
// import grupo1158 from '../../images/trails/grupo1158.svg';
// import grupo1159 from '../../images/trails/grupo1159.svg';

//Redux
import { selectedTrails } from '../../dataflow/modules/trails-module';
import { getTrailsThunk } from '../../dataflow/thunks/trails-thunk';

const mapStateToProps = state => ({
  trails: state.trails.data,
});

const mapDispatchToProps = dispatch => ({
  selectedTrails: (info) => {
    dispatch(selectedTrails(info));
  },

  getTrailsThunk: () => {
    dispatch(getTrailsThunk());
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

const Trails = (props) => {

	useEffect(() => {
		console.log("GET TOKEN")
		props.getTrailsThunk();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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

  const trails = props?.trails;

  return (
    <Box>
      {
        trails && (
          <>
            {renderTrails(trails)}
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