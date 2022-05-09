const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

let p = new Promise(function(resolve) {
    resolve(fs.readFileSync(caminho))
})

p.then(dados => console.log(dados.toString()))

// Solução Cod3r
function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
        console.log('Depois de ler')
    })
}

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => console.log(linhas[1]))

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)