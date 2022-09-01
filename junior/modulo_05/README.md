# :bulb: Modulo 5: Funciones síncronas y asíncronas

## :book: Objetivo

- Diferenciar entre la ejecución síncrona y asíncrona
- Crear funciones promesa
- Crear funciones asíncronas

## :clipboard: Material

Consultar en la presentación, las diapositivas

## :books: Temas

### I. Funciones síncronas

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

### II. Promesas

#### 1. Promesa simple

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

#### 2. Promesa con retorno fallido

Para marca un retorno de promesa como fallido o con errores, se usa la siguiente estructura

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

#### 3. Encadenamiento de promesas

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

### III. Funciones asíncronas

Se usan las palabras reservadas `async` y `await` para poder ejecutar una promesa como una función asíncrona

```js
const subTask = (message) =>
  new Promise((resolve, reject) => {
    if (message === '' || message === undefined) {
      reject(new Error('Mensaje incorrecto'));
    }
    resolve('Mensaje correcto');
  });

const main = async (message) => {
  try {
    const response = await subTask(message);
    console.log({ response });
  } catch (e) {
    console.log(e.toString());
  }
};

main('Mensaje');
main('');
```

Las funciones dentro del modulo `fs` también poseen una version asíncrona

```js
const fs = require('fs');

const testFolder = '../testFolder/';
const fileName = 'asyncFile.txt';

const main = async () => {
  try {
    console.log('Inicia');
    // Create
    console.log('Crea');
    const filePath = `${testFolder}${fileName}`;
    await fs.writeFileSync(filePath, 'Curso de Node JS Junior');

    // Read
    console.log('Lee');
    const content = await fs.readFileSync(filePath).toString();
    console.log({ content });

    // Update
    console.log('Actualiza');
    const newContent = '\nData updated by Wizeline Academy';
    await fs.appendFileSync(filePath, newContent);
    const newResponse = await fs.readFileSync(filePath).toString();
    console.log({ newResponse });

    // Delete
    console.log('Borra');
    await fs.unlinkSync(filePath);

    console.log('Finaliza');
  } catch (e) {
    console.log(e.toString());
  }
};

main();
```

## :mag: Para saber más

[Callbacks](https://nodejs.dev/en/learn/javascript-asynchronous-programming-and-callbacks/)

[Entendiendo las promesas de JavaScript](https://nodejs.dev/en/learn/understanding-javascript-promises/)

[Async & Await](https://nodejs.dev/en/learn/modern-asynchronous-javascript-with-async-and-await/)

## :pencil2: Ejercicio

En base al código resultante del ejercicio del modulo 4, realizar las modificaciones necesarias para que las acciones relacionadas con la manipulación de archivos y funciones que requieran ser asíncronas usen los conceptos de Promesas o Async/Await
