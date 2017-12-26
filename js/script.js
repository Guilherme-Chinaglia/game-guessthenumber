/**
 * Developed by Guilherme Augusto Chinaglia Junior
 * Linkedin: https://www.linkedin.com/in/chinagliaguilherme/
 * Twitter: https://twitter.com/chinagliagui
 */
  
var randomNumber = Math.round(Math.random() * 10);
var button = document.querySelector('.guess-btn');
var button_reset = document.querySelector('.guess-btn-reset');
var tries = 0;
var check = true;

button.onclick = function () {

		check = true;
		var	guessNumber = parseInt(document.querySelector('.input-number').value);

		validation(guessNumber);

	if (check === true) {

		if (randomNumber === guessNumber) {
			
			document.querySelector('.guess-msg').style.color = '#27ae60';
			document.querySelector('.guess-msg').innerHTML = 'Congratulations, it took you '+ tries +' lifes to guess the number, which was '+ guessNumber +'. Press reset button to play again!';

		}else if (randomNumber > guessNumber) {

			document.querySelector('.guess-msg').innerHTML = 'Your guess, '+ guessNumber +', is to low.';
				document.querySelector('.lower-greater')
				.innerHTML += '<td>'+ guessNumber +'</td><td>-</td>';
			tries++;
			
		}else if (randomNumber < guessNumber) {

			document.querySelector('.guess-msg').innerHTML = 'Your guess, '+ guessNumber +', is to high.';
				document.querySelector('.lower-greater')
				.innerHTML += '<td>-</td><td>'+ guessNumber +'</td>';		
			tries++;	
		}
		
		switch (tries) {
			case 5:
				document.getElementById('one').style.backgroundColor = '#fff';
				break;
			
			case 4:
				document.getElementById('two').style.backgroundColor = '#fff';
				break;
			
			case 3:
				document.getElementById('three').style.backgroundColor = '#fff';
				break;
			
			case 2:
				document.getElementById('four').style.backgroundColor = '#fff';
				break;
			
			case 1:
				document.getElementById('five').style.backgroundColor = '#fff';
				break;
				
			default:
				break;
		}

		if (tries === 5) {

			alert('Sorry, your tries is over, try again');
			window.location.href = window.location.href;

		}

		guessNumber = document.querySelector('.input-number').value = '';
		guessNumber = document.querySelector('.input-number').focus();
	}	
}

function validation(guessNumber) {

	if (isNaN(guessNumber) || guessNumber < 0 || guessNumber > 10) {

		alert('Pick a number between 0 and 10');
		guessNumber = document.querySelector('.input-number').value = '';
		guessNumber = document.querySelector('.input-number').focus();
		check = false;

	}
}

button_reset.onclick = function () {
	
	window.location.href = window.location.href;
}
