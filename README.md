# solidity boilerplate

[![JavaScript Style Guide](https://img.shields.io/badge/js%20code%20style-standard-brightgreen.svg)](https://github.com/standard/standard)
[![Solidity Style Guide](https://img.shields.io/badge/solidity%20code%20style-ethlint-brightgreen.svg)](https://github.com/duaraghav8/Ethlint)


A boilerplate project to quickly kickstart your solidity project with best practices.

Included

 * Truffle 5 with optimization enabled
 * Ethlint (Solium) linter with rules
 * Solidity documentation generator via solidity-docgen
 * Standard and prettier to lint JS code
 * Example contract with tests
 * Complete continuous integration setup for Travis / CircleCI / GitLab CI


## Install

`npm install`



## Test

`npm run test`


### Continuous integration

CI will:

 * Start `gananche-cli` node
 * Install package
 * Run linting (`npm run lint`)
 * Run tests (`npm run test`)
 * Before exit it will print the ganache node output (it can be used for debug)



## Lint

Lint both JS and Solidity files:

`npm run lint`


Javascript files only:

`npm run lint:js`


Solidity files only:

`npm run lint:sol`




