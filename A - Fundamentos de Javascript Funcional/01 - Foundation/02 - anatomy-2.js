// Anonymous Function
(function (a, b, c) {
    return a + b + c
})

// Function Expression
const sum = function (a, b) {
    return a + b
}

const res = sum(3, 5)
console.log(res)

const anotherSum = sum
console.log(anotherSum(7, 4))