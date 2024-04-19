function ImprimirAs() {
    let espacios = 6
    let espaciosAux = 6

    for (let i = 0 ; i <= 6 ; i ++)   {

        process.stdout.write("A")

        espacios = espaciosAux
        while (espacios > 0) {
            process.stdout.write(" ")
            espacios -= 1
        }
        espaciosAux -= 1
        process.stdout.write("A\n")
    }
}
ImprimirAs()