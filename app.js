var express = require('express');
var http = require('http');
var app = express();

var WWW="www"

app.use(express.static(__dirname + '/'+WWW));

app.set('port', 5000);
app.get('/', function(req, res) {
	res.sendfile(__dirname + '/'+WWW+'/index.html');
});

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
