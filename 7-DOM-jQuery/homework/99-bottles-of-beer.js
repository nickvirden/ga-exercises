// Non-Stepping Function
$(function() {
    var $bottlesLeft = $('#bottles'),
        $submitBtn = $('#submit-bottles-btn'),
        $lyricList = $('#lyric-list');
    
    $submitBtn.on('click', function() {
            
        if ($bottlesLeft.val().match(/(\d{1,})/g) === null) {
            
            alert("This isn't a number!");
            
        } else if (($bottlesLeft.val() != "") && ($bottlesLeft.val().match(/(\d{1,})/g)[0] != null)) {
            
            // console.log($bottlesLeft.val()); // It's a string
            
            parseInt($bottlesLeft.val()); // It's now an integer
            
            // Iterates over each element in the array returned by the beersOnTheWall function
            beersOnTheWall($bottlesLeft.val()).forEach(function(index) {
               
                // Puts the element of the array between <li></li> tags to create list items in the html doc
                $lyricList.append('<li>' + index + '</li>');
                
            })                                       
        };
        
        $bottlesLeft.val('');
    })
});

function beersOnTheWall(numBeers) {
    
    var $lyricLines = [];
    
    x = 0;
    
    while (x < numBeers) {
        
        var numBeers = numBeers
        
        if (numBeers === 2) {
            
            $lyricLines.push(numBeers + " bottles of beer on the wall, " + numBeers + " bottles of beer! Take one down, pass it around! " + (numBeers - 1)  + " bottle of beer on the wall!");
            
        } else if (numBeers === 1) {
            
            $lyricLines.push(numBeers + " bottle of beer on the wall, " + numBeers + " bottle of beer! Take one down, pass it around! No more bottles of beer on the wall. :(");
            
         } else {
             
            $lyricLines.push(numBeers + " bottles of beer on the wall, " + numBeers + " bottles of beer! Take one down, pass it around! " + (numBeers - 1) + " more bottles of beer on the wall!");
        };
                    
        numBeers--;
    }
    
    return $lyricLines;
};