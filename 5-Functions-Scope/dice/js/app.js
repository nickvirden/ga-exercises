document.getElementById('roll-dice').onclick = rollDice;

function rollDice() {
    
    'use strict';
        
    var diceMax = 6,
        chngAnyDice = Array.from(document.getElementsByClassName('dice'));

    chngAnyDice.forEach(function (element) {
        element.className = 'dice dice-' + Math.ceil(Math.random() * diceMax);
    }); 
    
}