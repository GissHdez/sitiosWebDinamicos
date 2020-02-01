/* Cada hoja de script es un programa */
var miPrimerVariable; // Variable que se guarda en la memoria RAM

miPrimerVariable = 'Esto es el contenido de mi variable';

var miSegundaVariable = 'Este es el contenido de mi segunda variable'; //Mismo resultado que el anterior, pero ahorra espacio

var numeroUno, numeroDos, resultado, resultadoArreglado, resultadoEnNumero; //Cear variables de números
numeroUno = 10;
numeroDos = 20;
resultado = (numeroUno * numeroDos)/3;
resultadoArreglado = resultado.toFixed(2);
resultadoEnNumero = parseFloat(resultadoArreglado);//Convertir stringss en punto decimales





/* Trabajando con strings - Cadenas de texto */
var nombre, apellidoP, apellidoM, saludo, nombreMayus, nombreBajas, letrasTotales, primeraLetra, str;
nombre = 'Gissel';   
apellidoP = 'Hernandez';
apellidoM = 'Anaya';

//saludo = 'Hola, mi nombre es: ' + nombre + ' ' + apellidoP + ' ' + apellidoM;
saludo = `Hola mi nombre es ${nombre} ${apellidoP} ${apellidoM}`; //ctrl + alt + alado enter

nombreMayus = nombre.toUpperCase(); //Función base, convierte todo el texto en mayúsculas
nombreBajas = nombre.toLowerCase(); //Función base, convierte todo el texto en minúsculas
letrasTotales =  nombre.length; //Cantidad de letras que contiene el texto
primeraLetra = nombre.charAt(0); //Regresa primera letra de texto
str = nombre.substr(0,2); //sustrae caracteres (inicio, final)
