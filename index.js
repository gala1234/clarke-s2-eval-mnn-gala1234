'use strict'


//Número aleatorio
var randomNumber = Math.floor((Math.random() * 100) + 1);
//Localizo numero que mete el jugador
var guess = document.querySelector('.play-input');
//Boton de jugar
var button = document.querySelector('.play-button'), counter = 0;
//Localizo en DOM la lista de ganadores
var winnerName = document.querySelector('.user-data-name');
//Localizo boton de guardar datos del ganadores
var saveButton = document.querySelector('.user-data-button');
//Creo el ranking
var winnersRanking = document.querySelector('.score-zone-ul');
var winnersList = '';
var winner = {
	name: [],
	attempts: []
}


alert(randomNumber);

//Empieza el juego

//Probar numero y comparar
function checkGuess(){
	counter++;
	document.querySelector('.header-attempts').innerHTML = counter;
	var number = parseInt(guess.value);
	if (number===randomNumber){
		document.querySelector('.instructions-p').innerHTML = 'ACERTADO';
		document.querySelector('.user-data').style.display = 'flex';
		button.disabled = true;
	} else if (number>randomNumber){
		document.querySelector('.instructions-p').innerHTML = 'Demasiado alto';
		guess.value = '';
	} else {
		document.querySelector('.instructions-p').innerHTML = 'Demasiado bajo';
		guess.value = '';
	}
}
button.addEventListener('click', checkGuess);

//Administar datos del ganador y reiniciar
function addWinner(){
	winner.name.push(winnerName.value);
	winner.attempts.push(counter);
	winnersList = '<li>' + winnerName.value + ' - ' + counter + '</li>';
	winnersRanking.innerHTML = winnersRanking.innerHTML + winnersList;
}
function restart (){
	counter = 0;
	document.querySelector('.header-attempts').innerHTML = counter;
	document.querySelector('.user-data').style.display = 'none';
	document.querySelector('.instructions-p').innerHTML = 'Escribe un número y dale a <em>Prueba</em>';
	guess.value = '';
	button.disabled = false;
}
saveButton.addEventListener('click', function(){
	addWinner();
	restart();
	randomNumber = Math.floor((Math.random() * 100) + 1);
});


//Que pruebe al pulsar Enter

var clicked = false;
document.addEventListener('keypress', function(e) {
    var keyn = e.keyCode || e.which|| 0;
    if(keynum == 13) {
			addWinner();
			restart();
			randomNumber = Math.floor((Math.random() * 100) + 1);
    }
});
