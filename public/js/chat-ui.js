$(function(){
	var socket = io.connect();
	$('#choose-nickname').submit(function(e){
		e.preventDefault();
		var nick = $('#nickname').val();
		socket.emit('nickname', nick, function(err){
			
		});
	});
});