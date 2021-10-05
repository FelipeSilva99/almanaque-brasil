let canBeDone = true;
function countActions(actions, action) {
  return actions.reduce((a, v) => (v === action ? a + 1 : a), 0)
}
export function trailState(trailId, actionsBook) {
  let trailsCompleted = 0
  if (actionsBook === undefined) return 'todo'


  const filteredTrail = actionsBook.filter((action) => {
    return action.trailId === trailId
  })

  
  if (filteredTrail.length === 0) return 'todo'
  if (filteredTrail.length > 0) {
    const correctActivitiesIds = filteredTrail.filter(action => action.success === true);
    trailsCompleted = correctActivitiesIds.length;
    if (correctActivitiesIds.length === 10) return 'done'
    const wrongActivitiesIds = filteredTrail.filter(action => action.success === false);
    console.log('filteredTrail', wrongActivitiesIds)
    
    let actionsById = [];
    let allActions = [];

    wrongActivitiesIds.map(action => {
      allActions.push(action.activityId);
      if (actionsById.includes(action.activityId))
        actionsById.push(action.activityId)
    });

    allActions.map(action => console.log('activityId', action.activityId, 'contagem', countActions(allActions, action.activityId)))

    
  }


  // let isActivityError = filteredTrail.length >= 3 && filteredTrail.filter(item => !item.success);

  // if (isActivityError.length >= 3) return 'wrong'
  // else if (filteredTrail.length > 0) {
  //   const checkIfIsDone = filteredTrail.findIndex((action) => {
  //     return action.success === true
  //   });

  //   return checkIfIsDone === -1 ? false : 'right'
  // } else return false
}

// export function defineState(canBeDone) {
//   if (canBeDone) return "waiting"
//   else return "bloqued"
// }

// export const activitiesStates = (activitie, actionsBook) => {
//   const listActionsBook = [...actionsBook.synced, ...actionsBook.pendingSync]
//   const isDoneActivitie = trailState(activitie.id, listActionsBook);
//   const activitieState = isDoneActivitie ? isDoneActivitie : defineState(canBeDone && !isDoneActivitie)
//   if (!isDoneActivitie) canBeDone = false;
//   return activitieState
// };
