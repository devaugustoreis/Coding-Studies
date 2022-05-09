/*
 * Functions that operate on other functions, either by taking them as arguments
 * or by returning them, are called higher-order functions.
 */ 

function run(fn) {
    return fn()
}

function sayHello() {
    console.log('Hello!!')
}

/* If you call the function, it will be executed and the parameter will be 
   its return value (in this case, undefined). */
// run(sayHello())

run(sayHello)

run(function() {
    console.log('run!!!')
})

const result = run(Math.random)
console.log(result) 