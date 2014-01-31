var socketio = require('socket.io');
var io;
var namesUsed = [];
// map socket.id to nicknames
var nicknames = {};

exports.listen = function(server){
  io = socketio.listen(server);
  io.sockets.on('connection', function(socket){
    handleNicknameChoosing(socket);
  });
}

function handleNicknameChoosing(socket){
  socket.on('nickname', function(nick, cb){
    if (namesUsed.indexOf(nick) !== -1){
      cb('That name is already chosen');
      return;
    }
    namesUsed.push(nick);
    nicknames[socket.id] = nick;
    cb(null);
    io.sockets.emit('new nicknames', namesUsed);
  });
}