const axios = require('axios');
const schema = require('../schema/user');
const { String } = require('oriql/types');

module.exports = {
  name: 'user',
  args: {
    id: String,
  },
  resolver: async (_, { id }) => {
    const endpoint = 'http://dummy.restapiexample.com/api/v1/employee/{id}'.replace('{id}', id);
    const response = await axios.get(endpoint);
    return response.data;
  },
  schema,
};