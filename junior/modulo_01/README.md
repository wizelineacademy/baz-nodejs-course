# Modulo 1: :bulb: ¿Qué es NodeJS?

## :book: Objetivo

Conocer el entorno de ejecución NodeJS y como funciona.

## :clipboard: Material

Consultar en la presentación, las diapositivas 10 al 16.

## Temas

### Definición

### Ciclo de vida

El siguiente código contiene diferentes funciones que corresponden a cada uno de los ciclos de vida durante la ejecución de un proyecto en NodeJs.

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
