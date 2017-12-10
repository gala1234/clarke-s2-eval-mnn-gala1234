'use strict'


	//Número aleatorio
	var randomNumber = Math.floor((Math.random() * 100) + 1);
	//Localizo numero que mete el jugador
	var guess = document.querySelector('.play-input');
	//Boton de jugar
	var button = document.querySelector('.play-button'), counter = 0;
	//Localizo en DOM la lista de ganadores
	var winnersRanking = document.querySelector('.score-zone');
	var winner = {};
	winner.name = 'user-data-name';
	winner.attempts = 'counter';
	var winnersList = '<li>winner.name - winner.attempts</li>';
	var counter =
	//Empieza el juego

function checkGuess(guess){
	if (guess == randomNumber){
		document.querySelector('.instructions-p').innerHTML = 'ACERTADO';
		document.querySelector('.user-data-name').style.display = 'flex';
		button.disabled = true;
		function addWinner(){
			winnersList.innerHTML = winnersList.innerHTML + winner;
		}
		function restart (){
			counter = 0;
			document.querySelector('.header-attempts').innerHTML = 'counter';
			var randomNumber = Math.floor((Math.random() * 100) + 1);
			document.querySelector('.user-data-name').style.display = 'none';
			document.querySelector('.instructions-p').innerHTML = 'Escribe un número y dale a <em>Prueba</em>';
			guess.innerHTML = '';
			button.disabled = false;
		}
	} else if (guess > randomNumber){
		counter++
		document.querySelector('.instructions-p').innerHTML = 'Demasiado alto';
		document.querySelector('.header-attempts').innerHTML = 'counter';
		guess.innerHTML = '';
	} else {
		counter++
		document.querySelector('.instructions-p').innerHTML = 'Demasiado bajo';
		document.querySelector('.header-attempts').innerHTML = 'counter';
		guess.innerHTML = '';
	}
}

button.addEventListener('click', checkGuess(guess));
