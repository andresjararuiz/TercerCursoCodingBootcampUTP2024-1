
function Rombo() {
    let Altura = 4;

    let espacio = Altura - 1 + 7;

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

        Numerito += 2;

        console.log(Forma);

        Forma = '';
    }

    
    espacio =8;

    Numerito = Altura * 2 - 3;


    for (let i = 0; i < Altura - 1; i++) {
        for (let j = 0; j < espacio; j++) {

            Forma += ' ';
        }
        for (let j = 0; j < Numerito; j++) {

            Forma += 'Z';
        }
        espacio++;
        Numerito -= 2;
        console.log(Forma);
        Forma = '';
    }
}

Rombo();
