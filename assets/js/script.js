function gameSelect() {

    let standardGame = document.getElementById('standard-game');
    let advancedGame = document.getElementById('advanced-game');

    if (standardGame.checked == true) {
        // alert(`selected ${standardGame.value}`);
        standardGameRules();
    } else if (advancedGame.checked == true) {
        alert(`selected ${advancedGame.value}`);
    } else {
        alert(`nothing was selected`);
    }

}


function standardGameRules() {
    let standardGameRules = document.getElementById('rule');

    standardGameRules.innerHTML += "<h2>standard rules</h2>";
}