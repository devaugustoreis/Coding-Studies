function gerarNumerosEntre(min, max, tempo) {
    if (min > max) [max, min] = [min, max]

    return new Promise(resolve => {
        setTimeout(function() {
            const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 1500),
    ])
}

// console.time checks how much time the code took to run.
console.time('promise')

// All promises will be generated before the numbers are shown.
// It will take 4 seconds (slower promise above) to print the numbers.
gerarVariosNumeros()
    .then(numeros => console.log(numeros))
    .then(() => {
        console.timeLog('promise')
        console.timeEnd('promise')
    })