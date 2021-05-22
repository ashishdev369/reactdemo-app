### Prerequisites

* Node.js v8 or above

You can check your node version using the command:

```CLI
node --version
```

### Installing

Install dependencies and start using [yarn](https://yarnpkg.com):

```CLI
yarn install
yarn start
```

Or via [npm](https://www.npmjs.com/):

```CLI
npm install
npm start
```

### Testing

You can run your tests using:

```CLI
yarn test
```

It´s possible to generate the code coverage of your code. Jest will generate a HTML file with all information from your tests. To do this run the command:

```CLI
yarn test:coverage
```

### Production build

You can generate an optimized distribution bundle. To do this run the command:

```CLI
yarn build
```

It´s possible to check the size and content of your bundled file. To do this run the command:

```CLI
yarn analyze
```

That´s it! Remember to change the project information in package.json, README and LICENSE if necessary. :mortar_board:

Give the project a star if you liked it. Happy Hacking! :sunglasses: :star:

## Built With

* [webpack](https://webpack.js.org/) - Static module bundler
* [React](https://babeljs.io/) - JavaScript library for building user interfaces
* [Babel](https://babeljs.io/) - EcmaScript Transpiler
* [Yarn](https://yarnpkg.com) - Dependency Management
* [Jest](https://jestjs.io/) - JavaScript Testing
* [Enzyme](https://airbnb.io/enzyme/docs/api/) - Component tests for React

