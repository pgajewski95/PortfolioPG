// Wybieramy kwadraty, status, przyciski
const squares = document.querySelectorAll('.square');
const status = document.querySelector('#status');
const onePlayerButton = document.querySelector('#one-player-button');
const twoPlayersButton = document.querySelector('#two-players-button');
const resetButton = document.querySelector('#reset-button');

// Inicjalizujemy zmienne
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'O';
let isGameOver = false;
let isOnePlayerGame = true;

// Funkcja obsługująca kliknięcie na kwadrat
function handleClick(event) {
    const square = event.target;
    const index = square.dataset.index;
    if (board[index] === '' && !isGameOver) {
        // Ustawiamy wartość pola i wyświetlamy symbol gracza
        board[index] = currentPlayer;
        square.textContent = currentPlayer;
        checkWin();
        checkTie();
        changePlayer();
        if (isOnePlayerGame && currentPlayer === 'X' && !isGameOver) {
            // Ruch komputera
            const computerMove = getComputerMove();
            board[computerMove] = currentPlayer;
            squares[computerMove].textContent = currentPlayer;
            checkWin();
            checkTie();
            changePlayer();
        }
    }
}

// Funkcja sprawdzająca, czy któraś strona wygrała
function checkWin() {
    const winningPositions = [
        // Wszystkie możliwe sposoby wygranej
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // poziomo
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // pionowo
        [0, 4, 8], [2, 4, 6] // na skos
    ];
    for (const positions of winningPositions) {
        const [a, b, c] = positions;
        if (board[a] !== '' && board[a] === board[b] && board[b] === board[c]) {
            // Ktoś wygrał
            isGameOver = true;
            status.textContent = `${currentPlayer} wygrywa!`;
            highlightWinningSquares(positions);
            return;
        }
    }
}

// Funkcja sprawdzająca, czy jest remis
function checkTie() {
    if (!board.includes('') && !isGameOver) {
        // Remis
        isGameOver = true;
        status.textContent = 'Remis!';
    }
}

// Funkcja zmieniająca gracza
function changePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    status.textContent = `${currentPlayer}'s turn`;
}

// Funkcja zwracająca indeks pola, które powinien wykonać komputer
function getComputerMove() {
    // Algorytm AI: zwraca pierwsze wolne pole
    for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
            return i;
        }
    }
}

// Funkcja resetująca planszę
function resetBoard() {
board = ['', '', '', '', '', '', '', '', ''];
currentPlayer = 'O';
isGameOver = false;
status.textContent = ${currentPlayer}'s turn;
for (const square of squares) {
square.textContent = '';
square.classList.remove('winning');
}
}

// Funkcja obsługująca wybór trybu gry
function handleGameModeSelection(event) {
const button = event.target;
if (button === onePlayerButton) {
isOnePlayerGame = true;
} else if (button === twoPlayersButton) {
isOnePlayerGame = false;
}
resetBoard();
}

// Dodajemy nasłuchiwanie kliknięcia na każdy kwadrat
for (const square of squares) {
square.addEventListener('click', handleClick);
}

// Dodajemy nasłuchiwanie kliknięcia na przyciski
onePlayerButton.addEventListener('click', handleGameModeSelection);
twoPlayersButton.addEventListener('click', handleGameModeSelection);
resetButton.addEventListener('click', resetBoard);

// Inicjujemy grę
resetBoard();