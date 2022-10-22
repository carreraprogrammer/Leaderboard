// Game

const game = () => {
  const canvas = document.getElementById('canvas-top');
  const ctx = canvas.getContext('2d');
  let gameState = {
    rectPosX: 10,
    rectPosY: canvas.height / 2 - 10,
    rectVelocity: { x: 0, y: 0 },
    playerSpeed: 0.5,
    enemyTimeout: 60,
    enemyTimeoutInit: 60,
    enemySpeed: 1,
    enemies: [],
    friends: [],
    friendAdded: false,
    score: 0,
  };
  function random(n) {
    return Math.floor(Math.random() * n);
  }
  class RectCollider {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }

    isColliding(rectCollider) {
      if (
        this.x < rectCollider.x + rectCollider.width
      && this.x + this.width > rectCollider.x
      && this.y < rectCollider.y + rectCollider.height
      && this.height + this.y > rectCollider.y
      ) {
        return true;
      }
      return false;
    }
  }
  // eslint-disable-next-line consistent-return
  function checkCollision(gameState) {
    const playerCollider = new RectCollider(
      gameState.rectPosX,
      gameState.rectPosY,
      10,
      10,
    );
    for (let i = 0; i < gameState.enemies.length; i += 1) {
      const enemyCollider = new RectCollider(
        gameState.enemies[i].x,
        gameState.enemies[i].y,
        10,
        10,
      );
      if (playerCollider.isColliding(enemyCollider)) {
        return true;
      }
    }
    for (let i = 0; i < gameState.friends.length; i += 1) {
      const friendCollider = new RectCollider(
        gameState.friends[i].x,
        gameState.friends[i].y,
        5,
        5,
      );
      if (playerCollider.isColliding(friendCollider)) {
        gameState.playerSpeed *= 1.05;
        gameState.friends.splice(i, 1);
      }
    }
  }
  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    gameState.enemyTimeout -= 1;
    if (gameState.enemyTimeout === 0) {
      gameState.enemyTimeout = Math.floor(gameState.enemyTimeoutInit);
      gameState.enemies.push({
        x: canvas.width,
        y: random(canvas.height),
        velocity: gameState.enemySpeed,
      });
      gameState.enemySpeed *= 1.019;
      gameState.enemyTimeoutInit *= 0.999;
    // console.log('timeout:'+gameState.enemyTimeoutInit);
    // console.log('speed:'+gameState.npenemySpeed);
    }
    ctx.fillStyle = '#FF0000';
    gameState.rectPosX += gameState.rectVelocity.x;
    gameState.rectPosY += gameState.rectVelocity.y;
    if (gameState.rectPosX > canvas.width - 10) {
      gameState.rectPosX = canvas.width - 10;
      gameState.rectVelocity.x = 0;
    }
    if (gameState.rectPosX < 0) {
      gameState.rectPosX = 0;
      gameState.rectVelocity.x = 0;
    }
    if (gameState.rectPosY < 0) {
      gameState.rectPosY = 0;
      gameState.rectVelocity.y = 0;
    }
    if (gameState.rectPosY > canvas.height - 10) {
      gameState.rectPosY = canvas.height - 10;
      gameState.rectVelocity.y = 0;
    }
    ctx.fillRect(gameState.rectPosX, gameState.rectPosY, 10, 10);
    ctx.fillStyle = '#0000FF';
    for (let i = 0; i < gameState.enemies.length; i += 1) {
      gameState.enemies[i].x -= gameState.enemies[i].velocity;
      ctx.fillRect(gameState.enemies[i].x, gameState.enemies[i].y, 10, 10);
    }
    for (let i = 0; i < gameState.enemies.length; i += 1) {
      if (gameState.enemies[i].x < -10) {
        gameState.enemies.splice(i, 1);
        gameState.score++;
      }
    }
    document.getElementById('score').innerHTML = `score: ${gameState.score}`;
    if (gameState.score % 10 === 0 && gameState.friendAdded === false) {
      gameState.friends.push({
        x: random(canvas.width - 20),
        y: random(canvas.height - 20),
      });
      gameState.friendAdded = true;
    }
    if (gameState.score % 10 === 1 && gameState.friendAdded === true) {
      gameState.friendAdded = false;
    }
    for (let i = 0; i < gameState.friends.length; i += 1) {
      ctx.fillStyle = '#FF0000';
      ctx.fillRect(gameState.friends[i].x, gameState.friends[i].y, 5, 5);
    }
    if (checkCollision(gameState) === true) {
      const newScore = gameState.score;
      const inputScore = document.querySelector('#score-input');
      const crashm = document.querySelector('.crash-m');
      crashm.classList.remove('ocult');
      inputScore.classList.add('crash');
      setTimeout(() => { crashm.classList.add('ocult'); }, 5000);
      inputScore.value = newScore;
      gameState = {
        rectPosX: 10,
        rectPosY: canvas.height / 2 - 10,
        rectVelocity: { x: 0, y: 0 },
        playerSpeed: 0.5,
        enemyTimeout: 60,
        enemyTimeoutInit: 60,
        enemySpeed: 1,
        enemies: [],
        friends: [],
        friendAdded: false,
        score: 0,
      };
    }
  }
  setInterval(update, 20);
  document.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        gameState.rectVelocity.x = -gameState.playerSpeed;
        break;
      case 'ArrowRight':
        gameState.rectVelocity.x = gameState.playerSpeed;
        break;
      case 'ArrowUp':
        gameState.rectVelocity.y = -gameState.playerSpeed;
        break;
      case 'ArrowDown':
        gameState.rectVelocity.y = gameState.playerSpeed;
        break;
      default:
        gameState.rectVelocity = 0;
        break;
    }
  });
};

export default game;