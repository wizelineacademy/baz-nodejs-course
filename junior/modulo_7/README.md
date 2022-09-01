# :bulb: Modulo 7: Emisores de eventos y buffers

## :book: Objetivo

- Identificar el concepto de evento
- Crear emisores de eventos

## :clipboard: Material

Consultar en la presentación, las diapositivas

## :books: Temas

### I. Eventos

### 1. Evento simple

Para crear un evento, se utiliza el modulo `events` de la siguiente manera

```js
const EventEmitter = require('events');
const myEvent = new EventEmitter();

myEvent.on('log', () => {
  console.log('Log event');
});
```

Para poder ejecutar el evento se utiliza la siguiente sintaxis

```js
event.emit('log');
```

### 2. Evento con datos de entrada

Si deseamos que el evento reciba datos de entrada, usamos la siguiente sintaxis

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

## :mag: Para saber más

[Eventos](https://nodejs.org/api/events.html)
[El emisor de eventos de NodeJS](https://nodejs.dev/en/learn/the-nodejs-event-emitter/)

## :pencil2: Ejercicio
