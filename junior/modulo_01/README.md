# :bulb: Modulo 1: ¿Qué es NodeJS?

## :book: Objetivo

- Definir que es NodeJS
- Comprender el funcionamiento del entorno de ejecución

## :clipboard: Material

Consultar en la presentación, las diapositivas 10 al 16.

## :books: Temas

### I. Definición

[Sobre NodeJS](https://NodeJS.org/en/about/)

### II. Ciclo de vida y Bucle de eventos

El siguiente código contiene diferentes funciones que corresponden a cada uno de los ciclos de vida durante la ejecución de un proyecto en NodeJS.

```js
const fs = require('fs');

console.log('start');

setTimeout(() => console.log('timeout finished'), 0);

fs.readFile('./resources/loremIpsum.txt', () => console.log('data returned'));

setImmediate(() => {
  console.log('executing setImmediate callback');
  setTimeout(() => console.log('second timeout finished'), 0);
});

console.log('end');
```

## :mag: Para saber más

[Historia de NodeJS](https://nodejs.dev/en/learn/a-brief-history-of-nodejs/)

[Bucle de eventos](https://nodejs.dev/en/learn/the-nodejs-event-loop/)
