function triangulo() {
    let Altura = 6;

    let espacio = Altura - 1 + 34;

    let Numerito = 1;

    let Forma = '';
    
    for (let i = 0; i < Altura; i++) {

        for (let j = 0; j < espacio; j++) {

            Forma += ' ';
        }
        for (let j = 0; j < Numerito; j++) {

            Forma += 'Z';
        }
        espacio--;

        Numerito += 1;

        console.log(Forma);

        Forma = '';
    }

    espacio = 35;

    Numerito = Altura * 2 - 7;
                                        
                                            
    for (let i = 0; i < Altura - 1; i++) {
        for (let j = 0; j < espacio; j++) {

            Forma += ' ';
        }
        for (let j = 0; j < Numerito; j++) {

            Forma += 'Z';
        }
        espacio++;
        Numerito -= 1;
        console.log(Forma);
        Forma = '';
    }

}
triangulo()