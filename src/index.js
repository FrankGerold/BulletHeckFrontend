document.addEventListener('DOMContentLoaded', (dom) => {
  const highScores = document.getElementById('high')
  const renderArea = document.getElementById('content')

  highScores.addEventListener('click', (click) => {
    renderArea.innerHTML =``
    let scoreList = document.createElement('ol')

    fetch('http://127.0.0.1:3000/games')
    .then(r => r.json())
    .then(scores => {
      // debugger

      // scores.data.forEach((score) => {
      for (let i = 0; i < scores.data.length; i++) {
        let scoreItem = document.createElement('li')

        let currentScore = scores.data[i].attributes

        let scoreValue = currentScore.score
        let scoreTime = currentScore.updated_at
        let scorePlayer = scores.included[i].attributes.name

        scoreItem.innerText = `${scorePlayer}: ${scoreValue} at ${scoreTime}`
        scoreList.append(scoreItem)
      }
      renderArea.append(scoreList)
    })
  })

})
