var grade = 'C'

switch(grade) {
    case 'A':
        console.log("Awesome job");
        break;
    case 'B':
        console.log('Good job');
        break;
    case 'C':
        console.log('Cs get degrees!');
        break;
    case 'D':
        console.log('Not so good job');
        break;
    case 'F':
        console.log('Eeeeek!');
        break;
    default: 
        console.log("How did you even do this?");
        break;


    if (grade === 'A') {
        console.log('Awesome job');
    } else if (grade === 'B') {
        console.log('Good job');
    } else if (grade === 'C') {
        console.log('Okay job');
    } else if (grade === 'D') {
        console.log('Not so good job');
    } else if (grade === 'F') {
        console.log('Eeeeek!');
    } else {
        console.log('Unexpected grade value entered');
    }