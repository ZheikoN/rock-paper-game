const index = {
    rock: {
      rock: 'Rock ties rock, its a draw!',
      paper: 'Paper covers Rock, you lose!',
      scissors: 'Rock crushes Scissors, you win!',
      lizard:'Rock crushes Lizard, you win!',
      spock:'Spock vaporizes Rock, you lose!',
    },
    paper: {
      rock: 'Paper covers Rock, you win!',
      paper: 'Paper ties paper, its a draw!',
      scissors: 'Scissors cuts Paper, you lose!',
      lizard:'Lizard eats Paper, you lose!',
      spock:'Paper disproves Spock, you win!',
    },
    scissors: {
      rock: 'Rock crushes Scissors, you lose!',
      paper: 'Scissors cuts Paper, you win!',
      scissors: 'Scissors tie scissors, its a draw!',
      lizard:'Scissors decapitates Lizard, you win!',
      spock:'Spock smashes Scissors, you lose!',
    },
    lizard: {
      rock: 'Rock crushes Lizard, you lose!',
      paper: 'Lizard eats Paper, you win!',
      scissors: 'Scissors decapitates Lizard, you lose!',
      lizard:'Lizard mates lizard, you got lizard offspring now. Its a draw!',
      spock:'Lizard poisons Spock, you win!',
    },
    spock: {
      rock: 'Spock vaporizes Rock, you win!',
      paper: 'Paper disproves Spock, you lose!',
      scissors: 'Spock smashes Scissors, you win!',
      lizard:'Lizard poisons Spock, you lose!',
      spock:'Spock + spock? I guess thats a draw then!',
    },
  }
let scorePlayer = 0;
let scoreOponent = 0;
let scoreDraw = 0;
let playerHistory = [];
let oponentHistory = [];
let gameSelected = document.getElementById("btn-game");
gameSelected.addEventListener("click", gameSelect);

document.addEventListener("DOMContentLoaded", function () {
    let gameSelected = document.getElementById("btn-game");
    gameSelected.addEventListener("click", gameSelect);
    document.getElementById('clearHistory').addEventListener("click", clearHistory);

    let buttons = document.getElementsByClassName("btn-play");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            let playerHand = this.getAttribute("data-type"); 
            let oponentHand = gameSelect();
            let finalResult = index[playerHand][oponentHand];
            displayPlayerHand(playerHand);
            displayOponentHand(oponentHand)
            displayResult(finalResult, scorePlayer, scoreOponent, scoreDraw);
            calculateScore(finalResult);
            dropPlayerHistory();
            dropOponentHistory();
        })

    }
})

function clearHistory() {
    playerHistory = [];
    oponentHistory = [];
    document.getElementById('player-select').innerHTML = '';
    document.getElementById('oponent-select').innerHTML = '';

}

function dropPlayerHistory() {
    if (playerHistory.length == 10) {
        playerHistory.shift();
    }
}

function dropOponentHistory() {
    if (oponentHistory.length == 10) {
        oponentHistory.shift();
    }
}
/**
 * Function is adding +1 on wins, draws and losses
 * @param {*} finalResult 
 */
function calculateScore(finalResult) {
    if (finalResult.includes('win')) {
        ++scorePlayer;
    } else if (finalResult.includes('lose')) {
        ++scoreOponent;
    } else {
        ++scoreDraw;
    }
}

/**
 * Function is displaying results of calculateScore and shows a scoreboard
 */
function displayResult(finalResult, scorePlayer, scoreOponent, scoreDraw) {
            document.getElementById('result').innerText = `${finalResult}`;
            document.getElementById('win').innerText = `Win: ${scorePlayer}`;
            document.getElementById('draw').innerText = `Draw: ${scoreDraw}`;
            document.getElementById('loss').innerText = `Loss: ${scoreOponent}`;
    
}

/**
 * Function replaces written string result for a HTML code that shows picture for player's turn
 */
function displayPlayerHand(playerHand) {
    let playerHandImage;
    if (playerHand == 'rock') {
        playerHandImage = '<i class="fa-solid fa-hand-back-fist"></i><br>';
        }else if (playerHand == 'paper') {
            playerHandImage = '<i class="fa-solid fa-hand"></i><br>';
        }else if (playerHand == 'scissors') {
            playerHandImage = '<i class="fa-solid fa-hand-scissors"></i><br>';
        }else if (playerHand == 'lizard') {
            playerHandImage = '<i class="fa-solid fa-hand-lizard"></i><br>';
        } else {
            playerHandImage = '<i class="fa-solid fa-hand-spock"></i><br>';
        }
        playerHistory.push(playerHandImage);
        for (let record of playerHistory) {
        document.getElementById('player-select').innerHTML = 'You played:<br>' + playerHistory;
        };

}


/**
 * Function replaces written string result for a HTML code that shows picture for oponent's turn
 */
