// Currying
function finalPrice(tax) {
    return function(price) {
        return price * (1 + tax)
    }
}

const nycFinalPrice = finalPrice(0.0875)
const londonFinalPrice = finalPrice(0.0912)

console.log(nycFinalPrice(25.1))
console.log(nycFinalPrice(21.7))
console.log(nycFinalPrice(107.9))

console.log(londonFinalPrice(28.4))
console.log(londonFinalPrice(68.2))
console.log(londonFinalPrice(137.5))

// The vantage is that we can "split" parameters assignment.