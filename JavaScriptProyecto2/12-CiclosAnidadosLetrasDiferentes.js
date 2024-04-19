function mostrarLetras() {
    let i = -1
    let iAux;
    let j = 14
    let jAux = 14
    let k = 0
    //let o34Espacios = 0

    let arrayLetras = ['P','N','L','J','H','F','D']
    while (i < 6) {366


        i ++ 
        iAux = i

        while ( iAux > 0) {
            process.stdout.write(" ")
            iAux--
        }

        j = jAux -= 2

        while (j >= 0){
        process.stdout.write(arrayLetras[k])
        j--
        }
        console.log(' ')
        k++
    }
    
    jAux--

}

mostrarLetras()