function displayOponentHand(oponentHand) {

    let oponentHandImage;
    if (oponentHand == 'rock') {
        oponentHandImage = '<i class="fa-solid fa-hand-back-fist"></i><br>';
        }else if (oponentHand == 'paper') {
            oponentHandImage = '<i class="fa-solid fa-hand"></i><br>';
        }else if (oponentHand == 'scissors') {
            oponentHandImage = '<i class="fa-solid fa-hand-scissors"></i><br>';
        }else if (oponentHand == 'lizard') {
            oponentHandImage = '<i class="fa-solid fa-hand-lizard"></i><br>';
        } else {
            oponentHandImage = '<i class="fa-solid fa-hand-spock"></i><br>';
        }
                    
        oponentHistory.push(oponentHandImage);
        for (let record of oponentHistory) {
        document.getElementById('oponent-select').innerHTML = 'Oponent played:<br>' + oponentHistory;
        };
}


/**
 * This functions is selecting Game to be played along with Rules to display next to the game area
 */

function gameSelect() {
    
    document.getElementById('game-container').style.display="flex"
    let standardGame = document.getElementById('standard-game');
    let advancedGame = document.getElementById('advanced-game');
    let dificulty = 0;

    if (standardGame.checked == true) {
        clearContent();
        standardGameRules();
        dificulty = oponentSign();
       
    } else if (advancedGame.checked == true) {
        clearContent();
        advancedGameRules();
        dificulty = oponentSignAdvanced();
        
    } else {
        dificulty = 0;
        alert(`nothing was selected`);
        throw 'nothing was selected, aborting!';
    }
return dificulty;
}

/**
 * This function explains rules of Standard Game
 */
function standardGameRules() {
    let standardGameRules = document.getElementById('rule');

    standardGameRules.innerHTML += `<h2>Rock Paper Scissors Rules</h2>
    <p>Rock Paper Scissors is a zero sum game that is usually played by two people using their hands and no tools. The idea is to make shapes with an outstretched hand where each shape will have a certain degree of power and will lead to an outcome.</p>
    <br>
    <p>Although the game has a lot of complexity to it, the rules to play it are pretty simple.The game is played where players deliver hand signals that will represent the elements of the game; rock, paper and scissors.</p>
    <h3>The outcome of the game is determined by 3 simple rules:</h3> 
    <p>Rock wins against scissors. </p>
    <p>Scissors win against paper. </p>
    <p>Paper wins against rock.</p>`;
}

/**
 * This function explains rules of Advanced Game
 */
function advancedGameRules() {
    let advancedGameRules = document.getElementById('rule');
    advancedGameRules.innerHTML += `<h2>Rock, Paper, Scissors, Lizard, Spock</h2>
    <p>Rock, Paper, Scissors, Lizard, Spock is a game of chance that expands. It is first used to settle a dispute about what to watch on TV between Sheldon and Raj in 'The Lizard-Spock Expansion'.</p>
    <h3>Rules:</h3>
    <p>The game is an expansion on the game Rock, Paper, Scissors. Each player picks a variable and reveals it at the same time. The winner is the one who defeats the others. In a tie, the process is repeated until a winner is found.</p>
    <p>Almost always, the boys will all pick Spock at the same time and tie over and over again.</p>
    <p>Scissors cuts Paper</p>
    <p>Paper covers Rock</p>
    <p>Rock crushes Lizard</p>
    <p>Lizard poisons Spock</p>
    <p>Spock smashes Scissors</p>
    <p>Scissors decapitates Lizard</p>
    <p>Lizard eats Paper</p>
    <p>Paper disproves Spock</p>
    <p>Spock vaporizes Rock</p>
    <p>(and as it always has) Rock crushes Scissors</p>`
}

/**
 * Simple function to clear content for the rules not to stack
 */
function clearContent() {
    document.getElementById('rule').innerHTML = "";
}

/**
 * Function that autogenerates oponent's move
 * @returns oponentHand
 */
function oponentSign() {
    document.getElementById('lizard').style.display="none";
    document.getElementById('spock').style.display="none";
    let oponentSelection = Math.floor(Math.random() * 3);
    let oponentHand;
    if (oponentSelection == 0) {
        oponentHand = 'rock';
    } else if (oponentSelection == 1) {
        oponentHand = 'paper';
    } else {
        oponentHand = 'scissors';
    }
    return oponentHand;
}

function oponentSignAdvanced() {
    document.getElementById('lizard').style.display="block";
    document.getElementById('spock').style.display="block";
    let oponentSelection = Math.floor(Math.random() * 5);
    let oponentHand;
    if (oponentSelection == 0) {
        oponentHand = 'rock';
    } else if (oponentSelection == 1) {
        oponentHand = 'paper';
    }else if (oponentSelection == 2) {
        oponentHand = 'scissors';
    }else if (oponentSelection == 3) {
        oponentHand = 'lizard';
    } else {
        oponentHand = 'spock';
    }
    return oponentHand;
}
