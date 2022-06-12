const index = {
    rock: {
        rock: 'Rock ties rock, its a draw!',
        paper: 'Paper covers Rock, you lose!',
        scissors: 'Rock crushes Scissors, you win!',
        lizard: 'Rock crushes Lizard, you win!',
        spock: 'Spock vaporizes Rock, you lose!',
    },
    paper: {
        rock: 'Paper covers Rock, you win!',
        paper: 'Paper ties paper, its a draw!',
        scissors: 'Scissors cuts Paper, you lose!',
        lizard: 'Lizard eats Paper, you lose!',
        spock: 'Paper disproves Spock, you win!',
    },
    scissors: {
        rock: 'Rock crushes Scissors, you lose!',
        paper: 'Scissors cuts Paper, you win!',
        scissors: 'Scissors tie scissors, its a draw!',
        lizard: 'Scissors decapitates Lizard, you win!',
        spock: 'Spock smashes Scissors, you lose!',
    },
    lizard: {
        rock: 'Rock crushes Lizard, you lose!',
        paper: 'Lizard eats Paper, you win!',
        scissors: 'Scissors decapitates Lizard, you lose!',
        lizard: 'Lizard mates lizard, you got lizard offspring now. Its a draw!',
        spock: 'Lizard poisons Spock, you win!',
    },
    spock: {
        rock: 'Spock vaporizes Rock, you win!',
        paper: 'Paper disproves Spock, you lose!',
        scissors: 'Spock smashes Scissors, you win!',
        lizard: 'Lizard poisons Spock, you lose!',
        spock: 'Spock + Spock? I guess thats a draw then!',
    },
};
const rule = document.getElementById('rule');
const playerSelect = document.getElementById('player-select');
const oponentSelect = document.getElementById('oponent-select');
let scorePlayer = 0;
let scoreOponent = 0;
let scoreDraw = 0;
let playerHistory = [];
let oponentHistory = [];
let isRockPaperScissors = true;

document.getElementById('standard-game-btn').addEventListener("click", function () {
    isRockPaperScissors = true;
    launchStandardGame();
});

document.getElementById('advanced-game-btn').addEventListener("click", function () {
    isRockPaperScissors = false;
    launchAdvancedGame();
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('clearHistory').addEventListener("click", clearHistory);
    const buttons = document.getElementsByClassName("btn-play");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            const playerHand = this.getAttribute("data-type");
            const oponentHand = oponentSignAdvanced(isRockPaperScissors ? 3 : 5);
            const finalResult = index[playerHand][oponentHand];
            displayHand(playerHand, playerHistory, "player-select", "player-select-current");
            displayHand(oponentHand, oponentHistory, "oponent-select", "oponent-select-current");
            displayResult(finalResult, scorePlayer, scoreOponent, scoreDraw);
            calculateScore(finalResult);
            dropHistory(playerHistory);
            dropHistory(oponentHistory);
        });
    }
});

/**
 * This function is being run every time a game is selected and clears all scores and progress creating clean canvas for next game
 */

function clearHistory() {
    playerHistory = [];
    oponentHistory = [];
    scorePlayer = 0;
    scoreOponent = 0;
    scoreDraw = 0;
    rule.innerHTML = '';
    playerSelect.innerHTML = '';
    oponentSelect.innerHTML = '';
    document.getElementById('win').innerText = ``;
    document.getElementById('draw').innerText = ``;
    document.getElementById('loss').innerText = ``;
    document.getElementById('player-select-current').innerText = ``;
    document.getElementById('oponent-select-current').innerText = ``;
}

/**
 * 
 * Function ensures that max of 10 fields are being displayed in the history log
 */

function dropHistory(history) {
    if (history.length === 10) history.pop();
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
    document.getElementById('win').innerText = `Your win: ${scorePlayer}`;
    document.getElementById('draw').innerText = `Draw: ${scoreDraw}`;
    document.getElementById('loss').innerText = `Oponent win: ${scoreOponent}`;
}

/**
 * stores played hand into an array to display it in history scoreboard
 */

function displayHand(hand, history, target, currentTarget) {

    const img = `<img src="assets/images/${hand}.jpg" alt="${hand}"><br>`;
    history.unshift(img);
     
    for (let record of history) {
        document.getElementById(currentTarget).innerHTML = `<span style='opacity: 1'>${history[0]}</span><br>`;
        document.getElementById(target).innerHTML = `<span style='opacity: 0.5'>${history}</span><br>`;
    }
}

/**
 * Runs standard game
 */

function launchStandardGame() {
    clearHistory();
    document.getElementById('game-container').style.display = "flex";
    document.getElementById('lizard').style.display = "none";
    document.getElementById('spock').style.display = "none";
    standardGameRules();
    oponentSignAdvanced();
}

/**
 * Runs advanced game
 */

function launchAdvancedGame() {
    clearHistory();
    document.getElementById('game-container').style.display = "flex";
    document.getElementById('lizard').style.display = "block";
    document.getElementById('spock').style.display = "block";
    advancedGameRules();
    oponentSignAdvanced();
}

/**
 * This function explains rules of Standard Game
 */
function standardGameRules() {
    rule.innerHTML += `<h2>Rock Paper Scissors Rules</h2>
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
    rule.innerHTML += `<h2>Rock, Paper, Scissors, Lizard, Spock</h2>
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
    <p>(and as it always has) Rock crushes Scissors</p>`;
}

/**
 * Random generator assigning a value to the lookup table
 * 
 */

function oponentSignAdvanced(multiplier) {
    const oponentSelection = Math.floor(Math.random() * multiplier);
    if (oponentSelection === 0) { return 'rock';}
    if (oponentSelection === 1) { return 'paper';}
    if (oponentSelection === 2) { return 'scissors';}
    if (oponentSelection === 3) { return 'lizard';}
    return 'spock';
}