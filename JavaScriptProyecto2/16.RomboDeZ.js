
function Rombo() {
    //La longitud de la 1era mitad del Rombo
    let Altura = 4;
//Los espacios que debe tener
    let espacio = Altura - 1 + 7;
//El Numero de Z
    let Numerito = 1;
//El espacio Definido y al cual se le va a sumar los espacios y las Z
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

       //Espacio de la segunda mitad       
    espacio =8;
//Numero de Z a Imprimir 
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
/*
- Fecha de publicación: 18 de abril del 2024
- Hora: 4:00 PM
- Versión de su codigo: 10
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
Crea una una imagen de un Rombo, con la letra Z y en la cantidad de lineas solicitadas
*/
