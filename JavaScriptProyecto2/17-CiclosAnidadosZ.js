function MostrarZs() {

    let contadorFilas = 9
    let contadorColumnas = 1
    let condZizquierda = 0
    //cambiar a 20 para poner al centro
    let condZderecha = 20

    while (contadorFilas > 0) {
        contadorFilas --

        contadorColumnas = 0
    //poner <= para poner al centro
        while(contadorColumnas <= 20){

            if (condZizquierda == contadorColumnas || condZderecha == contadorColumnas){
                process.stdout.write('z')
            }

            /*else if (condZizquierda == contadorColumnas){
                process.stdout.write('z')
            }*/

            else {
                process.stdout.write(' ')
            }
            
        contadorColumnas ++
        
    }
    // Para mostrar fil
        //console.log(contadorFilas)

        console.log()

        condZderecha --
        condZizquierda ++
    
    }
    condZizquierda ++
    condZderecha --
    
    //cambiar i a 10 para mostrar en el centro
    for (i = 0 ; i < 10 ; i++ ) {
        process.stdout.write(' ')
    }
    process.stdout.write('z')
}

MostrarZs()
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
Imprime un patron de letras en la consola Asemejandose a un triangulo hueco
*/