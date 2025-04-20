// Declaring Wins, Loses and Ties as Zero
// Getting The Value From The Object Score After Converting It Back To JavaScript Code
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0, loses: 0, ties: 0
};

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
}

updateScoreElement();

//ComputerMove Function
function pickComputerMove() {
    const randomNumber = Math.random();
    // Declare The ComputerMove As Null
    let computerMove = ``;
    // Then Update The ComputerMove As Rock, Paper or Scissors
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = `Rock`;
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = `Paper`;
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = `Scissors`;
    }
    return computerMove;
}

// PlayerMove Function
function playGame(playerMove) {
    const computerMove = pickComputerMove();
    console.log(computerMove);
    // Declare The Result As Null
    let result = ``;
    // If The Player Picks Rock
    if (playerMove === `Rock`) {
        if (computerMove === `Rock`) {
            result = `Tie`;
        } else if (computerMove === `Paper`) {
            result = `You Lose`;
        } else if (computerMove === `Scissors`) {
            result = `You Win`;
        }

        // If The Player Picks Paper
    } else if (playerMove === `Paper`) {
        if (computerMove === `Paper`) {
            result = `Tie`;
        } else if (computerMove === `Scissors`) {
            result = `You Lose`;
        } else if (computerMove === `Rock`) {
            result = `You Win`;
        }

        // If The Player Picks Scissors
    } else if (playerMove === `Scissors`) {
        if (computerMove === `Scissors`) {
            result = `Tie`;
        } else if (computerMove === `Rock`) {
            result = `You Lose`;
        } else if (computerMove === `Paper`) {
            result = `You Win`;
        }
    }

    // Updates The Score Based On The Result
    if (result === `You Win`) {
        score.wins = score.wins + 1;
    } else if (result === `You Lose`) {
        score.loses = score.loses + 1;
    } else if (result === 'Tie') {
        score.ties = score.ties + 1;
    }

    // Set The localStorage Method To Store The Score After Stringifying The Object Score
    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    // Alerting The Player Of Their Status And Score
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You <img src="img/${playerMove}-emoji.png"> <img src="img/${computerMove}-emoji.png"> Computer`;
}