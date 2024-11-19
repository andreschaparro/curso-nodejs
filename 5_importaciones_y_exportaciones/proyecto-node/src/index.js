// Sintaxis legacy
// const {getTittle, getAuthor} = require('./functions')
// const {programador} = require('./objects')

// Sintaxis ES6
// En package.json agregar el campo `type` y asignarle el valor `module`
import {getTittle, getAuthor} from './functions.js'
import {programador} from './objects.js'

const {nombre, lenguajes} = programador

console.log(getTittle())
console.log(getAuthor(nombre))
console.log(lenguajes)