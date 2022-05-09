const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
]

// 1. Elementos frágeis
// 2. Valor total por produto
// 3. Média entre os totais dos produtos

const fragil = produto => produto.fragil
const totalPorProduto = produto => produto.qtde * produto.preco
const mediaTotais = (total, valor, i, array) => {
    if (i === (array.length - 1)) {
        total += valor
        total = total / array.length
        return total
    }
    return total += valor
}

console.log(carrinho
    .filter(fragil)
    .map(totalPorProduto)
    .reduce(mediaTotais))


// Solução Cod3r
const media = carrinho
    .filter(item => item.fragil)
    .map(item => item.qtde * item.preco)
    .reduce((acc, el) => {
        const novaQtde = acc.qtde + 1
        const novoTotal = acc.total + el
        const object = {
            qtde: novaQtde,
            total: novoTotal,
            media: novoTotal / novaQtde
        }
        console.log(object)
        return object
    }, { qtde: 0, total: 0, media: 0 })
    .media

console.log(media)