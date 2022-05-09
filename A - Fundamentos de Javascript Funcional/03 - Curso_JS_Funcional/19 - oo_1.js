// Função Construtora
function Produto(nome, preco, desc = 0) {
    this.nome = nome
    this.preco = preco
    this.desc = desc / 100

    this.precoFinal = function() {
        return this.preco * (1 - this.desc)
    }
}

console.log(typeof Produto)
console.log(typeof Promise)
console.log(typeof Object)

const p1 = new Produto('Caneta', 8.50)
console.log(typeof p1)
console.log(p1)
console.log(p1.nome)

const p2 = new Produto('Geladeira', 2399.99, 20)
console.log(typeof p2)
console.log(p2)
console.log(p2.preco)
console.log(p2.precoFinal())
