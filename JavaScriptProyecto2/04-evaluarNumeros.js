 const prompt = require('prompt-sync')()
function comprobarNumeros() {
//---Get numbers to array---

 let arrayNumbers = [] 
 let arrayNegativeNumbers = []
 let negativesLenght = 0

for (iGetNumbers = 0 ; iGetNumbers < 15 ; iGetNumbers++) {
    let inputNumber = prompt("Ingresa un numero: ")
    if (inputNumber > 0) {
        arrayNumbers.push(parseInt(inputNumber))
    }

    else if (inputNumber <= 0) {
        iGetNumbers = iGetNumbers - 1
        console.log("Ingrese un numero mayor que 0")
        arrayNegativeNumbers.push(parseInt(inputNumber))
        negativesLenght++
    }

    else {
        iGetNumbers -= 1
        console.log("Por favor ingrese un numero: ")
    }
}

//---Check if numbers are higher than 150---

let iMayores = 0
let contadorMayores150 = 0
while (iMayores <= arrayNumbers.length) {

    if(arrayNumbers[iMayores] >= 150) {
        contadorMayores150++
    }
    iMayores++
}
//Here was output for higher than 150


//---Sume all the numbers in ArrayNumbers---

let suma = arrayNumbers.reduce(function(iReduce,iActualReducePosition){
    return iReduce + iActualReducePosition
},0)

//---All outputs to user (Only those outputs are out of a conditional or function)---

console.log("Cantidad de numeros mayores a 150: " + contadorMayores150)

//---To know what is the highest and lowest number---

console.log("Numero mayor encontrado: " + Math.max(...arrayNumbers))
console.log("Numero menor encontrado: " + Math.min(...arrayNumbers))

//---Quantity of negative numbers---

console.log("La cantidad de numeros negativos fue: " + negativesLenght)

//---Average---

console.log("El promedio de los 15 numeros positivos valores que ingreso es: " + (suma / arrayNumbers.length).toFixed(2))
}

comprobarNumeros()