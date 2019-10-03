const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('./api/routes/bitcoreRoutes.js')(app);

// port mapping
const port = process.env.NODE_ENV === 'dev' ? 3333 : 3000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
