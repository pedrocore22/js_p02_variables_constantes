// Variables 

// Identificadores (nombre de las variables)

// - Tienen que comenzar por letra o símbolo $
// o símbolo _
// - No se pueden usar las palabras reservadas
// del lenguaje
// - (Buena práctica) utilizar camelCase
// - (Buena prácica) utilizar nombres semánticos

// Declaración de variables en JavaScript (ECMAScript 6)

let primerApellido; 

// Asignación de valores a las variables;

primerApellido = 'López';

primerApellido = 'Fernández';

console.log(primerApellido);

// Inicialización de variables (declarar y asignar por primera vez)

let telefono = '+3498765412';

console.log(telefono);

// Se pueden declarar varias variables a la vez

let email, codigoPostal, localidad; // Separando por comas

// Constantes
// Similar a variable pero no se modifican su valor
// durante la ejecución del programa

const endPoint = 'http://cloud/api';

// endPoint = 'otro valor'; retornaría error

// El uso de let y const es relativamente reciente
// ya que pertenece a la especificación ECMAScript 6
// Modo clásico anterior a 2015-2018 con palabra 
// reservada var

var nombre;

nombre = 'Juan';

var ciudad = 'Cáceres';

// No había constantes así que para declararlas se
// usaba como convención su identificador en mayúsculas

var ENDPOINT = 'http://...';

// Existe una forma de declarar variables (mala práctica)
// sin palabra reservada

numeroPasaporte = '879879879879'; // Global 

