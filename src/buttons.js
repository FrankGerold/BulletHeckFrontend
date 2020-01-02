const buttonList = document.getElementById('nav_options')
const renderArea = document.getElementById('content')

class NavButton {
  constructor () {
   this.button = document.createElement('li')
  }
}

class ProfileButton extends NavButton {
  constructor() {
    super()
    this.button.id='profile'
    this.button.innerText = 'Player Profile'
    buttonList.appendChild(this.button)
  }
}

class NewButton extends NavButton {
  constructor() {
    super()
    this.button.id="new"
    this.button.innerText='New Game'
    buttonList.appendChild(this.button)
  }
}

class ScoresButton extends NavButton {
  constructor () {
    super()
    this.button.id ='high'
    this.button.innerText = 'High Scores'

    buttonList.appendChild(this.button)

    this.button.addEventListener('click', (click) => {
      Adapter.showGames()
        .then(games => {
          this.renderScoreList(games)})
    })
  }

  renderScoreList(scores) {
    let scoreList = document.createElement('ol')

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
  }
}

const renderMenu = () => {
  new ProfileButton()
  new NewButton()
  new ScoresButton()
}
