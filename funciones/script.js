var sumandoUno = prompt('Ingresa el primer número');
var sumandoDos = prompt('Ingresa el 2do número');

function suma (numero1, numero2){
    suma = parseInt(numero1) + parseInt(numero2); 
    var resultado = `Suma: ${numero1} + ${numero2} = ${suma}`;
    console.log(resultado);
}
function resta (numero1, numero2){
    resta = parseInt(numero1) - parseInt(numero2); 
    var resultado = `Resta: ${numero1} - ${numero2} = ${resta}`;
    console.log(resultado);
}
function multi (numero1, numero2){
    multi = parseInt(numero1) * parseInt(numero2); 
    var resultado = `Multiplicación: ${numero1} x ${numero2} = ${multi}`;
    console.log(resultado);
}
function div (numero1, numero2){
    div = parseInt(numero1) / parseInt(numero2); 
    var resultado = `Divición: ${numero1} / ${numero2} = ${div}`;
    console.log(resultado);
}
suma(sumandoUno, sumandoDos);
resta(sumandoUno, sumandoDos);
multi(sumandoUno, sumandoDos);
div(sumandoUno, sumandoDos);

/*
var nombre = 'Gissel';
var apellido = 'Hdez';
var miVarGlobal = 'Soy global';

console.log(miVarGlobal);
function saludar (nombre, apellido){
    var saludo = `Hola, mi nombre es ${nombre} ${apellido}`;
    console.log(saludo);
    console.log(nombre);
}

saludar('Ana', 'Valencia');//Se recicla código ayuda a usar una sola función con distintos datos
console.log(nombre);*/