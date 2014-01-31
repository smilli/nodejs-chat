var socketio = require('socket.io');
var io;

exports.listen = function(server){
  io = socketio.listen(server);
}