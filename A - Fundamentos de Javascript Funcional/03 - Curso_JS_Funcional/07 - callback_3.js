const nums = [1, 2, 3, 4, 5]
const dobro = n => n * 2

console.log(nums.map(dobro))

// Callback Function wait for 3 parameters (value, index and array)
const nums2 = [5, 10, 15]
const dobroMenosPrimeiro = (n, i) => {
    if (i === 0) return n
    return n * 2
}

console.log(nums2.map(dobroMenosPrimeiro))

const dobroOuTriplo = (n, i, a) => {
    if (i === 0) return n
    if (a.length < 5) return n * 2
    else return n * 3
}

console.log(nums.map(dobroOuTriplo))
console.log(nums2.map(dobroOuTriplo))

// Obs.: Map creates a new array and the original stays unchanged and can still be acessed.
const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa', 'Bete']
const primeiraLetra = nome => nome[0]

console.log(nomes.map(primeiraLetra))
console.log(nomes)

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 }
]

const nomesProdutos = produto => produto.nome
const valorTotalProduto = produto => produto.qtde * produto.preco

console.log(carrinho.map(nomesProdutos))
console.log(carrinho.map(valorTotalProduto))

// Creating your own map
Array.prototype.meuMap = function(fn) {
    const mapped = []
    for (let i = 0; i < this.length; i++) {
        const result = fn(this[i], i, this)
        mapped.push(result)
    }
    return mapped
}

console.log(carrinho.meuMap(nomesProdutos))