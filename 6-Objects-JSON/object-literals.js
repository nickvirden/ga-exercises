var isuzuTrooper = {
    year: '2001',
    mileage: '163,000',
    color: 'gray'
};

console.log(isuzuTrooper);
console.log('My car has ' + isuzuTrooper.mileage + ' miles.');


isuzuTrooper.color = 'blue';

console.log('My car is ' + isuzuTrooper.color + ' now.');

isuzuTrooper['num-wheels'] = 4;

console.log('My car has ' + isuzuTrooper['num-wheels'] + ' wheels.')




var studentName = 'fred';

for(var foo in students) {
    console.log(foo + "'s score is " + students[foo]);
}