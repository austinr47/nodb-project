const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const ctrl = require('./controller');

app.use(bodyParser.json());

app.use(cors());

app.get('/api/test', ctrl.test)

const PORT = 3000;
app.listen(PORT, () => console.log('we are listening on port ' + PORT));
