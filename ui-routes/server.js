var express = require('express');
var app = express();

var logger = require('morgan');

PORT = process.env.PORT || 8090;

app.use(express.static('public'));
app.use(logger('dev'));


app.get('*', function(req, res) {
  res.sendFile(process.cwd() + '/index.html');
});




app.listen(PORT, function(){
  console.log("listening on port ", PORT);
});
