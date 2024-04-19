function mostrarLetras() {
    let i = -1; // Inicializa la variable i con el valor -1.
    let iAux; // Variable auxiliar para almacenar temporalmente el valor de i.
    let j = 14; // Inicializa la variable j con el valor 14.
    let jAux = 14; // Inicializa la variable jAux con el valor 14.
    let k = 0; // Inicializa la variable k con el valor 0.
    let o34Espacios = 1; // Inicializa la variable o34Espacios con el valor 1.

    let letra = 'P '; // Define la letra a imprimir.

    while (i < 6) { // Comienza un bucle while que se ejecuta mientras i sea menor que 6.
        o34Espacios = 1; // Reinicia el contador de espacios en cada iteración del bucle externo.
        while (o34Espacios < 34){ // Bucle para imprimir espacios antes de la pirámide.
            process.stdout.write(" "); // Imprime un espacio en la consola.
            o34Espacios++; // Incrementa el contador de espacios en 1.
        }

        i++; // Incrementa i en 1 en cada iteración del bucle.
        iAux = i; // Asigna el valor de i a iAux.

        while (iAux > 0) { // Comienza un bucle while que se ejecuta mientras iAux sea mayor que 0.
            process.stdout.write("  "); // Imprime dos espacios en la consola.
            iAux--; // Decrementa iAux en 1 en cada iteración del bucle interno.
        }

        j = jAux -= 2; // Actualiza el valor de j y jAux restando 2 en cada iteración del bucle externo.

        while (j >= 0) { // Comienza un bucle while que se ejecuta mientras j sea mayor o igual a 0.
            process.stdout.write(letra); // Imprime la letra en la consola.
            j--; // Decrementa j en 1 en cada iteración del bucle interno.
        }
        console.log(' '); // Imprime un salto de línea en la consola.
        k++; // Incrementa k en 1 en cada iteración del bucle externo.
    }
    jAux--; // Decrementa jAux en 1 después de salir del bucle externo.
}

mostrarLetras(); // Llama a la función mostrarLetras para ejecutarla.
/*
- Fecha de publicación: 19 de abril del 2024
- Hora: 6:00 AM
- Versión de su codigo: 03
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
Imprime un patron de letras en la consola Asemejandose a una piramide invertida
*/