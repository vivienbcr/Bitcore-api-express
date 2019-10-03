const bitcoreController = require('../controllers/bitcoreController');

module.exports = (app) => {
  app.route('/getblockchaininfo').get(bitcoreController.getBlockchainInfo);
};
