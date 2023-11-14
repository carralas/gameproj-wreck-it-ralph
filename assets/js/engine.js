const state = {
    view: {
        squares: document.querySelectorAll('.square'),
        enemy: document.querySelector('.enemy'),
        timer: document.querySelector('.timer'),
        points: document.querySelector('.points')
    },
    values: {
        timerID: null,
        gameVelocity: 1000
    }
}

function randomEnemyPosition() {
    state.view.squares.forEach((square) => {
        square.classList.remove('enemy')
    })

    let position = Math.floor(Math.random()*9)
    state.view.squares[position].classList.add("enemy")

    state.values.timerID = setInterval(randomEnemyPosition, state.values.gameVelocity)
}

function addListenerHitbox() {
    state.view.squares.forEach((square) => {
        if (square.id === enemy.id) {

        }
    })
}

function main() {
    randomEnemyPosition()
}

main();