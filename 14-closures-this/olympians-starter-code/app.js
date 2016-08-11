fullName = 'Missy Franklin';

var obj = {
   fullName: 'Simone Biles',
   prop: {
      fullName: 'Cammile Adams',
      getFullName: function() {
         return this.fullName;
      }
   }
};

console.log(obj.prop.getFullName()); // Cammile Adams

var getFullName = obj.prop.getFullName;

console.log(getFullName()); // Missy Franklin

//TODO: 1. change the context of getFullName so it prints Simone Biles
console.log(getFullName());

//TODO: 2. change the context of getFullName so it prints Cammile Adams
console.log(getFullName());
