// Libs
import axios from 'axios';
import { Auth } from 'aws-amplify'

import {
  getTrails,
} from '../modules/trails-module';

export const getTrailsThunk = () => async (dispatch, getState) => {
  const { actionsBook } = getState()

  const auth = await Auth.currentAuthenticatedUser()
  const idToken = auth.signInUserSession.idToken.jwtToken;

  try {
    const response = await axios({
			method: 'get',
			url: `${process.env.REACT_APP_TRAILS_ENDPOINT}`,
			headers: {
        'Content-Type': 'application/json',
				'Authorization': `${idToken}`,
			},
		})

    let trails = response.data.Items;
    let canBeDone = true;

    function isDone(activityId) {
      const listActionsBook = [...actionsBook.synced, ...actionsBook.pendingSync]
      if (actionsBook === undefined) return

      const filteredActions = listActionsBook.filter((action) => {
        return action.activityId === activityId
      })

      let isActivityError = filteredActions.length >= 3 && filteredActions.filter(item => !item.success);

      if (isActivityError.length >= 3) return 'wrong'
      else if (filteredActions.length > 0) {
        const checkIfIsDone = filteredActions.findIndex((action) => {
          return action.success === true
        });

        return checkIfIsDone === -1 ? false : 'right'
      } else return false
    }

    function defineState(canBeDone) {
      if (canBeDone) return "waiting"
      else return "bloqued"
    }

    const activitiesStates = (activitie) => {
      const isDoneActivitie = isDone(activitie.id);
      const activitieState = isDoneActivitie ? isDoneActivitie : defineState(canBeDone && !isDoneActivitie)
      if (!isDoneActivitie) canBeDone = false;
      return activitieState
    };

    for(let i = 0; i<trails.length; i++) {
      for(let j = 0; j<trails[i].activities.length; j ++) {
        trails[i].activities[j] = {
          ...trails[i].activities[j],
          "status": activitiesStates(trails[i].activities[j])
        }
      }
    }

    dispatch(getTrails(trails));
  }
  catch (err) {
    console.log(err)
  }
}

