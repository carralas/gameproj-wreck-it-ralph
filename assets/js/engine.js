const state = {
    /* views - variáveis para exibição na tela */
    view: {
        squares: document.querySelectorAll('.square'),
        enemy: document.querySelector('.enemy'),
        timeLeft: document.querySelector('.timer'),
        score: document.querySelector('.points')
    },
    /* values - variáveis para controle interno */
    values: {
        points: 0,
        timer: 60,
        enemyPosition: 0
    },
    /* actions - variáveis que cotrolam ações na engine */
    actions: {
        timerID: setInterval(randomEnemyPosition, 1000),
        countdownTimerID: setInterval(countdown, 1000)
    }
}

function randomEnemyPosition() {
    /* função que determina uma posição aleatória para o enemy */

    /* limpa a posição atual */
    state.view.squares.forEach((square) => {
        square.classList.remove('enemy')
    })

    /* determinan a nova posição */
    let position = Math.floor(Math.random()*9)
    state.view.squares[position].classList.add('enemy')
    state.values.enemyPosition = state.view.squares[position].id
}

function addListenerHitbox() {
    /* função listener que registra marcação de ponto */

    state.view.squares.forEach((square) => {
        square.addEventListener('mousedown', () => {
            if (square.id === state.values.enemyPosition) {
                state.values.points++
                hitSucessAudio('hit')
                state.view.score.textContent = state.values.points

                /* anula a variável interna de posição do inimigo para evitar pontuação extra */
                state.values.enemyPosition = null
            }
        })
    })
}

function hitSucessAudio(file) {
    /* função para executar áudio */

    let audio = new Audio(`./assets/audio/${file}.m4a`)
    audio.volume = 0.1
    audio.play()
}

function countdown() {
    /* função para contagem regressiva */

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