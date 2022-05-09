// Map transforms all elements in the array.
// Filter filters the elements in the array.
// Reduce is much more flexible and can generate something entirely different.

/* Reduce receives a function with two parameters (accumulator and element) and can return
 * something entirely different than original array.
 */

const numbers = [1, 2, 3, 4, 5, 6]

const sum = (total, el) => total + el
// first parameter is the function and second one is an optional initial value.
const total = numbers.reduce(sum, 0)
console.log(total)

const avg = (acc, el, i, array) => {
    if (i === array.length - 1) return (acc + el) / array.length
    return acc + el
}

const media = numbers.reduce(avg)
console.log(media)