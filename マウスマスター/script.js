let score = 0;
let gameTime = 0;
let gameMode;
let gameInterval;
let targetInterval;

function startGame(mode, time) {
    gameMode = mode;
    score = 0;
    updateScore();
    startTarget();

    if (gameMode === 'timeAttack') {
        gameTime = parseInt(time);
        updateTimer(gameTime);
        startTimer();
    }
}

function updateTimer(time) {
    document.getElementById('timer').innerText = 'Time: ' + time + 's';
}

function startTimer() {
    const timerInterval = setInterval(function() {
        gameTime--;
        updateTimer(gameTime);

        if (gameTime === 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

function handleClick() {
    score++;
    updateScore();
    moveTarget();
}

function startTarget() {
    targetInterval = setInterval(moveTarget, 1000);
}

function moveTarget() {
    const target = document.getElementById('target');
    const maxX = window.innerWidth - target.clientWidth;
    const maxY = window.innerHeight - target.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    target.style.left = randomX + 'px';
    target.style.top = randomY + 'px';
}

function updateScore() {
    document.getElementById('score').innerText = 'Score: ' + score;
}

function endGame() {
    clearInterval(targetInterval);
    alert('Game Over! Your Score: ' + score);
    resetGame();
}

function resetGame() {
    document.getElementById('timer').innerText = '';
    document.getElementById('score').innerText = '';
    gameMode = undefined;
    gameTime = 0;
    score = 0;
}
