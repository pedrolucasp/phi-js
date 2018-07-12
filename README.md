# PhiJS Φ

> PhiJS - The Figma API Javascript Wrapper

## Installation

`$ npm i --save phi-js` 

or

`$ yarn add phi-js`

## Dependencies

This library depends on [fetch](https://fetch.spec.whatwg.org/) to make requests to the Figma API. For environments that don't support fetch, you'll need to provide a [polyfill](https://github.com/github/fetch).

## Usage

### Creating an instance

To create a single PhiJS instance, you'll need to an object with your `key` and `secret`. 

```js
// Import syntax
import PhiJS from 'phi-js'

// Using require syntax
const PhiJS = require('phi-js');

const phi = PhiJS(YOUR_ACCESS_TOKEN);

```

That's it! Now you can play with your Figma Documents.

## API



### File (:key)

__TODO__: Improve file doc.

Returns the document refered to as a JSON object. 
The file key can be parsed from any Figma file url: https://www.figma.com/file/:key/


```javascript

phi.file(FILE_URL)
  .then(json => {
    // Your code
  });

```

### Team Projects ()

__TODO__: Improve team projects doc

### Project files ()

__TODO__: Improve project files doc

## License

MIT License, for more info check LICENSE file.