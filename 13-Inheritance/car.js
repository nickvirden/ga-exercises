/*var makeCar = function (year, make, model) {
    
    var car = {
        year: year,
        make: make,
        model: model
    };
    
    var car1 = makeCar(2001, 'Isuzu', 'Trooper');
    console.log(car1);
    
};*/

function Car(year, make, model) {
    this.year = year;
    this.make = make;
    this.model = model;
    this.printStats = function() {
        console.log(this.year + " " + this.make  + " " + this.model);
    }
}

var myCar = new Car(2001, 'Isuzu', 'Trooper');
// myCar.printStats();

Car.prototype.year = 2000;
Car.prototype.make = 'Honda';
Car.prototype.model = 'Civic';

Car.prototype.printStats = function() {
    console.log(this.year + " " + this.make  + " " + this.model);
}

Car.prototype.avgMPG = 25;
Car.prototype.fuelLeft = 24;
Car.prototype.odometer = 0;
Car.prototype.driveCar = function(driveMiles) {
    
    var fuelLeft = this.fuelLeft,
        mpg = this.avgMPG;
    
    // Check to see if driveMiles is an integer
    // var driveMiles = parseInt(driveMiles);
    
    if (typeof(driveMiles) === 'number' && (driveMiles <= mpg*fuelLeft)) {
        
        this.odometer += driveMiles;
        this.fuelLeft -= (driveMiles / this.avgMPG);
        
    } else if (driveMiles > mpg*fuelLeft) {
        
        console.log("You can't drive " + driveMiles + "! You don't have enough fuel. You only have " + (mpg*fuelLeft) + " miles left you can drive. :O")
        return;
        
    } else {
        console.log("Uh oh! That ain't a number!");
        return;
    }
    
    console.log('Drove', driveMiles);
    console.log('Odometer', this.odometer);
    console.log('Fuel Left', this.fuelLeft);
    
}

myCar.driveCar(50);
myCar.driveCar(1000);