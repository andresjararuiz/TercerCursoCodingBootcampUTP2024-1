const prompt = require('prompt-sync')()

function CalcularFactorial() {
    let n = prompt("Ingrese el numero para calcular su factorial: ")
    let factorial = 1
    let resultado = 1

    while(factorial <= n) {
        resultado = factorial * resultado
        factorial ++
    }
    console.log("el factorial del numero " + n + " es: " + resultado)
}

CalcularFactorial()