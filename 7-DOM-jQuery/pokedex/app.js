// console.log("hello from app.js")

var pokemonNameField = document.getElementById('pokemon-name');
var addPokemonBtn = document.getElementById('add-pokemon');
var pokemonList = document.getElementById('pokemon-list');

console.log(pokemonNameField);
console.log(addPokemonBtn);
console.log(pokemonList);

addPokemonBtn.onclick = function() {
    // Creates a new list item every time you click the button
    var newListItem = document.createElement('li');
    
    // The list item includes the inner HTML in the element
    newListenItem.innerHTML = pokemonNameField.value;
    
    // Adds new child to the list item
    pokemonList.appendChild(newListItem);
    
    // Make field empty on click
    pokemonNameField.value = "";
}