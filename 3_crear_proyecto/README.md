# Capítulo 3: Proyecto de Node JS

## Crear el proyecto

1. Crear una carpeta llamada `proyecto-node`.
2. Ir a la carpeta `proyecto-node`.
3. Ejecutar `npm init`.
4. No modificar el `package name` y presionar `ENTER`.
5. Ingresar `0.0.1` como `version` y presionar `ENTER`.
6. Ingresar `Proyecto Node` como `description` y presionar `ENTER`.
7. No modificar el `entry point` y presionar `ENTER`.
8. Dejar vacío `test command` y presionar `ENTER`.
9. Dejar vacío `git repository` y presionar `ENTER`.
10. Dejar vacío `keywords` y presionar `ENTER`.
11. Ingresar nuestro nombre en `author` y presionar `ENTER`.
12. No modificar el `license` y presionar `ENTER`.
13. Ingresar `yes` y presionar `ENTER`.

Como resultado, se crea el archivo `package.json`.

## package.json

1. Modificar el valor de `main` a `src/index.js`.
2. Eliminar el script `test`.
3. Agregar un script llamado `dev` que ejecute `node src/index.js`.
4. Agregar un script llamado `console` que ejecute `echo 'Hola Mundo desde Scripts`.
5. Ejecutar `npm run dev`.
6. Ejecutar `npm run console`.