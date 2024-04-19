const prompt = require('prompt-sync')();
//ARREGLAR CUANDO NO RECIBE UN NUMERO
function CalcularFactorial() {

    let n = prompt("Ingrese el numero POSITIVO para calcular su factorial: ")
    let nNum = parseInt(n)
//---Comprobar si n es un numero---
    while (!Number.isInteger(nNum)) {
    if (!Number.isInteger(nNum)) {
        n = prompt("Por favor ingrese un numero: ")
        nNum = parseInt(n)
        }
    }
//---Comprobar si n es positivo---
    while (n < 0) {
        if (n < 0) {
            n = prompt("Ingrese el numero POSITIVO para calcular su factorial: ")
            n = parseInt(n)
            nNum = n
            //---Comprobar si n es un numero---
            if (!Number.isInteger(nNum)){
                while (!Number.isInteger(nNum)) {
                    if (!Number.isInteger(nNum)) {
                        n = prompt("Por favor ingrese un numero: ")
                        nNum = parseInt(n)
                        }
                    }
                }
            }
        }

    //---variable auxiliar para imprimir n-veces---
    let nSub2 = n
    //---Imprimir numeros sin calcular---
    
    console.log("Si n = " + nSub2)
    process.stdout.write("= ")

    var ContadorImprimir = 0

    while(ContadorImprimir <= nSub2) {
        if (ContadorImprimir < nSub2) {
    process.stdout.write(ContadorImprimir.toString() + "!" + " + ")
        }
        else {
            process.stdout.write(ContadorImprimir.toString() + "!\n")
        }
        ContadorImprimir ++
    }
    ContadorImprimir = 0

    //---Calcular factorial---
    let factorial = 1
    let resultado = 1
    let contadorFactorial = n
    let sumatoria = 0
    let arrayFactorial = []

    //---Contador externo para calcular cada factorial----
    while (contadorFactorial >= 0) { 
        contadorFactorial--

        while(factorial <= n) {
            resultado = factorial * resultado
            factorial ++
        }

        //---Acumulando resultados---
        sumatoria = sumatoria + resultado
        arrayFactorial.push(resultado)

        factorial = 1
        resultado = 1
        n--
    }
    //---Imprimir resultados factoriales---
    arrayFactorial.reverse()
    process.stdout.write("= ")
    while(ContadorImprimir <= nSub2) {
        if (ContadorImprimir < nSub2) {
    process.stdout.write(arrayFactorial[ContadorImprimir] + "!" + " + ")
        }
        else {
            process.stdout.write(arrayFactorial[ContadorImprimir] + "!")
        }
        ContadorImprimir ++
    }
    process.stdout.write("= " + sumatoria)
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
Imprime La sumatoria del factorial dado
*/
