let canBeDone = true;

export function isDone(activityId, actionsBook) {
  if (actionsBook === undefined) return

  const filteredActions = actionsBook.filter((action) => {
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

export function defineState(canBeDone) {
  if (canBeDone) return "waiting"
  else return "bloqued"
}

export const activitiesStates = (activitie, actionsBook) => {
  const listActionsBook = [...actionsBook.synced, ...actionsBook.pendingSync]
  const isDoneActivitie = isDone(activitie.id, listActionsBook);
  const activitieState = isDoneActivitie ? isDoneActivitie : defineState(canBeDone && !isDoneActivitie)
  if (!isDoneActivitie) canBeDone = false;
  return activitieState
};

export const allowScore = (trailId, activityId, actionsBook) => {
  if(actionsBook.length === 0) return true;
  const filteredByTrail = actionsBook.filter(action => action.trailId === trailId);
  const filteredByActivity = filteredByTrail.filter(action => action.activityId === activityId);
  const correctAnswer = filteredByActivity.filter(action => action.success === true);
  if (correctAnswer.length >= 1) return false;

  const wrongAnswers = filteredByActivity.filter(action => action.success === false);
  const tries = wrongAnswers.length
  if(tries >= 3) return false;

  return true
}