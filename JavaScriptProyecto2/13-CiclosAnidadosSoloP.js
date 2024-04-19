function mostrarLetras() {
    let i = -1
    let iAux;
    let j = 14
    let jAux = 14
    let k = 0
    let o34Espacios = 1

    let letra = 'P '

    while (i < 6) {

            o34Espacios = 1
            while (o34Espacios < 34){
                process.stdout.write(" ")
                o34Espacios++
            }
    
    

        i ++ 
        iAux = i

        while ( iAux > 0) {
            process.stdout.write("  ")
            iAux--
        }

        j = jAux -= 2

        while (j >= 0){
        process.stdout.write(letra)
        j--
        }
        console.log(' ')
        k++
    }
    
    jAux--

}

mostrarLetras()