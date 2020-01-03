const buttonList = document.getElementById('nav_options')
const renderArea = document.getElementById('content')
const sideText = document.querySelector('aside')

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

    this.button.addEventListener('click', (click) => {
      sideText.innerHTML = '';
      Adapter.showPlayer()
      .then(games => {
        this.renderProfile(player)})
      })
  }


  renderProfile (player) {
    let scoreList =  document.createElement('ul')
    let playerHeader = document.createElement('h2')

    player.innerText = player.data.attributes.name;

    for (game in player.included) {
      let gameItem = document.createElement('li')
      let gameScore = game.attributes.score
      let gameDate = game.attributes.updated_at.slice(0, 10)

      gameItem.innerText = `Score: ${gameScore} on ${gameDate}`;

      scoreList.appendChild(gameItem);
    }
    sideText.prepend(playerHeader);
    sideText.append(scoreList);
  }
}

class NewButton extends NavButton {
  constructor() {
    super()
    this.button.id="new"
    this.button.innerText='New Game'
    buttonList.appendChild(this.button)

    this.button.addEventListener('click', (click) => {
      renderArea.innerHTML = ''
      let newGame = new p5(Game)
    })
  }

}

class ScoresButton extends NavButton {
  constructor () {
    super()
    this.button.id ='high'
    this.button.innerText = 'High Scores'

    buttonList.appendChild(this.button)

    this.button.addEventListener('click', (click) => {
      sideText.innerHTML = '';
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
      let scoreTime = currentScore.updated_at.slice(0, 10)
      let scorePlayer = scores.included[i].attributes.name

      scoreItem.innerHTML = `${scorePlayer}: ${scoreValue} on ${scoreTime}
      <span class="deleteScore">Delete Score</span>`
      scoreList.append(scoreItem)


      let deleteScore = scoreItem.querySelector('.deleteScore')

      deleteScore.addEventListener('click', (click) => {
        Adapter.deleteGame(scores.data[i].id)
        .then(game => {
          scoreItem.remove()
        })
      })
    }
    sideText.prepend(scoreList);
  }
}

const renderMenu = () => {
  new ProfileButton()
  new NewButton()
  new ScoresButton()
}
