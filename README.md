# aws-lambda-pify [![Build Status](https://travis-ci.org/SamVerschueren/aws-lambda-pify.svg?branch=master)](https://travis-ci.org/SamVerschueren/aws-lambda-pify)

> Promisify an AWS lambda function


## Install

```
$ npm install --save aws-lambda-pify
```


## Usage

```js
const pify = require('aws-lambda-pify');
const index = require('./');

const fn = pify(index.handler);

fn({foo: 'bar'}).then(() => {
    //=> success
});
```


## API

### pify(input)

Returns a promise wrapped version of the supplied Lambda function.

#### input

Type: `function`

The AWS Lambda function.


## License

MIT © [Sam Verschueren](http://github.com/SamVerschueren)
