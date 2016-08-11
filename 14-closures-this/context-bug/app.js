/*

$(function() {

  var user = {
    firstName: 'Hope',
    lastName: 'Solo',
    showFullName: function() {
      console.log(this.firstName, this.lastName)
    }
  }

  // what is logged? Why?
  $('#print').click(user.showFullName);
});

*/

$(function() {
    
    var user = {
        firstName: 'Hope',
        lastName: 'Solo',
        showFullName: function(brother, sister) {
            console.log('this', this);
            console.log(this.firstName, this.lastName, brother, sister);
        }    
    }
    
    var bob = {
        firstName: 'Bob',
        lastName: 'Solo'
    };
    
    $('#print').click(function() {
        console.log(user.showFullName.call(user));
        
        
       /*
       var boundFunction = user.showFullName.bind(bob);
       boundFunction();
       */
        
        /*
        var siblings = ['cole', 'sally']
        user.showFullName.apply(bob, siblings);
        */
    }
    
});
