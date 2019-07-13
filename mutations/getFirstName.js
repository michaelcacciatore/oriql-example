const { String } = require('oriql/types');
const user = require('./../sources/user');
module.exports = {
  name: 'getFirstName',
  description: 'This gets the users first name based on their id',
  args: {
    id: String,
  },
  schema: {
    firstName: {
      type: String,
      source: user,
      schema: {
        employee_name: String,
      }
    }
  },
};
