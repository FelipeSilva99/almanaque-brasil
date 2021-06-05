import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getActivitiesThunk } from '../../dataflow/thunks/activities-thunk'
import * as Styles from './styles'

const mapDispatchToProps = dispatch => ({
  getActivities: (trailId) => dispatch(getActivitiesThunk(trailId))
});

const mapStateToProps = state => ({
  activities: state.activities
})

const Acitivities = (props) => {
  const { trailId } = useParams();

  useEffect(() => {
    props.getActivities(trailId)
  }, [])

  const returnActivities = (activities) => {
    return activities.map((activitie, key) => {
      return (
        <Styles.ActivitieDescription key={key}>
          <p>{activitie.question}</p>
        </Styles.ActivitieDescription>
      );
    })
  }

  return (
    <>
      <h1>Hello</h1>
      <h1>{`Activities trilha ${trailId}`}</h1>
      <br/>
      <br/>
      {
        props.activities && props.activities.data
        ? returnActivities(props.activities.data)
        : <p>carregando...</p>
      }
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Acitivities);