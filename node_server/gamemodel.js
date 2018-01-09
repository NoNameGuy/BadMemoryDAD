/*jshint esversion: 6 */

class MemoryGame {
    constructor(ID, gameOwnerSocket) {
        this.gameID = ID;
        this.line = 0;
        this.column = 0;
        this.gameEnded = false;
        this.gameStarted = false;
        this.gameOwner= gameOwnerSocket;
        this.playerTurn = 0;
        this.winner = 0;
        this.boardImages;
        this.boardHidden;
        this.numPlayers = 0;
        this.players = [];
        this.playerScore = [];
        this.join(gameOwnerSocket);
        this.piece1x=null;
        this.piece2x=null;
        this.piece1y=null;
        this.piece2y=null;

    }

    join(socketId){ // chamar pelo socket id do user
      for(var i = 0; i < this.players.lenght; i++){
        if (this.players[i] == socketId) { //compara o socket id dos jogadores
          return;
        }
      }
        this.numPlayers ++; //add 1 ao contador de jogadores
        this.players.push(socketId); // push do socket id do novo jogador para o jogo a que se juntou
    }

    checkGameEnded(){
        if (this.hasRow(1)) {
            this.winner = 1;
            this.gameEnded = true;
            return true;
        } else if (this.hasRow(2)) {
            this.winner = 2;
            this.gameEnded = true;
            return true;
        } else if (this.isBoardComplete()) {
            this.winner = 0;
            this.gameEnded = true;
            return true;
        }
        return false;
    }

    isBoardComplete(){
        for (let value of this.board) {
            if (value === 0) {
                return false;
            }
        }
        return true;
    }

    play(playerNumber, index){
        if (!this.gameStarted) {
            return false;
        }
        if (this.gameEnded) {
            return false;
        }
        if (playerNumber != this.playerTurn) {
            return false;
        }
        if (this.board[index] !== 0) {
            return false;
        }
        this.board[index] = playerNumber;
        if (!this.checkGameEnded()) {
            this.playerTurn = this.playerTurn == 1 ? 2 : 1;
        }
        return true;
    }

}

module.exports = TicTacToeGame;
