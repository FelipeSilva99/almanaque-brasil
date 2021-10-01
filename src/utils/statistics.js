// Percorre o actions book e retorna a quantidade de chances restantes para determinada atividade.
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


// Percorre o actions book e retorna a pontuação da trilha passada por parâmetro. Caso não seja passado
// nenhuma trilha por parâmetro, a função irá retorna a pontuação total de todas as trilhas.
// getPointsAtTrail(trailId): number
export function getPointsAtTrail({ trailId, actionsBook }) {
  let totalPoints = 0
  let filteredActions = []
  if(trailId) {
    filteredActions = actionsBook.filter(action => action.activityId === trailId)
  } else filteredActions = actionsBook

  filteredActions.map(action => totalPoints = totalPoints+action.score)

  return totalPoints
}

// Percorre o actions book e retorna um array com o id das trilhas que já foram concluídas.
// getFinalizedTrails(): array<trailsId>

// Percorre o actions book e retorna a quantidade de livros adquiridos na tilha passada por parâmetro. Caso não seja passado
// nenhuma trilha por parâmetro, a função irá retorna a quantidade total de todas as trilhas.
// getBookBadgesAtTrail(trailId): number
export function getBookBadges({trailId, actionsBook}) {
  let bookBadges = 0
  let filteredActions = []
  if(trailId) {
    filteredActions = actionsBook.filter(action => action.activityId === trailId)
  } else filteredActions = actionsBook

  filteredActions.map(action => action.books && (bookBadges=bookBadges+1))

  return bookBadges
}

