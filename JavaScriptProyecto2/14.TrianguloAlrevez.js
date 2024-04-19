
function trianguloAlreves() {
    let Altura = 8;

    let espacio = Altura - 1 ;

    let Numerito = 2

    let Forma = '';

       
    espacio =8;

    Numerito = Altura * 2 - 3;


    for (let i = 0; i < Altura - 1; i++) {
        for (let j = 0; j < espacio; j++) {

            Forma += ' ';
        }
        for (let j = 0; j < Numerito; j++) {

            Forma += 'P';
        }
        espacio++;
        Numerito -= 2;
        console.log(Forma);
        Forma = '';
    }
}

trianguloAlreves()