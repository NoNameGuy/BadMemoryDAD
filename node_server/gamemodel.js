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
        this.pontuacao = 0;
        this.winnerMessage = '';
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
        //1 Board complete ??

        if (this.isBoardComplete()) {
          //
          // for(let i=0; i<this.numPlayers; i++){
          //   this.playerScore[i] = 0; //inicializa a pontuaçao do player a 0
          //   this.calculateScore(i); //calcula o score do player
          // }


          // buscar o player com maior pontuação
          for(let a = 0; a < this.players.lenght; a++) {
            if (this.playerScore[a] > this.pontuacao) {
              this.pontuacao = this.playerScore[a];
              this.winner = a;
            }
          }

          // mostrá-lo
          console.log('player' + this.players[this.winner]);
          console.log('position ' + this.winner);
          console.log('pontuacao: ' + this.pontuacao);
          this.winnerMessage = this.players[this.winner] + ' won the game with ' + this.pontuacao + ' pontos.';
          console.log('winnerMessage: ' + this.winnerMessage);

          this.gameEnded = true;

          return true;
        }


        //ou se empataram

        //se nao estiver complete return false
        return false;
    }

    isBoardComplete(){

        for(let x=0; x<this.line; x++){
            for(let y=0; y<this.column; y++){
                if (this.boardHidden[x][y] == "hidden") { //se houver alguma img hidden em x e/ou y entao a board nao esta completa logo nao acabou o Jogo
                    return false;
                }
            }
        }
        return true;
    }

    calculatePlayerScore(player){

        //calcula o score com base na posiçao x e y que carregou
      for(let x=0; x<this.line; x++){
        for(let y=0; y<this.column; y++){
          if (this.boardImages[x][y] == player){
            this.playerScore[player]++;
          }

        }
      }

    }

    play(playerNumber, index){

    }

    shuffleArray(array){
        let arraySize = array.length;
        while(arraySize > 0){
            let index = Math.floor(Math.random()* arraySize);
            arraySize --;
            let temp = array[arraySize];
            array[arraySize] = array[index];
            array[index] = temp;
        }
        return array;

    }

}

module.exports = MemoryGame;
