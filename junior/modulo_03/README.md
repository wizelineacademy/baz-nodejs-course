# :bulb: Modulo 3: Node Shell y gestores de paquetes

## :book: Objetivo

- Explorar la linea de comandos de Node
- Definir que es un gestor de paquetes e identificar las opciones existentes

## :clipboard: Material

Consultar en la presentación, las diapositivas 23 a la 27

## :books: Temas

### I. Node Shell

Para ejecutar código javascript en linea, use el siguiente comando para acceder al Node Shell

```bash
node
```

Se puede ejecutar código de un archivo `.js` usando el siguiente comando

```bash
node nombreDeMiArchivo.js
```

### II. Gestores de paquetes

- [Documentación oficial de NPM](https://docs.npmjs.com/)
- [Documentación oficial de YARN](https://yarnpkg.com/getting-started)

Ejemplo de uso de un paquete

```js
const { faker } = require('@faker-js/faker');

const users = [];
for (let i = 0; i < 10; i += 1) {
  users.push({
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    registeredAt: faker.date.past(),
  });
}

console.log(users);
```

## :mag: Para saber más

[Como leer variables de entorno](https://nodejs.dev/en/learn/how-to-read-environment-variables-from-nodejs/)

[Como usar NodeJS REPL](https://nodejs.dev/en/learn/how-to-use-the-nodejs-repl/)

[Como leer argumentos enviados por la linea de comandos](https://nodejs.dev/en/learn/nodejs-accept-arguments-from-the-command-line/)

[Introducción al gestor de paquetes](https://nodejs.dev/en/learn/an-introduction-to-the-npm-package-manager/)

[Como instalar paquetes](https://nodejs.dev/en/learn/how-to-use-or-execute-a-package-installed-using-npm/)

[Guía del package.json](https://nodejs.dev/en/learn/the-package-json-guide/)

[Guía del package-lock.json](https://nodejs.dev/en/learn/the-package-lock-json-file/)

[Dependencias y dependencias de desarrollo](https://nodejs.dev/en/learn/npm-dependencies-and-devdependencies/)
