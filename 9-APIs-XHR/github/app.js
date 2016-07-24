/* UI JavaScript STUFF */

window.addEventListener('load', function(event) {
    
    'use strict';
    
    var button = document.getElementById('get-pokemon-button'),
        randomNum = Math.ceil(Math.random() * 100);
    
    console.log(randomNum);
    
    button.onclick = function (event) {
        
        event.preventDefault();
        
        /* XML */
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {

            if (this.readyState === XMLHttpRequest.DONE) {

                if (this.status === 200) {

                    var data = JSON.parse(this.responseText);
                    console.log(data.name);

                } else {
                    console.log(this.status, 'Uh oh!');
                }

            }
        };

        xhr.open('GET', 'http://pokeapi.co/api/v2/pokemon/' + randomNum);
        xhr.send();
    };
});

/* API */

window.addEventListener('load', function () {
    
    var githubBtn = document.getElementById('github'),
        otherBtn = document.getElementById('other');
    
    otherBtn.addEventListener('click', function () {
        getURL('');
    });
    
    githubBtn.addEventListener('click', function () {
        getURL('https://api.github.com/users/nickvirden');
    });
    
    function getURL(url) {
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = handleXHR;
        xhr.open('GET', url);
        xhr.send();
    }
        
    function handleXHR() {
        if (this.readyState === XMLHttpRequest.DONE) {
            switch(this.status) {
                case 200:
                    break;
                default:
                    console.log(this.status, 'uh oh');
            }
        }
    }
    
    
});
