// Function Expression
const increment1 = function(n) {
    return n + 1
}

// Arrow Function is always Anonymous
const increment2 = (n) => {
    return n + 1
}

// Parenthesis can be ommited when there is only 1 param
const increment3 = n => {
    return n + 1
}

// We can have arrow functions in a single line. The return statement is implicit (it will not work if you keep the statement)
// var variable = param => return
const increment4 = n => n + 1
// variableDeclaration variableName = single parameter => the line of code that is returned by the arrow function

const sum = (a, b) => a + b

console.log(increment1(1))
console.log(increment2(5))
console.log(increment3(25))
console.log(increment4(120))
console.log(sum(8, 3))