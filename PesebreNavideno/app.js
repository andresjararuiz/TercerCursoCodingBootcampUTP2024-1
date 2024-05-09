
function Tarjeticas() {
let CartasSeleccionadas = []
let valuesUsed =[]
let currentMove =[]
let contenedor = document.getElementById('contenedorCartas');

let idCartas = [];

for (let i = 0; i < 8; i++) {
    idCartas.push(i);
    idCartas.push(i);
}
idCartas.sort(() => Math.random() - 0.5);

for (let i = 0; i < 16; i++) {
    
let marco = document.createElement("div")
marco.classList.add("Game")
contenedor.appendChild(marco)

let cartas = document.createElement("div")
cartas.classList.add("Card")
marco.appendChild(cartas)

let carafront = document.createElement("div")
carafront
carafront.classList.add("memorama")
cartas.appendChild(carafront)

let caraback = document.createElement("div")
caraback.classList.add("memoramaBack")
cartas.appendChild(caraback)

    let imagen = document.createElement('img');
    imagen.src = "/img/tarjeta_cubierta.png";
    imagen.alt = "Tarjeta " + idCartas[i];
    imagen.classList.add("Tarjeta")
    imagen.tabIndex = "0"
    imagen.id = idCartas[i];
    carafront.appendChild(imagen);
}
}
Tarjeticas()


let comenzar = document.getElementById("comenzar");
let modalsito = document.getElementById("modalContainer");

function modal() {

    modalsito.style.display = 'none' ;
}

comenzar.addEventListener('click', modal );


let seleccionar = document.getElementsByClassName("Tarjeta");
function memorama() {

    seleccionar.classList.add("Active");

}
seleccionar.addEventListener('click', memorama);