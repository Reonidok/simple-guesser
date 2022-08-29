 //задание случайных чисел до 100
 let randomNumber = Math.floor(Math.random() * 100) + 1;
 //Ссылки на классы в HTML
 let guesses = document.querySelector('.guesses');
 let lastResult = document.querySelector('.lastResult');
 let lowOrHi = document.querySelector('.lowOrHi');

 let guessField = document.querySelector('.guessField');
 let guessSubmit = document.querySelector('.guessSubmit');

 //создание переменных
 let guessCount = 1;
 let resetButton;
 //Добаляем ивент который будет считавать нажатие на кнопку
 guessSubmit.addEventListener('click', checkGuess);

 function setGameOver() {
     guessField.disabled = true;
     guessSubmit.diabled = true;
     resetButton = document.createElement('button');
     resetButton.textContent = 'Start new game';
     document.body.append(resetButton);
     resetButton.addEventListener('click', resetGame);
 }

 function resetGame() {
     guessCount = 1;

     var resetParas = document.querySelectorAll('.resultParas p');
     for (var i = 0; i < resetParas.length; i++) {
         resetParas[i].textContent = ' ';
     }

     resetButton.parentNode.removeChild(resetButton);

     guessField.disabled = false;
     guessSubmit.disabled = false;
     guessField.value = ' ';
     guessField.focus();

     lastResult.style.backgroundColor = 'white';

     randomNumber = Math.floor(Math.random() * 100) + 1;
 }

 function checkGuess() {

     var userGuess = Number(guessField.value);
     if (guessCount === 1) {
         guesses.textContent = 'Previous guesses: ';
     }
     guesses.textContent += userGuess + ' ';

     if (userGuess === randomNumber) {
         lastResult.textContent = 'Congratulations! You got it right!';
         lastResult.style.backgroundColor = 'green';
         lowOrHi.textContent = '';
         setGameOver();
     } else if (guessCount === 10) {
         lastResult.textContent = '!!!GAME OVER!!!';
         setGameOver();
     } else {
         lastResult.textContent = 'Wrong!';
         lastResult.style.backgroundColor = 'red';
         if (userGuess < randomNumber) {
             lowOrHi.textContent = 'Last guess was too low!';
         } else if (userGuess > randomNumber) {
             lowOrHi.textContent = 'Last guess was too high!';
         }
     }

     guessCount++;
     guessField.value = '';
     guessField.focus();
 }