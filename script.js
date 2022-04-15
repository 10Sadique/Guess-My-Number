'use strict';

/*    

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Answer!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

// document.querySelector('.number').textContent = secretNumber;

// Check button Event Listener
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // when there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔ No number!';
        displayMessage('⛔ No number!');

        // when player wins
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🎉 Correct Answer!';
        displayMessage('🎉 Correct Answer!');

        document.querySelector('.number').textContent = secretNumber;

        // manipulationg css
        document.querySelector('body').style.backgroundColor = '#60b347'; // changes the background color to green;

        document.querySelector('.number').style.width = '30rem';

        // checking highscore
        if (score > highScore) {
            highScore = score;

            document.querySelector('.highscore').textContent = highScore;
        }

        // when guess is wrong;
        // refactored code;
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent =
            //     guess > secretNumber ? '📈 Too high' : '📉 Too low';

            displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');

            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lose!!';
            document.querySelector('.score').textContent = 0;
        }
    }

    // when the guess is too high
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈 Too high';

    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lose!!';
    //         document.querySelector('.score').textContent = 0;
    //     }

    //     // when the guess is too low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉 Too low';

    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lose!!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});

// Again button event lostern and hanler
document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    // resetting the background color
    document.querySelector('body').style.backgroundColor = '#222';

    // resetting the .number width back to 15rem
    document.querySelector('.number').style.width = '15rem';

    // restting message
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');

    // resetting the secretNumber
    document.querySelector('.number').textContent = '?';

    // resetting the score
    document.querySelector('.score').textContent = score;

    // resetting the input field
    document.querySelector('.guess').value = '';
});
