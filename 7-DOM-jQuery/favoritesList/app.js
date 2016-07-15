/* Independent Practice
Making a favorites list: DOM manipulation
- When the user clicks the submit button, take the value they've typed 
  into the input box and add it to the list (remember: appendChild)
- Also, when a new item is added to the list, clear the input box.  
  (Hint: the `value` property of the input box, before anyone types in it,
  is the empty string.)
Bonus:
When they click submit without typing anything, alert the user 
"you must type in a value!"
*/

// Function that takes a <ul> and a input value as arguments
function addToList(list, newThing) {
    
    // Creates empty <li> tags
    var newThingLi = document.createElement('li');
    var newImageLi = document.createElement('img');
    
    // Stores the text you input
    var newThingText = document.createTextNode(newThing);
    
    // Prevent it from adding anything if there's a blank string
    if (newThingText.length < 1) {
        return;
    }
    
    // Add the text between some <li> tags
    newThingLi.appendChild(newThingText);
    
    // Add the thing you input that is now between <li></li> tags to the end of the <ul>
    list.appendChild(newThingLi);
    
    console.log(newThingText);
    console.log(newThingLi);
    console.log(list);
    
}

window.onload = function() {
    
    // Gets each elements values
    var button = document.getElementById('new-thing-button');
    var thingList = document.getElementById('fav-list');
    var newThingInput = document.getElementById('new-thing');
    
    // When you click
    button.onclick = function(event) {
        
        // Don't post to the server
        event.preventDefault();
        
        // Stores the value in the input box in a variable
        var newThing = newThingInput.value;
        
        // Execute function on the inputs
        addToList(thingList, newThing);
        
        // Clear input
        newThingInput.value = "";
    };
};