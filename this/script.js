//this en el scope global
console.log(`this: ${this}`);

// This en el scope de una función
function quienEsThis(){
    return this
}
console.log(`Quien es this dentro de una función ${quienEsThis()}`)

// This en el scope de una función estricta
function quienEsThisEstricto(){
    'use strict';
    return this;
}
console.log(`Quien es this dentro de una función estricta ${quienEsThisEstricto()}`)

//This en el contexto de un objeto
const persona = {
    name: 'Gissel',
    lasName: 'Hernandez',
    age: 21,
    saludar: function(){
        console.log(`Hola, Soy ${this.name}`)
    },
    whoIsThis: function(){
        console.log(`Quien es this dentro de un objeto ${this}`)
    }
}
persona.saludar();
persona.whoIsThis();

//This en el contexto de una clase (dentro de js son funciones) Las clases empiezan con mayusculas
function Persona(name){
    this.name = name
}
Persona.prototype.saludar = function(){
    console.log(`Hola, soy ${this.name}`)
}

const gissel = new Persona('gissel');
gissel.saludar();