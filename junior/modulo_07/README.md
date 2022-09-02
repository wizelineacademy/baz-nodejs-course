# :bulb: Modulo 7: Emisores de eventos y buffers

## :book: Objetivo

- Identificar el concepto de evento
- Crear emisores de eventos

## :clipboard: Material

Consultar en la presentación, las diapositivas

## :books: Temas

### I. Eventos

Los eventos son una serie de instrucciones que se ejecutan como respuesta a una acción.

### 1. Evento simple

Para crear un evento, se utiliza el modulo `events` de la siguiente manera

```js
const EventEmitter = require('events');
const myEvent = new EventEmitter();

myEvent.on('log', () => {
  console.log('Log event');
});
```

Para poder ejecutar el evento se utiliza la siguiente sintaxis:

```js
event.emit('log');
```

### 2. Evento con datos de entrada

Si deseamos que el evento reciba datos de entrada, usamos la siguiente sintaxis:

```js
myEvent.on('userLogin', (userName, role) => {
  console.log(
    `El usuario [${userName}] con el rol <${role}> ha iniciado sesión`
  );
});

myEvent.emit('userLogin', 'Juan Doe', 'Admin');
```

### 3. Eventos de error

Se pueden crear eventos de error, por ejemplo

```js
myEvent.on('error', (err) => {
  console.error(`whoops! there was an error: ${err}`);
});
myEvent.emit('error', new Error('whoops!'));
```

## II. Buffers

Los buffers representan una sección de memoria. Se pueden definir como un array de enteros, los cuales representan información en forma de bytes.

Se puede crear una variable que almacene texto en forma de bytes usando la siguiente sintaxis:

```js
const buff = Buffer.from('Hello buffer');

// Imprime el contenido en forma de bytes
console.log(buff);

// Imprime el contenido encodeado
console.log(buff.toString());

// Imprime cada byte dentro del buffer
buff.forEach((byte) => {
  console.log(byte);
});
```

Los buffers se pueden crear de un tamaño determinado y con un contenido inicial.

```js
// Crea una variable buffer de 1kb
const oneKb = Buffer.alloc(1024, 'one kb');

console.log(oneKb.toString());
```

Un buffer se puede crear vacío y posteriormente cargarle información.

Si la información que se desea agregar a un buffer excede su capacidad, la información almacenada será truncada.

```js
const smallBuff = Buffer.alloc(8);
const bigBuff = Buffer.alloc(512);
const defaultText = 'Default Text';

smallBuff.write(defaultText);
bigBuff.write(defaultText);

console.log({ smallBuff, string: smallBuff.toString() });
console.log({ bigBuff, string: bigBuff.toString() });
```

## :mag: Para saber más

[Eventos](https://nodejs.org/api/events.html)
[El emisor de eventos de NodeJS](https://nodejs.dev/en/learn/the-nodejs-event-emitter/)
[Buffers](https://nodejs.dev/en/learn/nodejs-buffers/)

## :pencil2: Ejercicio

En base al código resultante del modulo 6, modificar la función encargada de escribir logs para que funcione en base a eventos.
