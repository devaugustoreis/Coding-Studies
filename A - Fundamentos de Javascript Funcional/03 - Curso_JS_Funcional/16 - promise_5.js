function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Funciona', 0)
    .then(console.log)

// We utilize "catch" to handle the error in our code (otherwise nodejs will display its standard error message).
// It is important to process errors so that your program doesn't crash.
funcionarOuNao('Não Funciona', 1)
    .then(valor => console.log(valor))
    .catch(error => console.log(`Erro: ${error}`))

funcionarOuNao('Funciona 50% das vezes', 0.5)
    .then(console.log)
    .catch(error => console.log(`Erro: ${error}`))
    // After "catch" we do not have data anymore. "Catch" is often used in the last line.
    .then(() => console.log('Fim!'))


// Error Treatment.
funcionarOuNao('Funciona', 0)
    .then(v => `Valor: ${v}`)
    .then(v => consol.log(v))
    .catch(err => console.log(`Erro: ${err}`))

funcionarOuNao('Funciona', 0)
    .then(v => `Valor: ${v}`)
    // You can treat errors individually in each then. It will get the value defined in the reject of promise.
    .then(
        v => consol.log(v),
        error => console.log(`Erro Específico: ${error}`)
    )
    .catch(error => console.log(`Erro: ${error}`))

// Try Catch
function funcionarOuNao2(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log()
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao('Funciona', 0)
    .then(v => `Valor: ${v}`)
    // You can treat errors individually in each then. It will get the value defined in the reject of promise.
    .then(
        v => consol.log(v),
        error => console.log(`Erro Específico: ${error}`)
    )
    .catch(error => console.log(`Erro: ${error}`))