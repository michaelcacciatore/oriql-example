const axios = require('axios');
const schema = require('../schema/user');

module.exports = {
  name: 'users',
  resolver: async () => {
    const endpoint = 'http://dummy.restapiexample.com/api/v1/employees'
    const response = await axios.get(endpoint);
    return response.data;
  },
  schema: [schema]
};