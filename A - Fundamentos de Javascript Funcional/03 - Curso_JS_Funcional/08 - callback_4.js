const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 }
]

const getNome = item => item.nome
const qtdMaiorQueZero = item => item.qtde > 0

const itensDisponiveis = carrinho.filter(qtdMaiorQueZero)
console.log(itensDisponiveis)

const nomeItensDisponiveis = carrinho
    .filter(qtdMaiorQueZero)
    .map(getNome)

console.log(nomeItensDisponiveis)

Array.prototype.meuFilter = function(fn) {
    const mapped = []
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) {
            mapped.push(this[i])
        }
    }
    return mapped
}

console.log(carrinho.meuFilter(qtdMaiorQueZero))