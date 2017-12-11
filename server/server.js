const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const ctrl = require('./controller');

app.use(bodyParser.json());

app.use(cors());
console.log('hi')
app.post('/api/watchlist', ctrl.create)
app.get('/api/getlist', ctrl.read)
app.put('/api/watchlist/:id', ctrl.update)
app.delete('/api/watchlist/:id', ctrl.delete)
app.delete('/api/watchlist', ctrl.clear)
// app.delete('/api/watchlistclear', ctrl.clear)

const PORT = 3005;
app.listen(PORT, () => console.log('we are listening on port ' + PORT));

// app.use(express.static( __d  irname + '/../public/build'))

