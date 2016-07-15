beersOnTheWall = function(numBeers) {
    
    x = 0;
    
    while (x < numBeers) {
        
        var numBeers = numBeers
        
        if (numBeers === 2) {
            console.log(numBeers + " bottles of beer on the wall, " + numBeers + " bottles of beer! Take one down, pass it around! " + (numBeers - 1)  + " bottle of beer on the wall!");
            
        } else if (numBeers === 1) {
            console.log(numBeers + " bottle of beer on the wall, " + numBeers + " bottle of beer! Take one down, pass it around! No more bottles of beer on the wall. :(");
            
        } else {
            console.log(numBeers + " bottles of beer on the wall, " + numBeers + " bottles of beer! Take one down, pass it around! " + (numBeers - 1) + " more bottles of beer on the wall!");
        };
                    
        numBeers--;
    }
};

beersOnTheWall(5);