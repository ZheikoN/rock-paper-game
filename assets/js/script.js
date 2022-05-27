const index = {
    rock: {
      rock: 'draw',
      paper: 'loose',
      scissors: 'win',
      lizard:'loose',
      spock:'win',
    },
    paper: {
      rock: 'win',
      paper: 'draw',
      scissors: 'loose',
      lizard:'loose',
      spock:'win',
    },
    scissors: {
      rock: 'loose',
      paper: 'win',
      scissors: 'draw',
      lizard:'win',
      spock:'loose',
    },
    lizard: {
      rock: 'loose',
      paper: 'win',
      scissors: 'loose',
      lizard:'draw',
      spock:'win',
    },
    spock: {
      rock: 'loose',
      paper: 'loose',
      scissors: 'win',
      lizard:'loose',
      spock:'draw',
    },
  }

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            let playerHand = this.getAttribute("data-type");
            let oponentHand = oponentSign();
            let result = compareHands(playerHand, oponentHand);
            console.log(`Player selected ${playerHand}`);
            let finalResult = index[playerHand][oponentHand];
            console.log(`Player ${finalResult} this game.`);
        })



    }
})



/**
 * This functions is selecting Game to be played along with Rules to display next to the game area
 */

function gameSelect() {

    let standardGame = document.getElementById('standard-game');
    let advancedGame = document.getElementById('advanced-game');

    if (standardGame.checked == true) {
        clearContent();
        standardGameRules();
    } else if (advancedGame.checked == true) {
        clearContent();
        advancedGameRules();
    } else {
        alert(`nothing was selected`);
    }

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

function actualStandardGame() {
    let userSelection = document.getElementById
}

/**
 * Function that autogenerates oponent's move
 * @returns oponentHand
 */
function oponentSign() {
    let oponentSelection = Math.floor(Math.random() * 3);
    let oponentHand;
    if (oponentSelection == 0) {
        oponentHand = 'rock';
    } else if (oponentSelection == 1) {
        oponentHand = 'paper';
    } else {
        oponentHand = 'scissors';
    }
    console.log(`oponent selected ${oponentHand}`);
    return oponentHand;
}

function compareHands(playerHand, oponentHand) {
    let result = `win or lose`;

    if (playerHand === oponentHand) {
        result = 'draw';
    } 
    return result;
}