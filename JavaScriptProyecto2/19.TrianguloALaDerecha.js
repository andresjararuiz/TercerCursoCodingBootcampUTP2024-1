function triangulo() {
    //Altura de la 1era Mitad del Triangulo
    let Altura = 6;
//Espacio que tiene para dar la impresion de un triangulo
    let espacio = Altura - 1 + 34;
//Numero de triangulos a imprimir
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
/*
- Fecha de publicación: 18 de abril del 2024
- Hora: 4:00 PM
- Versión de su codigo: 06
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
Crea una una imagen de un Triangulo a la derecha en la columna 40, con la letra Z y en la cantidad de lineas solicitadas
*/
