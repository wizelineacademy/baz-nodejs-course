# :bulb: Modulo 2: Configuración Inicial

## :book: Objetivo

- Realizar la instalación de NodeJS
- Ejecutar nuestro primer programa

## :clipboard: Material

Consultar en la presentación, las diapositivas 18 al 21.

## :books: Temas

### I. Instalando NodeJS

[Descargue](https://NodeJS.org/es/download/) e [instale](https://nodejs.dev/en/learn/how-to-install-nodejs/) NodeJS siguiendo las instrucciones descritas en la documentación oficial

Una vez instalado, compruebe que todo este correcto ejecutando en una terminal los siguiente commandos y compruebe que no marque error.

```bash
node --version
npm --version
```

### II. Hola Mundo

En coloque el siguiente código en un archivo `holaMundo.js`

```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((_req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola Mundo');
});

server.listen(port, hostname, () => {
  console.log(`Servidor escuchando en http://${hostname}:${port}/`);
});
```

Ejecute el archivo con el comando

```bash
node holaMundo.js
```

## :mag: Para saber más

[Diferencias entre NodeJS y el navegador](https://nodejs.dev/en/learn/differences-between-nodejs-and-the-browser/)

[Ambientes de desarrollo](https://nodejs.dev/en/learn/nodejs-the-difference-between-development-and-production/)
