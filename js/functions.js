function printMessage(msg) {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages() {
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
	return 'papier'
  } else if (randomNumber == 3) {
	return 'nożyce'

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove) {
  if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
    printMessage('Wygrywa komputer!');
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
    printMessage('Remis!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
    printMessage('Remis!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
    printMessage('Wygrywa komputer!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
    printMessage('Remis!')
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
    printMessage('Wygrywa komputer!')
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
    printMessage('Ty wygrywasz!')
  }  
}