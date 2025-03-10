{
	const playGame = function ( argPlayerInput ) {
		clearMessages();
		
		const playerInput = argPlayerInput;
		
		const randomNumber = Math.floor(Math.random() * 3 + 1);

		console.log('Wylosowana liczba to: ' + randomNumber);

		const computerMove = getMoveName(randomNumber);

		printMessage('Mój ruch to: ' + computerMove);

		console.log('Gracz wpisał: ' + playerInput);

		const playerMove = getMoveName(playerInput);

		printMessage('Twój ruch to: ' + playerMove);

		displayResult(computerMove, playerMove);
	};

	document.getElementById('play-rock').addEventListener('click', function() {
		playGame(1);
	});
	document.getElementById('play-paper').addEventListener('click', function() {
		playGame(2); 
	});
	document.getElementById('play-scissors').addEventListener('click', function() {
		playGame(3);
	});
}