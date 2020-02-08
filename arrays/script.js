/* var arreglo = [] Se crea un arreglo vacio
var frutas = ['fresa', 'manzana', 'platano', 'aguacate']

for(var i = 0; i < frutas.length; i++){
    console.log(frutas[i]); //encuentra variable frutas poniendoles un valor por orden (1-4)
} */


const edadMayoria = 18;

var miguel = {
    nombre: 'Miguel',
    apellido: 'Rivera',
    edad: 33,
    estatura: 1.70
}
var gissel = {
    nombre: 'Gissel',
    apellido: 'Hernandez',
    edad: 21,
    estatura: 1.68
}
var enrique = {
    nombre: 'enrique',
    apellido: 'Ruiz',
    edad: 27,
    estatura: 1.80
}
var jonathan = {
    nombre: 'Jonathan',
    apellido: 'Ramos',
    edad: 20,
    estatura: 1.50
}
var rodrigo = {
    nombre: 'Rodrigo',
    apellido: 'Noriega',
    edad: 17,
    estatura: 1.85
}
var esMayor = function(persona){
    return persona.edad > edadMayoria;
}
var esAlto = function(persona){
    return persona.estatura > 1.7;
}
var convertirMtsACms = function(persona){
    return {
        ...persona, //desestructura el objeto para tomar un solo archivo
        estatura: persona.estatura * 100
    }
}
var personas = [miguel,gissel,enrique,jonathan,rodrigo];

var personasMayores = personas.filter(esMayor);

var personasAltas = personas.filter(esAlto);

var estaturaACms = personas.map(convertirMtsACms);