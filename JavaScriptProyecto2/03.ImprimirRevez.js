const prompt = require('prompt-sync')();

function invertirNumeros() {
    //Define la entrada
    let entradaNumero = prompt("Ingrese el número: ");
    
    //Convertir la entrada a un número entero
    let entero = parseInt(entradaNumero);

    //Convertir el número a una cadena y dividirlo en un arreglo de caracteres
    let separador = entero.toString().split("");

    //Invertir el arreglo de caracteres
    let invertido = separador.reverse();

    //Unir el arreglo invertido de nuevo en una cadena
    let volverAJuntar = invertido.join("");

    console.log("El número invertido es: " + volverAJuntar);
}

invertirNumeros();
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
Lee la entrada del usuario en numeros y devuelve el numero alrevez
*/

