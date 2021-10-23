
const path = require('path');
const express = require('express');
const app = express();


app.use(express.static(__dirname + '/dist/ProyectoF'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/ProyectoF/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || 5000);