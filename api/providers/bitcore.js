const axios = require('axios');

const url = 'http://alice:alice@localhost:8332'; // http://${user}:${password}@${url}:${port}
const headers = {
  'Content-Type': 'application/json',
};

exports.getBlockchainInfo = async () => new Promise((resolve, reject) => {
  try {
    const body = {
      jsonrpc: '1.0', // JSON-RPC API version.
      method: 'getblockchaininfo', // RPC bitcore method.
    };
    axios
      .post(url, body, headers)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(new Error(err));
      });
  } catch (err) {
    reject(new Error(err));
  }
});
