
//Listas Mayor Y Menores

function mayorMenor(){
  //Aqui arroja el valor maximo de la lista
    console.log('El numero mas grande es ' + Math.max(5, 12, 3, 8, 1))
    //Aqui arroja el valor minimo de una lista
    console.log('El numero mas pequeño es ' + Math.min(5, 12, 3, 8, 1))
}

mayorMenor()


//combinar listas
function combinacionListas(lista1, lista2) {
    lista1 = [4, 9, 2]
    lista2 = [7, 5, 1]
  //Agrupa las listas y las ordena de Menor a Mayor
    console.log( 'Lista combinada y ordenada [' + (lista1.concat(lista2)).sort(function(lista1, lista2) { return lista1 - lista2; }) +  ']');
}

 combinacionListas()

// inverit listas
function invertirListas(list3) {
    list3 = [3, 6, 9 ,12, 15]
    console.log(list3)
//Invertir la Lista
    let reverselist = list3.reverse()
    console.log(reverselist)
}

invertirListas()

/*
Fecha y hora de publicacion: 10:30 14-04-2024
Version del codigo:V14-04-2024
Autores. Ing(Andres Jaramillo Ruiz) Ing(Santiago Castaño) Ing(Juan Pablo Gomez)
Nombre del lenguaje utilizado: Javascript
Versión del lenguaje utilizado: ECMASCRIPT 6.0 UTF-8
Universidad Tecnológica de Pereira
Programa de Ingeniería de Sistemas y Computación Jornada Especial
*/