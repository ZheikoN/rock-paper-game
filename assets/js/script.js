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


function standardGameRules() {
    let standardGameRules = document.getElementById('rule');

    standardGameRules.innerHTML += "<h2>Rock Paper Scissors Rules</h2><p>Rock Paper Scissors is a zero sum game that is usually played by two people using their hands and no tools. The idea is to make shapes with an outstretched hand where each shape will have a certain degree of power and will lead to an outcome.</p><br><p>Although the game has a lot of complexity to it, the rules to play it are pretty simple.The game is played where players deliver hand signals that will represent the elements of the game; rock, paper and scissors.</p> <h3>The outcome of the game is determined by 3 simple rules:</h3> <p>Rock wins against scissors. </p><p>Scissors win against paper. </p><p>Paper wins against rock.</p>";
}

function advancedGameRules() {
    let advancedGameRules = document.getElementById('rule');
    advancedGameRules.innerHTML += "<h2>Rock, Paper, Scissors, Lizard, Spock</h2>"
    advancedGameRules.innerHTML += "<p>Rock, Paper, Scissors, Lizard, Spock is a game of chance that expands. It is first used to settle a dispute about what to watch on TV between Sheldon and Raj in 'The Lizard-Spock Expansion'.</p>"
    advancedGameRules.innerHTML += "<h3>Rules:</h3>"
    advancedGameRules.innerHTML += "<p>The game is an expansion on the game Rock, Paper, Scissors. Each player picks a variable and reveals it at the same time. The winner is the one who defeats the others. In a tie, the process is repeated until a winner is found.</p>"
    advancedGameRules.innerHTML += "<p>Almost always, the boys will all pick Spock at the same time and tie over and over again.</p>"
    advancedGameRules.innerHTML += "<p>Scissors cuts Paper</p>"
    advancedGameRules.innerHTML += "<p>Paper covers Rock</p>"
    advancedGameRules.innerHTML += "<p>Rock crushes Lizard</p>"
    advancedGameRules.innerHTML += "<p>Lizard poisons Spock</p>"
    advancedGameRules.innerHTML += "<p>Spock smashes Scissors</p>"
    advancedGameRules.innerHTML += "<p>Scissors decapitates Lizard</p>"
    advancedGameRules.innerHTML += "<p>Lizard eats Paper</p>"
    advancedGameRules.innerHTML += "<p>Paper disproves Spock</p>"
    advancedGameRules.innerHTML += "<p>Spock vaporizes Rock</p>"
    advancedGameRules.innerHTML += "<p>(and as it always has) Rock crushes Scissors</p>"
}

function clearContent() {
    document.getElementById('rule').innerHTML = "";
}