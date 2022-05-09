const students = [
    { name: 'Jake', score: 6.4 },
    { name: 'Susan', score: 8.6 },
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 }
]

const greatStudent = student => student.score >= 9
const getScores = el => el.score
const avg = (acc, el, i, array) => {
    if (i === array.length - 1) return (acc + el) / array.length
    return acc + el
}

console.log(
    students
        .filter(greatStudent)
        .map(getScores)
        .reduce(avg)
)