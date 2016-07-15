// How many tables will you need for any number of people coming to a dinner party?

var numTables = function(numPeople) {
    
    var numPPT = 8;
    
    if (numPeople % numPPT !== 0) {
        return Math.ceil(numPeople/numPPT);
    } else {
        return numPeople/numPPT;
    }
};

console.log("You need " + numTables(15) + " tables.");
console.log("You need " + numTables(17) + " tables.");
console.log("You need " + numTables(80) + " tables.");