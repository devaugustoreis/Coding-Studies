// Anonymous Function
// IIFE - Immediately Invoked Function Expression
(function (a, b, c) {
    console.log(`Result: ${a + b + c}`)
}) (1, 2, 3);

// Utilized when you need to guarantee that the values will be inside a restrict scope.
// It is more common to not have parameters when IIFE's are used.

(function () {
    let x = 5
    console.log(x)
}) ();

// IIFE are also possible with arrow functions
(() => {
    console.log('arrow #01')
})();

// IIFE single line arrow function
(() => console.log('arrow #02'))();