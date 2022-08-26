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
