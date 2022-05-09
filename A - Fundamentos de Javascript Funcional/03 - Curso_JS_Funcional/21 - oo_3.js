// Função Construtora
function Produto(nome, preco, desc = 0) {
    this.nome = nome
    this.preco = preco
    this._desc = desc / 100

    this.precoFinal = function() {
        return this.preco * (1 - this._desc)
    }
}

const p1 = new Produto('Caneta', 8.50)
console.log(p1.nome)

const p2 = new Produto('Geladeira', 2399.99, 20)
console.log(p2.preco)
console.log(p2.precoFinal())

// Prototype permits to add a new functionally that was not initially created in the class.
// You can't use arrow functions, because you need to have access to "this".
Produto.prototype.log = function() {
    console.log(`Nome: ${this.nome} Preço: R$${this.preco}`)
}

p1.log()
p2.log()

// DefineProperty along with "class.prototype" will create a new attribute for all instances of the class.
Object.defineProperty(Produto.prototype, 'desc', {
    get: function() {
        return this._desc
    },
    set: function(novoDesc) {
        if (novoDesc >= 0 && novoDesc <= 1) {
            this._desc = novoDesc
        }
    }
})

Object.defineProperty(Produto.prototype, 'descString', {
    get: function() {
        return `${this._desc * 100}%`
    }
})

console.log(p2.desc)
console.log(p2.descString)
p2.desc = 0.5
console.log(p2.desc)
console.log(p2.descString)