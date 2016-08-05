/* global $ */

$(function() {
    
    var $createStartupBtn = $('#create-startup'),
        $makeFavoriteBtn = $('#make-favorite'),
        $printFavoriteBtn = $('#print-favorite'),
        existingSU = [],
        randomSU = [],
        favSU = [];
    
    $createStartupBtn.on(
        'click',
        randomStart(existingSU, randomSU)
    );
    
    
    // Print out Result
    console.log("It's like ", nameofstartup, "but for", random)
    
    
    function randomStart(startUpArray, randomItemArray) {
        
    }

});