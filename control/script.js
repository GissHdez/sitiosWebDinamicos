//Condicionales
/*var genero = 'femenino';

if(genero == 'masculino'){
    console.log('El baño está a la derecha')
}else{
    console.log('El baño está a la izquierda');
}*/

//Comparaciones
// = esto es una asignación
// == iguala una variable a la otra y las compara
// === compara unidades de memoria y tipos de variable
// > y <
// >= y <=
// si no es esto es lo otro OR ||
// las dos o mas condiciones se tienen que cumplir &&
/*var compara1 = 1 == '1';
var compara2 = 1 === '1';
var compara3 = 6 < 5;
var compara4 = 6 <= 6;
var compara5 = 6 === 5 || 6 === 6;
var compara6 = 5 > 2 && 6 === 5; */

var edad = prompt("Ingresa tu edad");
if (edad >= 18){
    console.log('Eres mayor de edad')
}else{
    console.log('Aun no eres mayor de edad');
}