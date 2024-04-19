const prompt = require('prompt-sync')()

function CalcularFactorial() {
    //El numero a calcular su Factorial
    let n = prompt("Ingrese el numero para calcular su factorial: ")
    //El conteo de Los numeros Hasta llegar a n 1x2x3x4....xN
    let factorial = 1
    //La multiplicacion del Factorial en si
    let resultado = 1

    while(factorial <= n) {
        resultado = factorial * resultado
        factorial ++
    }
    console.log("el factorial del numero " + n + " es: " + resultado)
}

CalcularFactorial()
/*
- Fecha de publicación: 18 de abril del 2024
- Hora: 4:00 PM
- Versión de su codigo: 10
- Autores del lenguaje utilizado: ECMASCRIPT 6.0 (javascrit 6.0)
- Versión del lenguaje utilizado: 6.0
- Presentado por:   
                    Ingeniera Luisa Victoria
                    Ingeniera Lizeth 
                    Ingeniera Andrea
                    Ingeniero Juan Manuel
                    Ingeniero Santiago Castaño
                    Ingeniero Andres
                    Ingeniero Camilo

- Universidad Tecnológica de Pereira
- Programa de Ingenieria de Sistemas y Computación
- Descripcion del programa:
Imprime el factorial de un numero
*/
