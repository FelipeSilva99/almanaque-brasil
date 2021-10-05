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