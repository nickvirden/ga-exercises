/* This is actually random */

eightBallResponseTwo = function() {
    
    responseArray = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes, definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
    ];
    
    var result = responseArray[Math.floor(Math.random() * responseArray.length)];
    
    console.log(result);
};

eightBallResponseTwo();

/* My Attempt: Gets stuck on the first three responses

eightBallResponseOne = function() {
    
    responseArray = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes, definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
    ];
    
    randomResponse = Math.random();
    
    for (response in responseArray) {
        
        if (randomResponse < ((response + 1)/responseArray.length)) { // This probably gives really weird math
            
            console.log(responseArray[response]);
            break;
        }
    };  
};

*/