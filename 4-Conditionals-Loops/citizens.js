checkAge = function (age) {

    if (age < 16) {
        console.log("Looks like you can only go to school, kid.");
    } else if (age < 18) {
        console.log("Congrats, you can drive, kid!");
    } else if (age < 21) {
        console.log("You can vote, ya hipster.");
    } else if (age < 25) {
        console.log("You're legally not a kid anymore. Cheers to that!");
    } else if (age < 35) {
        console.log("Go rent a Ferrari or something!");
    } else if (age < 62) {
        console.log("Hello, President [Insert Name Here].");
    } else {
        console.log("Damn you old. Collect yo benefits.")
    };
    
};

checkAge(17);