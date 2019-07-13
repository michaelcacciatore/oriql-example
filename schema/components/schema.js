const { String } = require('oriql/types');
const { getFirstName } = require('./../../mutations/getFirstName');
module.exports = {
  name: 'MyComponent',
  description: 'This is a my second component',
  schema: {
    foo: String,
    michael: String,
    bar: {
      brielle: String,
    },
  }
};