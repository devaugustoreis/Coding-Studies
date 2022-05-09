function logParams(a, b, c) {
    console.log(a, b, c)
}

logParams(1, 2, 3, 4, 5) // Additional parameters are ignored.
logParams(1, 2, 3)
logParams(1, 2) // Parameters not declared will be undefined
logParams() // Parameters not declared will be undefined

function defaultParams(a = 1, b = 2, c = 3) {
    console.log(a, b, c)
}

defaultParams(7, 8, 9)
defaultParams(7)
defaultParams()

// Passing a not defined number of paramaters through an array
function logNums(nums) {
    console.log('logNums: ')
    for (let n of nums) {
        console.log(n)
    }
}

logNums([1, 2, 3, 4, 5, 6])

// spread/rest
function logNums2(...nums) {
    console.log('logNums2: ')
    console.log(Array.isArray(nums)) // nums is still an array
    for (let n of nums) {
        console.log(n)
    }
}

logNums2(1, 2, 3, 4, 5, 6)

function logNums3(...nums) {
    console.log('logNums3: ')
    console.log(nums)
}

logNums3(1, 2, 3, 4, 5, 6)

// Practical example of spread/rest utilization
function sumAll(...nums) {
    console.log('sumAll: ')
    let total = 0
    for(let n of nums) {
        total += n
    }
    return total
}

console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))