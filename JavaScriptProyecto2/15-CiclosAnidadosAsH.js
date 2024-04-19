function MostrarAs() {
    let contadorLineas = 0
    let contadorEspacios = 0
    //contador  de ciclo para imprimir A por la izquierda
    let iaux = 0
    //contador de ciclo para imprimir A por la derecha
    let jaux = 0
    let contadorMitadDs = 6
    let contadorMitadDs2 = 6
    let o28Espacios = 1

    while (contadorLineas <= 2) {
        //Mover a la derecha 28 espacios
         o28Espacios = 1
            while (o28Espacios < 28){
                process.stdout.write(" ")
                o28Espacios++
            }

        contadorLineas ++

        iaux ++
        i = iaux
        //imprimir as por la izquierda
            while (i > 0){
                process.stdout.write('A ')
                i--
        }
                //espacios
                contadorMitadDs2 -= 2
                contadorMitadDs = contadorMitadDs2
                while (contadorMitadDs >= 0) {
                    process.stdout.write('  ')
                    contadorMitadDs --
                    
                    //salto de linea
                if (contadorMitadDs < 0) {
                    //imprimir a por la derecha
            jaux ++
            j = jaux
            while (j > 0){
                process.stdout.write('A ')
                j --
        }
                    console.log(' ')
                }

                }
            //console.log('')
        contadorEspacios  ++    
    }

//IMPRIMIR MITAD
//Mover a la derecha 28 espacios
o28Espacios = 1
while (o28Espacios < 28){
    process.stdout.write(" ")
    o28Espacios++
}
    for (mitad = 0 ; mitad < 7 ; mitad ++ ) {
        process.stdout.write('A ')
    }
    console.log(' ')





    //PARTE DE ABAJO

    let contadorLineas2 = 0
    let contadorEspacios2 = 0
    let iaux2 = 4
    let jaux2 = 4
    let contadorMitadDs3 = 0
    let contadorMitadDs23 = -2



    while (contadorLineas2 <= 2) {
        contadorLineas2 ++

        //Mover a la derecha 28 espacios
        o28Espacios = 1
        while (o28Espacios < 28){
            process.stdout.write(" ")
            o28Espacios++
        }

        iaux2 --
        i2 = iaux2
        //imprimir as por la izquierda ABAJO
        
            while (i2 > 0){
                process.stdout.write('A ')
                i2--
        }
                //espacios ABAJO
                contadorMitadDs23 += 2
                contadorMitadDs3 = contadorMitadDs23
                while (contadorMitadDs3 >= 0) {
                    process.stdout.write('  ')
                    contadorMitadDs3 --
                    
                    //salto de linea ABAJO
                if (contadorMitadDs3 < 0) {
                    //imprimir a por la derecha ABAJO
            jaux2 --
            j2 = jaux2
            while (j2 > 0){
                process.stdout.write('A ')
                j2 --
        }
                    console.log(' ')
                }

                }
            //console.log('')
        contadorEspacios2  ++    
    }










    // PRIMER INTENTO PARTE DE ABAJO

    // let contadorLineas2 = 0
    // let contadorEspacios2 = 0
    // let iaux2 = 4


    // while (contadorLineas2 <= 2) {
    //     contadorLineas2 ++

    //     iaux2 --
    //     let i = iaux2
    //         while (i > 0){
    //             process.stdout.write('A')
    //             i--

    //     }
    //         console.log('')
    //     contadorEspacios2  ++    
    // }
    
}


MostrarAs()
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
Imprime un patron de letras en la consola
*/