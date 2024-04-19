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