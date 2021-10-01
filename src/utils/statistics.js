export function chancesAtActivity(activitieId, actionsBook) {
  let chances = 3

  // percorrer actions book e encontrar atividades com o id
  const attempts = actionsBook.filter((attempt) => {
    return activitieId === attempt.activityId
  })
  
  const isSucess = attempts.filter((attempt) => {
    return attempt.success === true
  })

  // Se o usuário já acertou retorna 0
  if(isSucess.length > 0) return 0

  return chances - attempts.length
}
