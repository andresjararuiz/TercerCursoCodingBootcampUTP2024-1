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