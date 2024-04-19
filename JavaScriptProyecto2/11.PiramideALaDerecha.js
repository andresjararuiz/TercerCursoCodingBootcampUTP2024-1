function Piramide() {
    //Altura de la Piramide
    let Altura = 25;
//Espacio que tiene para dar la impresion de una Piramide
    let espacio = Altura - 1 + 54;
//Numero de A a imprimir
    let Numerito = 1;
//El espacio Definido y al cual se le va a sumar los espacios y las A
    let Forma = '';
    
    for (let i = 0; i < Altura; i++) {

        for (let j = 0; j < espacio; j++) {

            Forma += ' ';
        }
        for (let j = 0; j < Numerito; j++) {

            Forma += 'A';
        }
        espacio--;

        Numerito += 1;

        console.log(Forma);

        Forma = '';
    }                                                       
}
Piramide()
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
Crea una una imagen de una Piramide a la derecha en la columna 80, con la letra A y en la cantidad de lineas solicitadas (25 Filas)
*/

                                                      