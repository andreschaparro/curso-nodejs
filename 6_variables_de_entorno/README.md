# Capítulo 6: Variables de entorno

## dotenv

Es un módulo de terceros que permite modificar las variables de entorno de Node JS a partir del contenido un archivo llamado `.env`.

1. Ejecutar `npm i dotenv`.

Como resultado, se agrega el módulo `dotenv` al archivo `package.json` como una `dependencies`.

📝No se instala únicamente para desarrollo porque puede ser necesario para cuando el proyecto se suba a un servidor.

## .env

1. Crear un archivo llamado `.env`.
2. Modificar el contenido de `.env`:

```
PORT= 3000
DB_USER= "ROOT"
DB_PASS= "123456"
```

📝Agregar el archivo `.env` a `.gitignore` porque tiene información sensible.

## env-var

Es un módulo de terceros que permite tipar las variables de entorno.

1. Ejecutar `npm i env-var`.

Como resultado, se agrega el módulo `env-var` al archivo `package.json` como una `dependencies`.

📝No se instala únicamente para desarrollo porque puede ser necesario para cuando el proyecto se suba a un servidor.