/*jshint esversion: 6 */

var MemoryGame = require('./gamemodel.js');

class GameList {
	constructor() {
        this.contadorID = 0;
        this.games = new Map();
    }

    gameByID(gameID) {
    	let game = this.games.get(gameID);
    	return game;
    }

    createGame(socketID) {
    	this.contadorID = this.contadorID+1;
    	var game = new MemoryGame(this.contadorID, socketID);
			
    	this.games.set(game.gameID, game);
    	return game;
    }

    joinGame(gameID, socketID) {
    	let game = this.gameByID(gameID);
    	if (game===null) {
    		return null;
    	}

        game.join(socketID);
    	//game.player2SocketID = socketID;
    	return game;
    }

    startGame(gameID, socketID) {

        let game = this.gameByID(gameID);
        if (game===null) {
            return null;
        }

        game.startGame();
        //game.player2SocketID = socketID;
        return game;
    }


    removeGame(gameID, socketID) {
    	let game = this.gameByID(gameID);
    	if (game===null) {
    		return null;
    	}
    	if (game.player1SocketID == socketID) {
    		game.player1SocketID = "";
    	} else if (game.player2SocketID == socketID) {
    		game.player2SocketID = "";
    	}
    	if ((game.player1SocketID === "") && (game.player2SocketID === "")) {
    		this.games.delete(gameID);
    	}
    	return game;
    }

    getConnectedGamesOf(socketID) {
    	let games = [];
    	for (var [key, value] of this.games) {
            for(let i=0; i<value.players.length; i++){
                if ((value.players[i] === socketID)) {
                    games.push(value);
                }
            }

        }
        return games;
    }

    getLobbyGamesOf(socketID) {
        let games = [];
        for (var [key, value] of this.games) {
          if ((!value.gameStarted) && (!value.gameEnded))  {
            for(let i=0; i<value.players.length; i++){
                if ((value.players[i] !== socketID)) {
                    games.push(value);
                }
            }
        }
    }
    return games;
}
}

module.exports = GameList;
