// Libraries from Node.
const fs = require('fs')
const path =  require('path')

// "__dirname" takes the current directory of the file.
// "path.join" joins the path utilizing the correct syntaxe (/ or \ may change between windows, mac, linux, etc).
const caminho = path.join(__dirname, 'dados.txt')

console.log(__dirname)
console.log(caminho)

// When we won't utilize a mandatory parameter, we can use an underline instead "_".
function exibirConteudo(_, conteudo) {
    console.log(conteudo.toString())
}

console.log('Inicio...')
// The second parameter is a callback function, because it needs that the file (from first param) has been finished reading.
fs.readFile(caminho, exibirConteudo)
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))
console.log('Fim...') // Observe that this line will be executed before the two above, because the program won't wait the reading execution.

const caminho2 = path.join(__dirname, 'dados_2.txt')

// If we don't want to use a callback, there is another alternative in node.
// This way, it will read in a synchronous way, in other words, it will wait for the reading before proceeding the code.
console.log('Inicio Sync...')
const conteudo = fs.readFileSync(caminho2) // The code will be interrupted while the file is being read.
console.log(conteudo.toString())
console.log('Fim Sync...')