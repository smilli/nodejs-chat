var http = require('http'), 
	express = require('express'),
	chatServer = require('./lib/chat-server.js');

var app = express();
var server = http.createServer(app).listen('3000', '127.0.0.1');

app.use(app.router);
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
	res.sendfile(__dirname + '/views/index.html');
});

chatServer.listen(server);