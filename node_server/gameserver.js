/*jshint esversion: 6 */

var app = require('http').createServer();

// CORS TRIALS
// var app = require('http').createServer(function(req,res){
// 	// Set CORS headers
// 	res.setHeader('Access-Control-Allow-Origin', 'http://dad.p6.dev');
// 	res.setHeader('Access-Control-Request-Method', '*');
// 	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
// 	res.setHeader('Access-Control-Allow-Credentials', true);
// 	res.setHeader('Access-Control-Allow-Headers', req.header.origin);
// 	if ( req.method === 'OPTIONS' ) {
// 		res.writeHead(200);
// 		res.end();
// 		return;
// 	}
// });

var io = require('socket.io')(app);

var MemoryGame = require('./gamemodel.js');
var GameList = require('./gamelist.js');

app.listen(8080, function(){
	console.log('listening on *:8080');
});

// ------------------------
// Estrutura dados - server
// ------------------------

let games = new GameList();

io.on('connection', function (socket) {
    console.log('client has connected');

    socket.on('create_game', function (data){
    	let game = games.createGame(socket.id);
		socket.join(game.gameID);
        console.log('game was created');
		// Notifications to the client
		socket.emit('my_active_games_changed');
		io.emit('lobby_changed');
    });


    socket.on('join_game', function (data){
    	let game = games.joinGame(data.gameID, socket.id);
		socket.join(game.gameID);
        console.log('client joined game');
		io.to(game.gameID).emit('my_active_games_changed');
		io.emit('lobby_changed');
    });

    socket.on('start_game', function (data){
        let game = games.startGame(data.gameID, socket.id);
        console.log('game started');
        io.to(game.gameID).emit('my_active_games_changed');
    });

    socket.on('remove_game', function (data){
    	let game = games.removeGame(data.gameID, socket.id);
    	socket.emit('my_active_games_changed');
    });

    socket.on('play', function (data){
		let game = games.gameByID(data.gameID);
		if (game === null) {
			socket.emit('invalid_play', {'type': 'Invalid_Game', 'game': null});
			return;
		}
		var playerNumber = 0;
/*
		if(game.player1SocketID == socket.id){
				playerNumber = 1;
		}else if(game.player2SocketID == socket.id){
				playerNumber = 2;
		}

		if(game.play(playerNumber, data.index)){
				io.to(game.gameID).emit('game_change', game);
		}
*/
});


    socket.on('get_game', function (data){
		let game = games.gameByID(data.gameID);
		socket.emit('game_changed', game);
    });

    socket.on('get_my_activegames', function (data){
    	var my_games= games.getConnectedGamesOf(socket.id);
    	socket.emit('my_active_games', my_games);
    });

    socket.on('get_my_lobby_games', function (data){
    	var my_games= games.getLobbyGamesOf(socket.id);
    	socket.emit('my_lobby_games', my_games);
    });

});
