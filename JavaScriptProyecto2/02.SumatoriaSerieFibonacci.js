//Función Fibonacci con ciclos

function fibonacci() {
    //Posicion del numero De hasta donde va a contar
    let n = 11
       
    
   // Defino la posicion 0 de Fibonacci
       let a = 0;
      //Defino la posicion 1 de Fibonacci
       let b = 1;
       //Defino la suma de a + b
       let resultado;
       //Define la Suma de los numeros de Fibonacci
       let sumatoria = 1
       //Defino la Secuencia del 1er numero de fibonacci en Horizontal
       let Horizontal =  a + ", " + b + ", ";
   //bucle
       for (let x = 2; x <= n; x++) {
           resultado = a + b;
           a = b;
           b = resultado;
           sumatoria = (resultado + sumatoria );   
           Horizontal +=  resultado + ", "
       }
       
       console.log("Los numeros a sumar son : " + Horizontal + " y su suma es: " + sumatoria ) 
  
   }
fibonacci()
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
Crea la secuencia de Fibonacci y hace la sumatoria de sus numeros 
*/
