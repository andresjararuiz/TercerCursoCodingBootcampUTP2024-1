const prompt = require('prompt-sync')();

// Adivinador de Números Aleatorios

function ANA(min, max) {
//Pedir el Numero que se intenta adivinar
    let numAdivinar = prompt("Ingresa el número a adivinar entre " + min + " y " + max + " ");
   
    numAdivinar = Number(numAdivinar); 
    if (isNaN(numAdivinar) || numAdivinar !== numAdivinar) {
        console.log("Por favor, ingresa un número válido.");
        return;
    }
//Randomizar el numero a adivinar
    let numAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

    if (numAdivinar > numAleatorio) {
        console.log("El número es demasiado alto");
    } else if (numAdivinar < numAleatorio) {
        console.log("El número es demasiado bajo");
    } else if (numAdivinar == numAleatorio) {
        console.log("el número es correcto");
    } 

}


//calculadora de factorial

function calcularFactorial() {
//Pedirle al usuario el numero a pasar a factorial
    let NumFactorial = prompt("Ingrese el número para calcular su factorial: ");

    NumFactorial = Number(NumFactorial);

    if (NumFactorial !== NumFactorial || NumFactorial < 0) {
        return "Ingrese un número válido y positivo.";
    }
//Numero factorial de 1 es 1
    let factorial = 1;
   //Numero a multiplicar del Factorial
    let contador = 1;

    if (NumFactorial === 0 || NumFactorial === 1) {
        return factorial;
    } else {
        while (contador <= NumFactorial) {
            factorial *= contador;
            contador++;
        }
        
    }
    console.log("El Factorial de " + NumFactorial + " es: " + factorial); 
    return factorial;
}


//Contador de Vocales

function contarVocales(frase) {

    frase = frase.toLowerCase();

   //Defino las vocales a contar

    let contadorVocales = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0
    };
    
    
    for (let i = 0; i < frase.length; i++) {
        let caracter = frase[i];
      
        if ('aeiou'.includes(caracter)) {
            
            contadorVocales[caracter]++;
        }
    }
    
    for (let vocal in contadorVocales) {
        console.log(vocal + ' = ' + contadorVocales[vocal]);
    }
}


//Menu Interactivo

function MenuInteractive() {
    console.log("Menu:");

//Definir las opciones de Programas
    let option = prompt("Selecciona una opcion: /a.(Adivinador de Numeros Aleatorios)  /b.(Calculadora de Factoriales) /c.(Contador de Vocales) /d.(SALIR) ");

    switch(option) {
        case "a":
            console.log("Entraste al Adivinador de Numeros Aleatorios");
            ANA(1, 100);
            break;
        case "b":
             console.log("Entraste al Calculador de Factoriales");
             calcularFactorial()
        break;
        case "c":
             console.log("Entraste al Contador de Vocales");
             let frase = prompt("frase: ");
             contarVocales(frase);
        break;
        case "d":
            console.log("Saliste del menu");
        break;
        default:
            console.log("Opcion inexistente.");
        }
    }

    MenuInteractive()





/*
Fecha y hora de publicacion: 10:30 14-04-2024
Version del codigo:V14-04-2024
Autores. Ing(Andres Jaramillo Ruiz) Ing(Santiago Castaño) Ing(Juan Pablo Gomez)
Nombre del lenguaje utilizado: Javascript
Versión del lenguaje utilizado: ECMASCRIPT 6.0 UTF-8
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación Jornada Especial
*/