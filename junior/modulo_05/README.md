# :bulb: Modulo 5: Funciones síncronas y asíncronas

## :book: Objetivo

- Diferenciar entre la ejecución síncrona y asíncrona
- Crear funciones promesa
- Crear funciones asíncronas

## :clipboard: Material

Consultar en la presentación, las diapositivas

## :books: Temas

### Funciones síncronas

El siguiente es un ejemplo de una función síncrona

```js
const myTimer = () => {
  setTimeout(() => {
    console.log('Tiempo terminado');
  }, 3000);
};

console.log('Inicio del programa');
myTimer();
console.log('Fin del programa');
```

### Promesas

#### Promesa simple

El ejemplo anterior se puede convertir en una promesa añadiendo lo siguiente

```js
const myTimerPromise = new Promise((resolve) => {
  setTimeout(() => {
    console.log('Tiempo terminado');
    resolve();
  }, 3000);
});

console.log('Inicio del programa');
myTimerPromise.then(() => {
  console.log('Fin del programa');
});
```

#### Promesa con retorno fallido

Las promesas pueden manejar el manejo de errores de la siguiente forma

```js
const subTask = (message) =>
  new Promise((resolve, reject) => {
    if (message === '' || message === undefined) {
      reject(new Error('Mensaje incorrecto'));
    }
    resolve('Mensaje correcto');
  });

subTask('Hola')
  .then((message) => console.log({ message }))
  .catch((err) => console.log({ err }));

subTask('')
  .then((message) => console.log({ message }))
  .catch((err) => console.error(`Error en la sub tarea ${err}`));
```

#### Encadenamiento de promesas

Se pueden encadenar promesas para que al termino de una de ellas se ejecute la siguiente

```js
const firstTask = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log('Primera tarea');
      resolve();
    }, 1000);
  });

const secondTask = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log('Segunda tarea');
      resolve('Llamada a la tercera tarea');
    }, 2000);
  });

const thirdTask = (message) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, 3000);
  });

firstTask()
  .then(() => secondTask())
  .then((data) => thirdTask(data))
  .finally(() => console.log('Terminaron tareas'));
```

El manejo de errores en un encadenamiento de promesas se realiza de la siguiente forma

```js
firstTask()
  .then((data) => subTask(data))
  .then(() => secondTask())
  .then((data) => thirdTask(data))
  .catch((err) => console.log(`Error en las tareas: ${err}`))
  .finally(() => console.log('Terminaron tareas'));
```

### Funciones asíncronas

## :pencil2: Ejercicio

1. [Listado de vehículos](exercise01.js)
