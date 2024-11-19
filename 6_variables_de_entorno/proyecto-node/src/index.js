// El objeto process proporciona información del proceso de Node JS
// console.log(process)

// process.env muestra las variables de entorno de Node JS
// console.log(process.env)

// Uso del módulo dotenv
import { config } from 'dotenv'

config()

console.log(process.env.PORT)
console.log(process.env.DB_USER)
console.log(process.env.DB_PASS)

// Uso del módulo env-var 
import env from 'env-var'

const PORT = env.get('PORT').required().asPortNumber()
console.log(PORT)