var http = require('http'), 
	express = require('express'),
	socketio = require('socket.io');

var app = express();
http.createServer(app).listen('3000', '127.0.0.1');

app.get('/', function(req, res){
	res.sendfile(__dirname + '/views/index.html');
});