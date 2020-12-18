# Words Filter

## Install

```bash
yarn add @dragon-fish/words-filter
```

## Quick try

```bash
yarn test This is bad words.
```

## Usage

```js
const Filter = require('./index')
var filter = Filter({
  list: [
    'bad\\s*words?',
    // Bad words list with RegExp
  ],
  cleanWith: '*', // Replace bad words with
})

var goodWorlds = 'This is good words.'
var badWords = 'This is bad words.'

console.log(filter.isBad(goodWorlds), filter.isBad(badWords)) // false, true
console.log(filter.clean(badWords)) // This is *********.
```