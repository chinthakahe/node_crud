const bodyParser    = require('body-parser');
const express       = require('express');

const app = express();

let port = 1234;

app.listen(port, () => {
    console.log('server is up and running on port: '+port);
});