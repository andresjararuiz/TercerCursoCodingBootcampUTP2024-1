
// Función para imprimir las tablas de multiplicar del 1 al 10
function imprimirTablasDeMultiplicar() {
    let resultado = ""; 

    for (let i = 1; i <= 10; i++) {
       
        
        for (let j = 1; j <= 10; j++) {
            resultado = resultado + i + " x " + j + " = " + (i * j) + "\n";
        }
    }

    console.log(resultado);
}

imprimirTablasDeMultiplicar();
