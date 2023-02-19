// Оголошуємо змінні
const cells = document.querySelectorAll('.cell');
const resultContainer = document.querySelector('.result');
let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

// Функція, яка визначає переможця
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function checkWinner() {
  let roundWon = false;
  for (let i = 0; i < 8; i++) {
    const [a, b, c] = winningConditions[i];
    if (gameState[a] !== '' && gameState[a] === gameState[b] && gameState[b] === gameState[c]) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    resultContainer.textContent = `${currentPlayer} виграв!`;
    gameActive = false;
    return;
  }

  let roundDraw = !gameState.includes('');
  if (roundDraw) {
    resultContainer.textContent = 'Нічия!';
    gameActive = false;
    return;
  }

  changePlayer();
}

// Функція, яка змінює поточного гравця
function changePlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Функція, яка обробляє кліки на комірки
function handleCellClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;
  const clickedCellIndex = parseInt(clickedCell.getAttribute('id').slice(-1));

  if (gameState[clickedCellIndex] !== '' || !gameActive) {
    return;
  }

  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.textContent = currentPlayer;
  clickedCell.classList.add(`cell-${currentPlayer}`);

  checkWinner();
}

// Функція, яка перезапускає гру
function restartGame() {
  currentPlayer = 'X';
  gameActive = true;
  gameState = ['', '', '', '', '', '', '', '', ''];
  resultContainer.textContent = '';
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('cell-X');
    cell.classList.remove('cell-O');
  });
}

// Додаємо обробник кліку на кожну комірку
cells.forEach(cell => {
  cell.addEventListener('click', handleCellClick);
});

// Додаємо обробник кліку на кнопку для перезапуску гри
const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', restartGame);
