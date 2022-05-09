const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 }
]

const totalPorProduto = produto => produto.qtde * produto.preco
const totalCarrinho = (somaCarrinho, totalProduto) => somaCarrinho + totalProduto

console.log(carrinho
    .map(totalPorProduto)
    .reduce(totalCarrinho))

// Creating your own Reduce
Array.prototype.meuReduce = function(fn, optionalAcc) {
    let acc, el;
    acc = optionalAcc
    for (let i = 0; i < this.length; i++) {
        if (acc === undefined && i === 0) acc = this[i]
        else {
            el = this[i]
            acc = fn(acc, el, i, this)  
        }
    }
    return acc
}

console.log(carrinho.map(totalPorProduto))

console.log(carrinho
    .map(totalPorProduto)
    .meuReduce(totalCarrinho))

console.log(carrinho
    .map(totalPorProduto)
    .meuReduce(totalCarrinho, 10))