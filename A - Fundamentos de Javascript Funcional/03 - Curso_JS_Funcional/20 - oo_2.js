class Produto {
    constructor(nome, preco, desc) {
        this.nome = nome
        this.preco = preco
        this.desc = desc
    }

    get nome() {
        return `Produto: ${this._nome}`
    }

    set nome(novoNome) {
        this._nome = novoNome.toUpperCase()
    }

    precoFinal() {
        return this.preco * (1 - this.desc)
    }
}

const p1 = new Produto('Geladeira', 10000, 0.8)
// When you use get, tou call a function as an atribbute and not a method anymore.
console.log(p1.nome)
console.log(p1.preco)
// Fun Fact: The algorithm below does not return a clean 2000 because almost all programming languages use an algorithm that has a residual margin for errors when 
// dealing with float numbers (a perfect clean algorithm to calculate that would be 15/20 times slower).
console.log(p1.precoFinal())
p1.nome = 'videogame'
console.log(p1.nome)

// Difference between using Class and Function is just a syntax sugar (small syntaxes differences that achieve the same goal)
console.log(typeof Produto)