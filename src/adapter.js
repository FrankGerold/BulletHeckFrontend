const API = 'http://127.0.0.1:3000/'

class Adapter {

  static showGames () {
    return fetch(API + 'games')
    .then(r => r.json())
  }

  static showGame (id) {
    return fetch (API + `games/${id}`)
    .then(r => r.json())
  }

  static createGame (gameObject) {
    return fetch (API + 'games', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        score: gameObject.score,
        level: gameObject.level,
        player_id: gameObject.player_id
      })
    })
    .then(r => r.json())
  }

  static deleteGame (id) {
    return fetch (API + `games/${id}`, {
      method: 'DELETE'
    })
    .then (r => r.json())
  }

  static showPlayer (id) {
    return fetch (API + `players/${id}`)
    .then(r => r.json())
  }

  static createPlayer (playerObject) {
    return fetch (API + `players`, {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: playerObject.name,
      })
    })
    .then(r => r.json())
  }

  static deletePlayer (playerObject) {
    return fetch (API + `players`, {
      method: 'DELETE'
    })
    .then(r => r.json())
  }

}
