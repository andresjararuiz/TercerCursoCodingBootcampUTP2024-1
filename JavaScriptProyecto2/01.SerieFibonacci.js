//Función Fibonacci con ciclos

function fibonacci() {
    //Posicion del Numero Fibonacci  Hasta el 6765
    let n = 20
       
    
   // Defino la posicion 0 de Fibonacci
       let a = 0;
      //Defino la posicion 1 de Fibonacci
       let b = 1;
       //Defino la suma de a + b
       let resultado;
        //Defino La solucion en Hoizontal de el 1er numero de fibonacci al cual luego le agrego los datos del resultado
       let Horizontal =  a + ", " + b;
       
       
   //bucle
       for (let x = 2; x <= n; x++) {
           resultado = a + b;
           a = b;
           b = resultado;

            Horizontal += ", " + resultado

          
           
       }
   
       console.log(Horizontal);
      
   }
   /*
- Fecha de publicación: 18 de abril del 2024
- Hora: 4:00 PM
- Versión de su codigo: 02
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
Crea la secuencia de Fibonacci desde 0 1 hasta 6765 es el numero mas acercado a 10000.
*/

   
fibonacci()


       