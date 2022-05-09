/* Map Functions receives a function as parameter and always return the same 
 * number of elements. 
 */
const numbers = [1, 2, 3, 4, 5, 6]

// Anonymous Function
const numbersdoubled = numbers.map(function (el) {
    return el * 2
})

// Arrow Function
const numberstripled = numbers.map(el => el * 3)

console.log(numbers)
console.log(numbersdoubled)
console.log(numberstripled)

const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 }
]

const getNames = el => el.name
const getScores = el => el.score 

const studentsNames = students.map(getNames)

console.log(studentsNames)
console.log(
    students
        .map(getScores)
        .map(Math.ceil)
)
