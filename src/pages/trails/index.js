import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

//Component
import Footer from '../../components/footer/footerMenu';
import Map from './Map';
import ProgressHeader from '../../components/progressHeader';
import TrailCompleted from '../../components/modal/trailCompletedModal';
import AppCompletedModal from '../../components/modal/appCompletedModal';
import { trailState } from '../../utils/trail';

//Redux
import { selectedTrails } from '../../dataflow/modules/trails-module';
import { getTrailsThunk } from '../../dataflow/thunks/trails-thunk';

const mapStateToProps = state => ({
  trails: state.trails.data,
  actionsBook: state.actionsBook
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
  background-color: #fff;

  &:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

export const Box = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #f3f3f3;
`;

const ContentMap = styled.div`
  height: 80%;
  background-color: pink;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Trails = (props) => {
  const [isModalAppCompleted, setIsModalAppCompleted] = useState(undefined);
  const [isModalTrailCompleted, setIsModalTrailCompleted] = useState({isModal: undefined, trailId: null});
  const [trailsState, setTrailsState] = useState([]);
  const [qtdTrailComplete, setQtdTrailComplete] = useState(0);

  useEffect(() => {
    const listActionsBook = [...props.actionsBook.synced, ...props.actionsBook.pendingSync];
    let trailsState = props.trails.map(trail => trailState(trail.id, listActionsBook, trail));
    let qtdTrailComplete = trailsState.filter(item => item.state === 'done').length;

    setTrailsState(trailsState);
    setQtdTrailComplete(qtdTrailComplete);

    const isAppFinished = trailsState.every(trail => trail.status === 'done')

    if (isAppFinished) {
      setIsModalAppCompleted(true)
    } else {
      setIsModalAppCompleted(false)
    }

	}, [props.actionsBook, props.trails]);

	useEffect(() => {
		props.getTrailsThunk();
	}, []);

  const handleActivities = (trail) => {
    props.history.push({pathname: '/activities'});
    props.selectedTrails(trail);
  }

  const handleCloseModalCompleteTrail = () => {
    setIsModalTrailCompleted({isModal: false});
  }

  const handleClickModal = () => {
    handleCloseModalCompleteTrail();
    handleActivities(isModalTrailCompleted.trailId);
  }

  const handleClick = (trailId, key) => {
    const isTrailComplete = trailsState.filter(i => i.trailId === trailId.id);

    if(isTrailComplete[0].state === 'done') {
      setIsModalTrailCompleted({isModal: true, trailId: key});
    } else {
      handleActivities(key);
    }
  }

  const handleCloseModal = () => {
    setIsModalAppCompleted(false);
  }

  // const renderTrails = (trails) => {
  //   return trails.map((trail, key) => {
  //     return (
  //       <Card key={key} onClick={() => handleClick(trail.id)}>
  //         <h2>{`Trilha ${trail.id}`}</h2>
  //       </Card>
  //     )
  //   })
  // }

  const trails = props?.trails;
  return (
    <Box>
      <ProgressHeader
        trails={qtdTrailComplete}
        actionsBook={[...props.actionsBook.synced, ...props.actionsBook.pendingSync]}
      />
      {
        trails && (
          <ContentMap>
            {/* {renderTrails(trails)} */}
            <Map trails={trails} trailsState={trailsState} goToActivitie={handleClick}></Map>
          </ContentMap>
        ) 
      }
      <Footer screen='trails' />

      {isModalTrailCompleted.isModal && <TrailCompleted handleClickModal={handleClickModal} handleCloseModal={handleCloseModalCompleteTrail}/>}
      {isModalAppCompleted && <AppCompletedModal handleCloseModal={handleCloseModal} /> }
    </Box>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Trails);