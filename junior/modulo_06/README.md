# :bulb: Modulo 6: Module System

## :book: Objetivo

- Comprender el sistema de módulos de NodeJS
- Crear y utilizar módulos propios

## :clipboard: Material

Consultar en la presentación, las diapositivas

## :books: Temas

### I. Creación de módulos

Para crear un modulo se necesita añadir las funciones al modulo de sistema

```js
const getParseDate = () => {
  const today = new Date();
  const hours = today.getHours();
  const mins = today.getMinutes();
  const secs = today.getSeconds();

  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;
  let date = today.getDate();
  date = date < 10 ? `0${date}` : date;

  return `${year}/${month}/${date} ${hours}:${mins}:${secs}`;
};

const logLine = (date, type, message) => `${date} [${type}] ${message}\n`;

module.exports = { getParseDate, logLine };
```

### II. Importación de módulos

Para importar un modulo y acceder a todos sus métodos, se usa la siguiente sintaxis

```js
const myModule = require('./module01');

console.log(`La fecha actual es ${myModule.getParseDate()}`);
```

Se puede importar un solo método del modulo

```js
const { getParseDate } = require('./module01');

console.log(`La fecha actual es ${getParseDate()}`);
```

## :pencil2: Ejercicio

Realizar modificaciones en el ejercicio del modulo 5 para que las funciones sean importadas mediante módulos.
