/*var myTruck = new Vehicle(2010);

console.log(myTruck);

function Vehicle(year) {
    
    this.year = year;
}


function Pokemon(type, level) {
    this.type = type;
    this.level = level;
}

Pokemon.prototype.levelUp = function() {
    this.level++;
}

var pikachu = new Pokemon('electric', 10);

console.log('pikachu', pikachu);
pikachu.levelUp();
console.log('pikachu', pikachu);*/

function Monkey(name, species) {
    this.name = name;
    this.species = species;
    this.foodsEaten = [];
}

Monkey.prototype.eats = function(food) {
    this.foodsEaten.push(food);
};

Monkey.prototype.introduce = function () {
    console.log("Hi, my name is " + this.name + ". I'm a " + this.species + " and I've eaten the following: " + this.foodsEaten.join(', '));
};

var orangutan = new Monkey('Orangy', 'orangutan');

console.log(orangutan);
orangutan.eats('banana');
orangutan.eats('apple');
console.log(orangutan);
orangutan.introduce();

/*var spider = new Monkey('Spidy', 'spider monkey');

console.log(spider);
spider.eats('chicken salad sandwich');
console.log(spider);
spider.introduce();

var howler = new Monkey('Shouty', 'howler monkey');

console.log(howler);
howler.eats('ant mound');
console.log(howler);
howler.introduce();*/

var myStringifiedOrangutan = JSON.stringify(orangutan);
console.log(myStringifiedOrangutan);