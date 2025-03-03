let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);

if (computerMove == 'kamień' && playerMove == 'papier') {
  printMessage('Ty wygrywasz!');
} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
  printMessage('Wygrywa komputer!');
} else if (computerMove == 'kamień' && playerMove == 'kamień') {
  printMessage('Remis!');
} else if (computerMove == 'papier' && playerMove == 'papier') {
  printMessage('Remis!');
} else if (computerMove == 'papier' && playerMove == 'kamień') {
  printMessage('Wygrywa komputer!');
} else if (computerMove == 'papier' && playerMove == 'nożyce') {
  printMessage('Ty wygrywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
  printMessage('Remis!')
} else if (computerMove == 'nożyce' && playerMove == 'papier') {
  printMessage('Wygrywa komputer!')
} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
  printMessage('Ty wygrywasz!')
} else if (playerMove == 'nieznany ruch') {
  printMessage('Nieprawidłowa wartość!')
}
  
