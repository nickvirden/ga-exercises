/**
 * Reinventing the Wheel: jQuery's $.get method
 *
 * Last class we saw how jquery’s $.get method facilitates making HTTP GET requests.
 * For this exercise you will implement your own $.get helper function.
 *
 * Directions
 *
 * 1. Your $.get method should take 3 parameters
 *     1. url string: A url to send the HTTP request to
 *     2. onSuccess: A callback function which should be called once data
 *        is returned from the server and a 200 was returned. The success body
 *        should be sent back to the callback as the only argument.
 *     3. onError: A callback function which should be called once a response
 *        was received and the status was not 200. The status and success body
 *        should be sent back to the callback as the only 2 arguments.
 * 2. You should use an XHR to make the underlying HTTP request.
 * 3. Bonus: Reinvent the $.ajax method.
 *
 * DO NOT USE JQUERY.
 */

var $ = {
    get: function(url, onSuccess, onError) {
        
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function() {
      
            if(this.readyState === XMLHttpRequest.DONE) {
            
                var data = this.responseText ? JSON.parse(this.responseText) : this.responseText;
            
                /*if (data !== "") {
                    JSON.parse(this.responseText)
                } else if (data === "") {
                    return;
                }*/
                
                if (this.status === 200) {
          
                    onSuccess(data);
        
                } else {
          
                    onError(this.status, data);
                }
        }
    }
    
        xhr.open('GET', url);
        xhr.send();
    }
};

$.get('https://www.reddit.com/r/javascript.json', onSuccess, onError)

function onSuccess(data) {
    console.log('YOU DID IT OMFG', data);
}

function onError(status, body) {
    console.log('WHAT NO WHY', status);
}

// =============================================================================
// This code below should work as is.
// =============================================================================

/*
var url = 'https://www.reddit.com/r/javascript.json';

$.get(url, onSuccess, onError);

function onSuccess(data) {
    console.log('success', data);
}

function onError(status, body) {
    console.log('error', status, body);
}
*/


/* Bitcoin Stuff */
var numSeconds = 6;

setInterval(updateBitcoin, 1000 * numSeconds)

function updateBitcoin() {
    
    $.get('https://api.coindesk.com/v1/bpi/currentprice.json', function(data) {
        console.log('Bitcoin Price: $' + data.bpi.USD.rate_float);
    }, onError);
}

