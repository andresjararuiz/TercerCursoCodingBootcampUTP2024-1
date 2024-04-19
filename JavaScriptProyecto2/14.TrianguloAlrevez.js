
function trianguloAlreves() {
    //Altura del Triangulo
    let Altura = 8;
//Espacio que necesita para asemejarse a un triangulo
    let espacio = Altura - 1 ;
//Numero de P a Imprimir
    let Numerito = 2
//El espacio definido en si al cual se le suma  Numerito y espacio para darle la forma
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
/*
- Fecha de publicación: 19 de abril del 2024
- Hora: 6:00 AM
- Versión de su codigo: 03
- Autores del lenguaje utilizado: ECMASCRIPT 6.0 (javascrit 6.0)
- Versión del lenguaje utilizado: 6.0
- Presentado por:   
                    Ingeniera Luisa Victoria
                    Ingeniera Lizeth 
                    Ingeniera Andrea
                    Ingeniero Juan Manuel
                    Ingeniero Santiago Castaño
                    Ingeniero Andres
                    Ingeniero Camilo

- Universidad Tecnológica de Pereira
- Programa de Ingenieria de Sistemas y Computación
- Descripcion del programa:
Imprime un patron de letras en la consola Asemejandose a un triangulo de cabeza
*/