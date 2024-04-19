
// Función para imprimir las tablas de multiplicar del 1 al 10
function imprimirTablasDeMultiplicar() {
//Definimos a lo que le vamos a sumar Los Numeros con su Multiplicacion
    let resultado = ""; 

    for (let i = 1; i <= 10; i++) {
       
        
        for (let j = 1; j <= 10; j++) {
   
            resultado = resultado + i + " x " + j + " = " + (i * j) + "\n";
        
        }
    }

    console.log(resultado);
}

imprimirTablasDeMultiplicar();
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
Imprime Las tablas de multiplicar del 1 al 10
*/
