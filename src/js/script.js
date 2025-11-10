const target = document.getElementById('target');
const scoreDisplay = document.getElementById('score');
const gameArea = document.getElementById('gameArea');

let score = 0;
let x = 0;
let y = 100;
let dx = 2; // horizontal speed
let dy = 1; // vertical speed

function moveTarget() {
  const maxX = gameArea.clientWidth - target.clientWidth;
  const maxY = gameArea.clientHeight - target.clientHeight;

  x += dx;
  y += dy;

  // Bounce off walls
  if (x <= 0 || x >= maxX) dx *= -1;
  if (y <= 0 || y >= maxY) dy *= -1;

  target.style.left = `${x}px`;
  target.style.top = `${y}px`;

  requestAnimationFrame(moveTarget);
}

target.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = score;
  target.style.backgroundColor = getRandomColor();
  increaseSpeed();
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function increaseSpeed() {
  dx *= 1.05;
  dy *= 1.05;
}

moveTarget();
