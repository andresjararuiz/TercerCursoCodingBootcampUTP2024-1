function MostrarZs() {

    let contadorFilas = 10
    let contadorColumnas = 20
    let condZizquierda = 10
    let condZderecha = 10

    while (contadorFilas > 0) {
        contadorFilas --
        

        contadorColumnas = 1
        while(contadorColumnas < 20){

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
        console.log('')

        condZderecha --
        condZizquierda ++
    
    }
    condZizquierda ++
    condZderecha --

    //let iaux = 0

    // for (i = 0 ; i < 20 ; i++ ) {

    //     iaux ++
        
    //     if (iaux == 1 || iaux == 20) {
    //         process.stdout.write('z')
    //     }

    //     else {
    //     process.stdout.write('-')}
    // }
    
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