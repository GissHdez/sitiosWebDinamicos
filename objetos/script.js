var gissel = {
    nombre: 'Gissel',
    apellido: 'Hdez',
    edad: 21,
    saludar: function(){
        console.log(`Mi nombre es ${gissel.nombre}`);
    }
}

console.log(gissel.nombre);
gissel.saludar();

var viernes = { //Destructuración de objetos y pasarlos a una función
    nombre: 'Viernes',
    raza: 'Shih-tzu',
    edad: 1,
    color: 'Cafe'
}

/*function colorPerro(perro){
    console.log(`El perro es de color: ${perro.color}`)
} Se manda a llamar todo el objeto
function colorPerro({color}){ //Se llama solo a una parte del objeto
    console.log(`El perro es de color: ${color}`);
    color = 'verde';
}*/
function colorPerro(perro){  //Se crea un nuevo objeto sin afectar el anterior
    console.log(`El perro es de color: ${perro.color}`);
    return{
        ...perro,
        color: 'verde'
    }
}

colorPerro(viernes)