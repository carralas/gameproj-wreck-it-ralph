const state = {
    view: {
        squares: document.querySelectorAll('.square'),
        enemy: document.querySelector('.enemy'),
        timeLeft: document.querySelector('.timer'),
        score: document.querySelector('.points')
    },
    values: {
        points: 0,
        timer: 60,
        enemyPosition: 0
    },
    actions: {
        timerID: setInterval(randomEnemyPosition, 1000),
        countdownTimerID: setInterval(countdown, 1000)
    }
}

function randomEnemyPosition() {
    /*
    let currentPosition = -1
    */
    state.view.squares.forEach((square) => {
        /*
        if (square.classList.contains('enemy')) {
            currentPosition = square.id
        }
        */
        square.classList.remove('enemy')
    })

    let position = Math.floor(Math.random()*9)
    state.view.squares[position].classList.add('enemy')
    state.values.enemyPosition = state.view.squares[position].id
}

function addListenerHitbox() {
    state.view.squares.forEach((square) => {
        square.addEventListener('mousedown', () => {
            if (square.id === state.values.enemyPosition) {
                state.values.points++
                hitSucessAudio('hit')
                state.view.score.textContent = state.values.points
                state.values.enemyPosition = null
            }
        })
    })
}

function hitSucessAudio(file) {
    let audio = new Audio(`./assets/audio/${file}.m4a`)
    audio.volume = 0.1
    audio.play()
}

function countdown() {
    state.values.timer--
    state.view.timeLeft.textContent = state.values.timer

    if (state.values.timer <= 0) {
        clearInterval(state.actions.countdownTimerID)
        clearInterval(state.actions.timerID)
        alert(`
        GAME OVER!
        points: ${state.values.points}`)
    }
}

function main() {
    addListenerHitbox()
}

main();