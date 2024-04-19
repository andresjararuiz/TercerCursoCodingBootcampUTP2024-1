function mostrarTernasEnteros() {
    let k = 0; // Inicializa la variable k con el valor 0.
    let l = 1; // Inicializa la variable l con el valor 1.
    for (let i = 1; i < 4; i++) { // Comienza un bucle externo con i desde 1 hasta 3.
        k++; // Incrementa la variable k en 1 en cada iteración del bucle externo.
        for (let j = 1; j <= 3; j++) { // Comienza un bucle interno con j desde 1 hasta 3.
            console.log(l++, k, j); // Imprime los valores de l, k y j, y luego incrementa l en 1.
        }
    }
}

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
Imprime Los Ternas de los enteros
*/
