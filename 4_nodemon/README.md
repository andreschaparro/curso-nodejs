# Capítulo 4: nodemon

Es un módulo de terceros que permite recargar automáticamente el proyecto cuando se realizan modificaciones. Así, no hay que ejecutar `npm run dev` constantemente.

## Instalación solo para desarrollo

1. Ejecutar `npm i nodemon --save-dev`.

Como resultado, se agrega el módulo `nodemon` al archivo `package.json` como una `devDependencies`.

## package.json

1. Agregar un script llamado `start` que ejecute `node src/index.js`.
2. Modificar el script llamado `dev:` para que ejecute `nodemon src/index.js`.
3. Ejecutar `npm start`.
4. Ejecutar `npm run dev`.

📝El script `start` es el único que se ejecuta sin la palabra `run` después de `npm`.