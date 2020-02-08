/* Clases o prototipos: 
function Perro(nombre, raza, tamanio){
    this.nombre = nombre;
    this.raza = raza;
    this.tamanio = tamanio;
} //Metodo constructor es la iniciación de una clase

Perro.prototype.ladrar = () => console.log('woof')
Perro.prototype.queRazaSoy = function(){
    console.log(`Mi raza es: ${this.raza}`)
}

var loli = new Perro('Loli', 'Chihuahua', 'Ch');
var friday = new Perro('Friday', 'Shih Tzu', 'Ch');
var jarvis = new Perro('Jarvis', 'Pastor ingles', 'Gde'); */
function heredaDe(protipHijo, proptitpoPadre){
    var fn = function(){} //clase fantasma que será igual de persona
    fn.prototype = proptitpoPadre.prototype;
    protipHijo.prototype = new fn;
    protipHijo.prototype.constructor = protipHijo;
}
function Persona(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}
Persona.prototype.soyAlto = function(){
    return this.altura > 1.7
}
Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
heredaDe(Programador,Persona); //hijo, padre
function Programador(nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}
Programador.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy programador`)
}
 var loli = new Programador('Loli', 'Lolo', 1.73);
//var miguel = new Persona('Miguel','Rivera',1.8);

