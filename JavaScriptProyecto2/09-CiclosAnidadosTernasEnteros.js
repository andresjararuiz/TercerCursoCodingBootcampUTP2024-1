function mostrarTernasEnteros() {
    let k = 0
    let l = 1
    for (i = 1 ; i < 4 ; i++){
        k ++
        for (j = 1 ; j <= 3 ; j++) {
            console.log(l ++, k , j)
        }
    }
}
mostrarTernasEnteros()