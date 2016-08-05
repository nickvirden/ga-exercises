var students = ['sara', 'bob', 'ashley'];

console.log('before loop')

/*for (i = 0; i < students.length; i++) {
    console.log(students[i]);
}*/

students.forEach(function(student) {
    console.log('student:', student)
})

console.log('end loop')