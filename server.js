'use strict'

const express = require('express')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0'

// App
const app = express();
app.get('/', (req, res) => {
  res.contentType('text/plain')
  res.send('Hello World! ' + new Date().toISOString())
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`)
