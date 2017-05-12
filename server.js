var express = require('express');
var path = require('path');
var app = new (express)();

app.use(express.static(path.join(__dirname, '/dist')));
app.use(express.static(path.join(__dirname, '/dist/static')));

app.listen(8000,function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Server is listening on port %s. Open up http://localhost:%s/ in your browser.", 8000, 8000)
  }
});

