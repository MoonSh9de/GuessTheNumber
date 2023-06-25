
let answer = Math.round(Math.random() * (20 - 1) + 1);
let score = 10;
let result = 0;

const letsGuessSel = function(message) {
   document.querySelector('.lets_guess').textContent = message;
}

const scoreSel = function(score) {
   document.querySelector('.score').textContent = score;
}

const guessHSel = function(message) {
   document.querySelector('.guess_h').textContent = message;
}

const answerSel = function(message) {
   document.querySelector('.answer').textContent = message;
}

const bodyStyle = function(message) {
   document.querySelector('body').style.backgroundColor = message;
}

const checkNumber = function() {
   const guessingNumber = Number(document.querySelector('.input_number').value);
   if(!guessingNumber) letsGuessSel('ENTER THE NUMBER!');
   else if(guessingNumber > answer)
   {
      if (score > 0)
      {
         letsGuessSel('A LOT OF!');
         score--;
         scoreSel(score);
      }
   }
   else if(guessingNumber < answer)
   {
      if (score > 0)
      {
         letsGuessSel('SO FEW!');
         score--;
         scoreSel(score);
      }
   }
   else if(guessingNumber == answer)
   {
      bodyStyle('green');
      guessHSel('YOU GUESSED RIGHT!');
      letsGuessSel('WIN!');
      if(result < score)
      {
         document.querySelector('.result').textContent = score;
         result = score;
      }
      answerSel(answer);
   }

   if(score === 0)
   {
      result = 0;
      bodyStyle('red');
      guessHSel("YOU DIDN'T GUESS!");
      letsGuessSel('DEFEAT!');
   }

}

document.addEventListener('keydown', function(event) {
   if(event.key === 'Enter') {
      checkNumber();
   }
});

document.querySelector('.check').addEventListener('click',checkNumber);

document.querySelector('.again').addEventListener('click', function()
{
   answer = Math.round(Math.random() * (20 - 1) + 1);
   document.querySelector('.input_number').value = '';
   bodyStyle('black');
   guessHSel('GUESS THE NUMBER!');
   letsGuessSel("LET'S GUESS!");
   answerSel('???');
   score = 10;
   scoreSel(score);
});
