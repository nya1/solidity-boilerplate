# solidity boilerplate

[![JavaScript Style Guide](https://img.shields.io/badge/js%20code%20style-standard-brightgreen.svg)](https://github.com/standard/standard)
[![Solidity Style Guide](https://img.shields.io/badge/solidity%20code%20style-ethlint-brightgreen.svg)](https://github.com/duaraghav8/Ethlint)
[![Build Status](https://travis-ci.org/nya1/solidity-boilerplate.svg?branch=master)](https://travis-ci.org/nya1/solidity-boilerplate)


A modern boilerplate project to quickly kickstart your solidity project with best practices.

Included

 * Truffle 5 with optimization enabled
 * Ethlint (Solium) linter with rules
 * Standard and prettier to lint JS code
 * Example contract with tests
 * Complete continuous integration setup for Travis / GitLab CI


This is not an obstructive or complex boilerplate, you can remove/add any modules with minimal effort.


TODO:

 * Add solidity documentation generator
 * Add solidity coverage
 * Create truffle box


## Get started

Clone repo and create your project

`git clone https://github.com/nya1/solidity-boilerplate my-project`


## Install

`npm install`


## Truffle

This project includes a fixed truffle version in package.json, this means a deterministic development between developers using the same codebase.

Commands:

`npm run compile` (alias of `truffle compile`)

`npm run build` (alias of `truffle build`)


To run custom truffle commands with the local installed version use `npm run truffle` with `--` delimiter, example:

`npm run truffle -- debug 0x8e5dadfb921ddddfa8f53af1f9bd8beeac6838d52d7e0c2fe5085b42a4f3ca76`

Will be automatically translated to (local truffle):

`truffle debug 0x8e5dadfb921ddddfa8f53af1f9bd8beeac6838d52d7e0c2fe5085b42a4f3ca76`


## Test

`npm run test`


### Continuous integration

CI will:

 * Start `gananche-cli` node
 * Install package
 * Run linting (`npm run lint`)
 * Run tests (`npm run test`)


## Lint

Lint both JS and Solidity files:

`npm run lint`


Javascript files only:

`npm run lint:js`


Solidity files only:

`npm run lint:sol`


## License

MIT

