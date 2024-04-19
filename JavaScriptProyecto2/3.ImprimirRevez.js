const prompt = require('prompt-sync')();

function invertirNumeros() {
    let EntradaNumeros = prompt("Entre el Numero ")
   let Entero = Number.isInteger(EntradaNumeros)
 let Separador = Entero.split("")
 
 let Invertir = Separador.reverse()

 let VolverAJuntar = Invertir.join("")


 console.log(VolverAJuntar)
}

invertirNumeros()