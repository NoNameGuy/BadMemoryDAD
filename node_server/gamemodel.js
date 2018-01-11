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
        this.array = [];
    }

    startGame(){
      switch(this.numPlayers) {
        case 1:
        case 2:
          this.line = 4;
          this.column = 4;
          gameStarted = true;
          this.array = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7];
          populateMainBoard();
          populateInvisibleBoard();
          break;
        case 3:
          this.line = 4;
          this.column = 6;
          gameStarted = true;
          this.array = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11];
          populateMainBoard();
          populateInvisibleBoard();
          break;
        case 4:
          this.line = 6;
          this.column = 6;
          gameStarted = true;
          this.array = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,
                        12,12,13,13,14,14,15,15,16,16,17,17];
          populateMainBoard();
          populateInvisibleBoard();
          break;
      }
      zerarPontuacoes();
      this.winner = 0;
      this.gameEnded = false;
    }

    zerarPontuacoes() {
      for ( var i = 0; i < this.playerScore.lenght; i++ ) {
        this.playerScore[i] = 0;
      }
    }

    populateMainBoard() {
      for(var i = 0; i < this.line; i++) {
        for(var j = 0; j < this.column; j++) {
          this.boardImages[i][j] = "hidden";
        }
      }
    }

    populateInvisibleBoard() {
      shuffleArray();
      console.log(array);

      for (var i = 0; i < array.length; i++) {
        this.boardImagens[i] = this.array[i];
      }
      console.log(this.boardHidden);

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

      //jogo ja começou

      //jogo ainda nao acabou

      //Estado da quadricula ? hidden ? Jogada valida

      //player turn = 1 entao 1ª jogada do jogador e tem de virar a 2ª peça
          // SE o player turn =1 vira 1ª carta e playerturn ++

      // se playerTurn = 2 vira se a 2ª carta

      // obter o "nome" das 2 cartas e comprar

      // se for par (as duas o mesmo nome) entao pontuaçao++, cartas escolhidas visiveis sempre, e o plyer tem novo playerTurn

      //se nao passa a jogada pro proximo jogador.
      // cartas hidden (mesmo as que foram escolhidas) player playerTurn=1

      //return true



    }

    shuffleArray(){
            // shuffle do array array
      var i = 0;
      var j = 0;
      var temp = null;

      for (i = this.array.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          temp = this.array[i];
          this.array[i] = this.array[j];
          this.array[j] = temp;
      }
      return this.array;

    }

}

module.exports = MemoryGame;
