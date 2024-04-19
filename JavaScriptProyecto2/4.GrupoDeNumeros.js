const prompt = require('prompt-sync')();

function IngresarQuinceNumeros() {
    let lista = [];
    let contador = 0;
    let mayor = 0; 
    let menor = 0;
    let negativos = 0;
    let suma = 0;
    let positivos = 0;
    let promedio = 0; // Inicializar para evitar errores

    for (let i = 0; i < 15; i++) { // Corregir la condición del bucle
        let numero = parseInt(prompt("Ingrese un número: "));
        lista.push(numero);
    }

    for (let a = 0; a < lista.length; a++) { // Usar "<" en lugar de "<="
        if (lista[a] > 150) {
            contador++;
        }
        if (lista[a] > mayor) {
            mayor = lista[a];
        }
        if (lista[a] < menor) {
            menor = lista[a];
        }
        if (lista[a] < 0) {
            negativos += 1;
        } 
        if (lista[a] > 0) {
            positivos++;
            suma += lista[a];
        }
    }

    if (positivos > 0) { 
        promedio = suma / positivos;
    }

    console.log("Cantidad de números mayores a 150:", contador);
    console.log("Número mayor:", mayor);
    console.log("Número menor:", menor);
    console.log("Cantidad de números negativos encontrados:", negativos);
    console.log("Promedio de los números positivos encontrados:", promedio);
}

IngresarQuinceNumeros();
