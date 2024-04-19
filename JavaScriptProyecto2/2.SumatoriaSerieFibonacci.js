//Función Fibonacci con ciclos

function fibonacci() {
    let n = 11
       
    
   // Defino la posicion 0 de Fibonacci
       let a = 0;
      //Defino la posicion 1 de Fibonacci
       let b = 1;
       //Defino la suma de a + b
       let resultado;
       let sumatoria = 1
       let Horizontal =  a + ", " + b + ", ";
   //bucle
       for (let x = 2; x <= n; x++) {
           resultado = a + b;
           a = b;
           b = resultado;
           sumatoria = (resultado + sumatoria );   
           Horizontal +=  resultado + ", "
       }
       
       console.log("Los numeros a sumar son : " + Horizontal + " y su suma es :" + sumatoria ) 
  
   }
fibonacci()