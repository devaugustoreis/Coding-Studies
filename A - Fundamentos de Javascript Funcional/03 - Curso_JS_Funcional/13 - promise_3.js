function gerarNumerosEntre(min, max) {
    if (min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        resolve(aleatorio)
    })
}

gerarNumerosEntre(1, 60)
    .then(num => [num, num * 10])
    .then(numArray => `Número gerado = ${numArray[0]} \nMultiplicado por 10 = ${numArray[1]}`)
    .then(console.log)