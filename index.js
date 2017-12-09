'use strict'


	//Número aleatorio
	var randomNumber = Math.floor((Math.random() * 100) + 1);
	//Localizo en DOM la lista de ganadores
	var winnersRanking = document.querySelector('score-zone-ul');


	//Empieza el juego

document.querySelector('play-button').onclick = function (){
	var guess = document.getElementById('play-input').value;
	checkGuess(guess);
	counter++;
	}

function checkGuess(guess){
	if (guess == randomNumber){
		document.querySelector('instructions-p').innerHTML = 'ACERTADO';
		document.querySelector('user-data-name').style.display = 'flex';
		document.querySelector("play-button").disabled = true;
	} else if (guess > randomNumber){
		alert("Too high!");
		document.querySelector("guess").value='';
	} else (guess < randomNumber){
		alert("Too low!");
		document.querySelector("guess").value='';
	}
}
