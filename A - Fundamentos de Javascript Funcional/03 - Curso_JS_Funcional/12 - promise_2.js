// setTimeout receives a function as paramater and calls it (once) after setted amount of time in miliseconds.
// setInterval is the same as above but keeps calling the function until code in interrupted.

setTimeout(function() {
    console.log('Executando callback...')

    setTimeout(function() {
        console.log('Executando callback...')

        setTimeout(() => console.log('Executando callback...'), 2000)
    }, 2000)
}, 2000)

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)