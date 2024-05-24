const board = document.getElementById('game-board');
const instructionText = document.getElementById('instruction-text');
const logo = document.getElementById('logo');
const score = document.getElementById('score');
const highScoreText = document.getElementById('highScore');
const gridSize = 20;

let snake = [{ x: 10, y: 10 }];
let food = generateFood();
let powerUp = generatePowerUp();
let obstacles = generateObstacles(5);
let highScore = 0;
let direction = 'right';
let gameInterval;
let gameSpeedDelay = 200;
let gameStarted = false;
let invincible = false;
let powerUpTimeout;

function draw() {
  board.innerHTML = '';
  drawSnake();
  drawFood();
  drawPowerUp();
  drawObstacles();
  updateScore();
}

function drawSnake() {
  snake.forEach((segment) => {
    const snakeElement = createGameElement('div', 'snake');
    setPosition(snakeElement, segment);
    board.appendChild(snakeElement);
  });
}

function createGameElement(tag, className) {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

function setPosition(element, position) {
  element.style.gridColumn = position.x;
  element.style.gridRow = position.y;
}

function drawFood() {
  if (gameStarted) {
    const foodElement = createGameElement('div', 'food');
    setPosition(foodElement, food);
    board.appendChild(foodElement);
  }
}

function drawPowerUp() {
  if (gameStarted && powerUp) {
    const powerUpElement = createGameElement('div', 'power-up');
    setPosition(powerUpElement, powerUp);
    board.appendChild(powerUpElement);
  }
}

function drawObstacles() {
  obstacles.forEach((obstacle) => {
    const obstacleElement = createGameElement('div', 'obstacle');
    setPosition(obstacleElement, obstacle);
    board.appendChild(obstacleElement);
  });
}

function generateFood() {
  return generateRandomPosition();
}

function generatePowerUp() {
  return generateRandomPosition();
}

function generateObstacles(count) {
  const obstacles = [];
  for (let i = 0; i < count; i++) {
    obstacles.push(generateRandomPosition());
  }
  return obstacles;
}

function generateRandomPosition() {
  const x = Math.floor(Math.random() * gridSize) + 1;
  const y = Math.floor(Math.random() * gridSize) + 1;
  return { x, y };
}

function move() {
  const head = { ...snake[0] };
  switch (direction) {
    case 'down':
      head.y--;
      break;
    case 'up':
      head.y++;
      break;
    case 'right':
      head.x--;
      break;
    case 'left':
      head.x++;
      break;
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    food = generateFood();
    increaseSpeed();
    clearInterval(gameInterval);
    gameInterval = setInterval(() => {
      move();
      checkCollision();
      draw();
    }, gameSpeedDelay);
  } else {
    snake.pop();
  }

  if (powerUp && head.x === powerUp.x && head.y === powerUp.y) {
    activatePowerUp();
    powerUp = null;
    clearTimeout(powerUpTimeout);
    powerUpTimeout = setTimeout(() => {
      powerUp = generatePowerUp();
    }, 15000);
  }
}

function startGame() {
  gameStarted = true;
  instructionText.style.display = 'none';
  logo.style.display = 'none';
  gameInterval = setInterval(() => {
    move();
    checkCollision();
    draw();
  }, gameSpeedDelay);
}

function handleKeyPress(event) {
  if (
    (!gameStarted && event.code === 'Space') ||
    (!gameStarted && event.key === ' ')
  ) {
    startGame();
  } else {
    switch (event.key) {
      case 'ArrowUp':
        direction = 'up';
        break;
      case 'ArrowDown':
        direction = 'down';
        break;
      case 'ArrowLeft':
        direction = 'left';
        break;
      case 'ArrowRight':
        direction = 'right';
        break;
    }
  }
}

document.addEventListener('keydown', handleKeyPress);

function increaseSpeed() {
  if (gameSpeedDelay > 150) {
    gameSpeedDelay -= 5;
  } else if (gameSpeedDelay > 100) {
    gameSpeedDelay -= 3;
  } else if (gameSpeedDelay > 50) {
    gameSpeedDelay -= 2;
  } else if (gameSpeedDelay > 25) {
    gameSpeedDelay -= 1;
  }
}

function checkCollision() {
  const head = snake[0];

  if (!invincible) {
    if (head.x < 1 || head.x > gridSize || head.y < 1 || head.y > gridSize) {
      resetGame();
    }

    for (let i = 1; i < snake.length; i++) {
      if (head.x === snake[i].x && head.y === snake[i].y) {
        resetGame();
      }
    }

    for (const obstacle of obstacles) {
      if (head.x === obstacle.x && head.y === obstacle.y) {
        resetGame();
      }
    }
  } else {

    if (head.x < 1) head.x = gridSize;
    if (head.x > gridSize) head.x = 1;
    if (head.y < 1) head.y = gridSize;
    if (head.y > gridSize) head.y = 1;
  }
}

function resetGame() {
  updateHighScore();
  stopGame();
  snake = [{ x: 10, y: 10 }];
  food = generateFood();
  powerUp = generatePowerUp();
  obstacles = generateObstacles(5);
  direction = 'right';
  gameSpeedDelay = 200;
  invincible = false;
  updateScore();
}

function updateScore() {
  const currentScore = snake.length - 1;
  score.textContent = currentScore.toString().padStart(3, '0');
}

function stopGame() {
  clearInterval(gameInterval);
  gameStarted = false;
  instructionText.style.display = 'block';
  logo.style.display = 'block';
}

function updateHighScore() {
  const currentScore = snake.length - 1;
  if (currentScore > highScore) {
    highScore = currentScore;
    highScoreText.textContent = highScore.toString().padStart(3, '0');
  }
  highScoreText.style.display = 'block';
}

function activatePowerUp() {
  invincible = true;
  setTimeout(() => {
    invincible = false;
  }, 5000);
}
