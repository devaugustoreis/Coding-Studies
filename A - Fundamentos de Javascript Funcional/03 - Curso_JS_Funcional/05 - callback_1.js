const somar = (a, b) => console.log(a + b)
const subtrair = (a, b) => console.log(a - b)

function exec(fn, v1, v2) {
    fn(v1, v2)
}

exec(somar, 56, 38)
exec(subtrair, 182, 27)

// Callback Functions are called when some other event happens (example: return of some backend requisition)

// SetInterval will execute the function again and again after the determined amount of time.
// Param 1 = Function; Param 2 = Time in miliseconds (1000 = 1s).
const callback = () => console.log("Função chamada");
setInterval(callback, 1000)

setInterval(() => console.log("Também posso passar a função direto aqui"), 1000)

setInterval(function () {
    console.log("Ou então fazer assim")
}, 1000)