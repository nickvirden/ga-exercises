// Once the page loads, prep all of this stuff
window.onload = (function () {
    
    // INPUT BOX
    var newCityInput = document.getElementById('get-weather'),
        getWeatherBtn = document.getElementById('get-weather-button');
    
    getWeatherBtn.onclick = function(event) {
        
        // Don't POST to the server
        event.preventDefault();
        
        // Get the city value, which is a string
        var newCity = newCityInput.value;
        
        // Get rid of all the whitespace in the input
        newCity = newCity.replace(/\s+/g, '');
        
        // Execute API call to OpenWeatherMap
        getURL('http://api.openweathermap.org/data/2.5/weather?q=' + newCity + '&units=imperial&APPID=53e3f2600e68ea4ea29371f903e21ecc');
        
        // BONUS 3 - GIPHY Integration
        /* 
        
        var someList = document.getElementById("some-element");
        
        // Funny Cat example
        getURL('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC')
        
        var newImg = document.getElementById("some-element").innerHTML = "<img src="'" + data.data.embed_url + "'" alt='' />";
        
        someList.appendChild(newImg);
        
        */
        
        // Clear input box
        newCityInput.value = "";
    };
    
    // BUTTON
    // Referece a couple of buttons by their IDs
    // var weatherBtn = document.getElementById('get-weather');
    
    // When you click the button, get the URL
    /*
    weatherBtn.addEventListener('click', function () {
        getURL('http://api.openweathermap.org/data/2.5/weather?q=Austin,TX&APPID=53e3f2600e68ea4ea29371f903e21ecc');
    }); */
});

// Make a GET request to this URL
function getURL(url) {
    
    console.log(url);
    
    // Create a new XMLHttp Request
    var xhr = new XMLHttpRequest();
    
    // Once the ReadyState of the page changes, execute the function
    xhr.onreadystatechange = handleXHR;
    
    // Initializes the URL using a get request
    xhr.open('GET', url);
    
    // Sends the GET request to the URL
    xhr.send();
}

// Tracks the ready state of the request
function handleXHR() {
    
    // If the entirety of the contents requested has been sent   
    if (this.readyState === XMLHttpRequest.DONE) {
        
        // If the page exists
        if (this.status === 200) {
            
            // Parse the JSON data into text
            var data = JSON.parse(this.responseText);
            
            // console.log(data);
            
            // Print that data to the console 
            console.log("It's " + Math.round(data.main.temp) + ". It might be " + data.weather[0].description + " in (usually) beautiful " + data.name);
            
            // GIPHY SOLUTION: return data;

        } else {
            console.log(this.status, 'Uh oh!');
        }
    }
}