var age = 22;

if (age >= 21) {
    console.log("Let's have a glass of wine.");
} else {
    console.log("DUDE. CHUG.");
}


// Shorthand for an 'if' statement that has a true and false
var message = (age >= 21) ?
            "What's your order?" : // True
            "No booze for you."; // False

console.log(message);


/* TYPE COERCION */

console.log('4 < 6', 4 < '6'); // JS converts them to equivalent types to compare them. 
// Side note: capital letters come before lowercase letters, so if you did an operand with a capital and a lowercase letter, the capital letter would be greater

// Falsey values ---> false, 0, "", NaN, null, undefined (empty stuff)

var family = ['alex', 'brian'];

family.forEach(
    function(element, idx, array) {
        console.log(element, idx, array);
    }
);


