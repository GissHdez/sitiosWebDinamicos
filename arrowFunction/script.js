var miFunctionNormal = function (){
    console.log('Mi función clasica')
}

// Ahorro de la palabla function
var miFunctionArrow = () =>{
    console.log('Mi función clasica')
}

var saludo = (nombre, apellido) =>{
    console.log(`Hola, mi nombre es:  ${nombre} ${apellido}`);
}

//Ahorro de los parentesis de parametros
var saludoNombre = nombre =>{
    console.log(`Hola, mi nombre es: ${nombre}`);
}

//Ahorro de los parentesis de los parámetros y llaves
var saludoNombre = nombre => console.log(`Hola, mi nombre es: ${nombre}`);

setTimeout(
    function(){
    console.log('Me muestro después de un segundo');
}, 1000);