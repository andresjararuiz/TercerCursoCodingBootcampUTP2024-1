const prompt = require('prompt-sync')();
let rush = ()=> {
    //x = 5, y = 5 
    let x = prompt('Por favor ingrese el numero de columnas: ')
    let y = prompt('Por favor ingrese el numero de filas: ')
    let xAux = x
    let xAux2 = x
    let xAux3 = x
    let xaux4 = x
    let xcond = x
    let yAux = y

    
    if (xcond == 1) {
        process.stdout.write('/')
    }
    else {
    process.stdout.write('/')
    while (x > 2 ) {
        process.stdout.write('*')
        x--
    }
    process.stdout.write('\\')
    }

    //impresion en y
    if (xcond == 1) {
        
    }
    while (y > 2) {
        if (xcond == 1) {
            console.log(' ')
            process.stdout.write('*')
            xAux = x
            y--
    
        }
        else {
        console.log(' ')
        process.stdout.write('*')
        xAux = x
        y--

        //impresion en x para cada linea el espacio
        xAux3 = xaux4
        while (xAux3 > 2) {
            process.stdout.write(' ')
            xAux3--
        }
        process.stdout.write('*')}
    }
    console.log(' ')
    //impresion en x abajo
    
    if ((xcond == 1) && (y == 1)) {
        return
    }

    else if (x ==1) {
        process.stdout.write('\\')
    }


    else if ((y == 1)) {
        return
    }

    else {

    process.stdout.write('\\')
    while (xAux2 > 2 ) {
        process.stdout.write('*')
        xAux2--
    }
    process.stdout.write('/')}
}

rush (4,4)