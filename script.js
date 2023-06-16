function enableDarkMode() {
    document.body.classList.add('dark-mode');
}

// Funkcja do przełączania na tryb White Mode
function enableWhiteMode() {
    document.body.classList.remove('dark-mode');
}

// Pobieramy przyciski
var darkModeBtn = document.getElementById('darkModeBtn');
var whiteModeBtn = document.getElementById('whiteModeBtn');

// Nasłuchiwanie kliknięcia przycisku Dark Mode
darkModeBtn.addEventListener('click', enableDarkMode);

// Nasłuchiwanie kliknięcia przycisku White Mode
whiteModeBtn.addEventListener('click', enableWhiteMode);