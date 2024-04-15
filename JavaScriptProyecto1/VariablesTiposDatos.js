const prompt = require('prompt-sync')();

//Conversor de Temperatura:
function CambioDeTemperatura() {
//Definimos celcius para luegos usarlo en la operacion

    let celcius = prompt('Porfavor digite los centigrados a convertir a Fahrenheit: ');
  //Operacion de Cambio de celcius a fahrenheint
    let Fahrenheit = (9/5 * celcius) +32;

    console.log(celcius + "C son " + Fahrenheit.toFixed(2) + " grados fahrenheint") ;

}

//Calculadora de IMC
function IMC() {
//Definimos el peso del usuario
    let peso = prompt('Por favor, Ingresa tu peso en Kilogramos: ')
//Definimos la altura del usuario
    let Altura = prompt('Por favor, Ingresa tu Altura en metros: ')
//Definimos La operacion de IMC
    let IndiceMasaCorporal = (peso/(Altura **2))
console.log('Tu Indice Masa Corporal (IMC) es: ' + IndiceMasaCorporal.toFixed(2))

}

//Generador de Nombre de Usuario
function GNU() {
//Definimos el nombre del usuario
    let nombre = prompt('Ingresa tu nombre: ')
    //Definimos el apellido del usuario
    let apellido = prompt('Ingresa tu apellido: ')
    //Definimos el año de nacimiento del usuario
    let año = prompt('Ingresa tu año de nacimiento: ')
//Definimos la operacion de Juntar el nombre, el apellido y el año de nacimiento del usuario
    let NombreUser = (nombre + apellido + año)

    console.log('Tu nombre se usuario combinado es: ' + NombreUser )
}

//Función Fibonacci con ciclos
function fibonacci(n) {
   
    
    if (n <= 1) {
        return n;
    }
// Defino la posicion 0 de Fibonacci
    let a = 0;
   //Defino la posicion 1 de Fibonacci
    let b = 1;
    //Defino la suma de a + b
    let resultado;
//bucle
    for (let x = 2; x <= n; x++) {
        resultado = a + b;
        a = b;
        b = resultado;
    }

    return b;
    
}

function fibonacciMenu() {
    //Pedirle al usuario la posicion del numero 
    const n = prompt("Digite el el n-esimo número de Fibonacci: ");
    const respuesta = fibonacci(Number(n));
    console.log("El " + n + "-esimo número de Fibonacci es " + respuesta);
}



// Función para mostrar el menú interactivo

function MenuInteractive() {
    console.log("Menu:");
//Definir las opciones de Programas
    let option = prompt("Selecciona una opcion: /a.(Convertidor de Grados C a F)  /b.(Calculadora de IMC) /c.(Generador de Nombre de Usuario) /d.(contador Fibonacci) /e.(SALIR) ");

    switch(option) {
        case "a":
            console.log("Entraste al Convertidor de grados Celsius a Fahrenheit");
            CambioDeTemperatura();
            break;
        case "b":
             console.log("Entraste al Calculador de IMC");
            IMC();
            break;
        case "c":
             console.log("Entraste al Generador de nombre de usuario");
            GNU();
            break;
        case "d":
            console.log("Entraste al Contador de Fibonacci");
            fibonacciMenu();
            break;
        case "e":
            console.log("Saliste del menu");
            break;
        default:
            console.log("Opcion inexistente");
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