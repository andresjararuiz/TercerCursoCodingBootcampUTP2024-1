/*- Versión del lenguaje utilizado: 6.0
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
presenta una 'animacion' de 2 a que se van acercando poco a poco 


//Salvedad: Si y solo si se garantizan resultados sin cambios en el codigo */

// Se inicializa un array llamado 'linea' con 9 elementos vacíos.
let linea = ["", "", "", "", "", "", "", "", ""];

// Se define la función 'valores'.
function valores() {
    // Se inicializa una variable 'i' con el valor -1.
    let i = -1;

    // Se establece un intervalo de tiempo que se ejecuta cada 1000 milisegundos (1 segundo).
    const darValores = setInterval(() => {
        // Se asigna la letra "A" a dos posiciones del array 'linea': 'linea[i + 1]' y 'linea[7 - i]'.
        linea[i + 1] = "A";
        linea[7 - i] = "A";

        // Se convierte el array 'linea' en una cadena de texto separada por espacios.
        let inv = linea.join(" ");

        // Se limpia la consola para borrar la pantalla anterior.
        console.clear();

        // Se imprime la cadena 'inv' en la consola.
        console.log(inv);

        // Se restauran las posiciones del array 'linea' a una cadena vacía para la próxima iteración.
        linea[i + 1] = "";
        linea[7 - i] = "";

        // Se incrementa 'i' en cada ciclo.
        i++;

        // Si 'i' es mayor que 4 (indicando que ya se han impreso las letras "A" hacia el centro), se detiene el intervalo.
        if (i > 4) {
            clearInterval(darValores);
        } 
        // Si 'i' es igual a 4, se imprime un mensaje de finalización de la animación.
        else if (i == 4) {
            console.clear();
            console.log("    AA    ");
            clearInterval(darValores);
        }
    }, 1000); // Intervalo de tiempo entre cada ciclo.
}

// Se llama a la función 'valores' para ejecutarla.
valores();
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
Imprime A Para que haga un "movimiento" Hacia el Centro
*/
