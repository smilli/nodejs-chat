$(function(){
	var socket = io.connect();
	$('#choose-nickname').submit(function(e){
		e.preventDefault();
		var nick = $('#nickname').val();
		socket.emit('nickname', nick, function(err){
			if (!err) {
				$('#nickname-container').hide();
				$('#chat-container').show();
			}
			$('#nick-error').html(err);
		});
	});

	socket.on('new nicknames', function(data){
		var text = '';
		for (var i = 0; i < data.length; i++){
			text += '<span class="user">' + data[i] + '</span>';
		}
		$('#users').html(text);
	});
});