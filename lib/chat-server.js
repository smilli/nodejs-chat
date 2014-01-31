var socketio = require('socket.io');
var io;

exports.listen = function(server){
  io = socketio.listen(server);
  io.sockets.on('connection', function(socket){
    handleNicknameChoosing(socket);
  });
}

function handleNicknameChoosing(socket){
  socket.on('nickname', function(data, cb){

  });
}