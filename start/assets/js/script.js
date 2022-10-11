// Definire le variabili e stampare la stringa
var nome = 'Aldo';
let tipo = 'cliente';
const piGreco = 3.14;

document.getElementById('concatena').innerHTML = `${nome}, ${tipo}, ${piGreco}`;


// Concatenare le tre variabili in una e stampare la stringa
var concatena2 = nome + ', ' + tipo + ', ' + piGreco;

document.getElementById('concatena2').innerHTML = concatena2;


// Utilizzare le keyword dichiarative var e let con la stessa variabile
var nome = 'Mario';

document.getElementById('var').innerHTML = nome;

{
    let nome = 'Carla';
    document.getElementById('let').innerHTML = nome;
}

document.getElementById('final').innerHTML = nome;


{
    let nome1 = 'Mario';

    document.getElementById('let2').innerHTML = nome1;

    nome1 = 'Carla';

    document.getElementById('let3').innerHTML = nome1;
    document.getElementById('final2').innerHTML = nome1;
}


// Valore iniziale
var numero = 15;

document.getElementById('iniziale').innerHTML += numero;


// Addizione e incremento
var addizione = numero + numero;

document.getElementById('valore1').innerHTML += `${addizione}, ${++addizione}`;


// Sottrazione e decremento
var sottrazione = numero - 10;

document.getElementById('valore2').innerHTML += `${sottrazione}, ${--sottrazione}`;


// Moltiplicazione
var moltiplicazione = numero * 3;

document.getElementById('valore3').innerHTML += `${moltiplicazione}`;


// Divisione
var divisione = numero / 3;

document.getElementById('valore4').innerHTML += `${divisione}`;


// Concatenazione
document.getElementById('valore5').innerHTML += `${numero} è un numero`;