// fs es un módulo de Node JS para trabajar con archivos
// La siguiente sintaxis para importar módulos no se utiliza más a patir de ES6
const fs = require('fs');

// Se lee un archivo de forma sincróna porque está en la PC
const texto = fs.readFileSync('texto.txt', 'utf-8');

console.log(texto);

// La regex /node.js/ig busca node.js ignorando mayúsculas y minúsculas de forma global
const textoModificado = texto.replace(/node.js/ig, 'NodeJS');

// Se crea un archivo y se escribe de forma sincróna porque está en la PC
fs.writeFileSync('modificado.txt', textoModificado);