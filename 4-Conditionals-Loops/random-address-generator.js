var randomAddress = function() {
    
    var streetNumber = ['567', '4915', '1010', '7230'],
        streetName = ['Crouching Tiger Lane', 'Kick Ass Boulevard', 'Liberty Street', 'Brexit Cove'],
        city = ['Dime Box', 'Portlandia', 'Ames', 'Los Angeles'],
        state = ['TX', 'IA', 'OR', 'CA'],
        zipCode = ['07523', '48969', '64890', '14868'];
    
    var resStreetNumber = streetNumber[Math.floor(Math.random() * streetNumber.length)],
        resStreetName = streetName[Math.floor(Math.random() * streetName.length)],
        resCity = city[Math.floor(Math.random() * city.length)],
        resState = state[Math.floor(Math.random() * state.length)],
        resZipCode = zipCode[Math.floor(Math.random() * zipCode.length)];
    
    console.log(resStreetNumber + " " + resStreetName + ", " + resCity + ", " + resState + " " + resZipCode);
    
};

randomAddress();