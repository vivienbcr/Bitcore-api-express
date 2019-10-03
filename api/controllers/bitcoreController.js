const bitcore = require('../providers/bitcore');

exports.getBlockchainInfo = async (req, res) => {
  try {
    await bitcore.getBlockchainInfo()
      .then((response) => {
        console.log('res ct ', response);
        res.status(200).json(response);
      }).catch((err) => {
        console.log('bitcoreController.getBlockchainInfo : bitcore.getBlockchainInfo : ', err);
        res.status(500).send(err);
      });
  } catch (err) {
    console.log('bitcoreController.getBlockchainInfo :', err);
    res.status(500).send(err);
  }
};
