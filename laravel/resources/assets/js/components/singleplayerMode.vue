<template>
	<div>
        <div>
            <h3 class="text-center">{{ title }}</h3>
            <br>
            <h2>Current Player : {{ currentPlayer }}</h2>
            <br>
        </div>
        <div class="game-zone-content">
            <div class="alert alert-success" v-if="showSuccess">
                <button type="button" class="close-btn" v-on:click="showSuccess=false">&times;</button>
            <strong>{{ successMessage }} &nbsp;&nbsp;&nbsp;&nbsp;<a v-show="gameEnded" v-on:click.prevent="restartGame">Restart</a></strong>
            </div>

            <div class="board">
                <div v-for="(piece, key) of board" >
                    <img v-bind:src="pieceImageURL(piece)" v-on:click="clickPiece(key)">
                </div>
            </div>
            <hr>
        </div>
    </div>
</template>

<script type="text/javascript">
	export default {
        data: function(){
			return {
                title: 'Memory Game',
                showSuccess: false,
                showFailure: false,
                successMessage: '',
                failMessage: '',
                currentValue: 1,
                gameEnded:false,
                player1User: undefined,
                board: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
								numeroJogada: 0,
								arrayJogadas: [],
								arrayPosicoes: [],
								pontuacao: 0,
								boardImagens: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            }
        },
				created() {
					// populate array
					var array = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
					// shuffle do array array
					var i = 0;
					var j = 0;
					var temp = null;

					for (i = array.length - 1; i > 0; i--) {
							j = Math.floor(Math.random() * (i + 1));
							temp = array[i];
							array[i] = array[j];
							array[j] = temp;
					}
					// console.log("created        " + array);

					for (var i = 0; i < array.length; i++) {
						this.boardImagens[i] = array[i];
					}
					// console.log("created  imagens      " + this.boardImagens);


				},
        methods: {

            clickPiece: function(index) {
							// console.log("created  clickepiece      " + this.boardImagens);

							this.numeroJogada++;
							if (this.numeroJogada == 1) {
								this.arrayJogadas.push(this.board[index]);
								this.arrayPosicoes.push(index);
								this.board[index] = this.boardImagens[index];
								console.log("Jogada 1");
            	}
            	if (this.numeroJogada == 2) {
            		this.arrayJogadas.push(this.board[index]);
								this.arrayPosicoes.push(index);
								this.board[index] = this.boardImagens[index];
								console.log("Jogada 2");
/*
								if (this.arrayJogadas[0] == this.arrayJogadas[1]){ // comparar no vetor boardImagens com as posições do arrayJogadas
									// bloqueio das posições selecionadas
									// pontuação ++;
									this.pontuacao = this.pontuacao+10;
									// same player playing
									console.log("imagens iguais");
								} else { // quer dizer que são diferentes
									// volta-se a virar as cartas para imagem limpa
									for (var i = 0; i < 2; i++) {
										this.board[this.arrayPosicoes[i]] = 0;
									}
									console.log("imagens diferentes dpoeis do ciclor for");
									// jogador++;
								}
*/
							}


							if (1==2){
                if(this.board[index] || this.gameEnded) return;
                this.board[index] = this.currentValue;
                this.successMessage = this.currentPlayer+' has Played';
                this.showSuccess = true;
                this.currentValue = 1;
                this.checkGameEnded();
							}
            },

						pieceImageURL: function (piece) {
                var imgSrc = String(piece);
								console.log(imgSrc);
                return 'img/' + imgSrc + '.png';
            },

            restartGame:function(){
                console.log('restartGame');
                this.board= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                this.showSuccess= false;
                this.showFailure= false;
                this.successMessage= '';
                this.failMessage= '';
                this.currentValue= 1;
                this.gameEnded= false;
            },
            // ----------------------------------------------------------------------------------------
            // GAME LOGIC - START
            // ----------------------------------------------------------------------------------------
            hasRow: function(value){
                return  ((this.board[0]==value) && (this.board[1]==value) && (this.board[2]==value)) ||
                ((this.board[3]==value) && (this.board[4]==value) && (this.board[5]==value)) ||
                ((this.board[6]==value) && (this.board[7]==value) && (this.board[8]==value)) ||
                ((this.board[0]==value) && (this.board[3]==value) && (this.board[6]==value)) ||
                ((this.board[1]==value) && (this.board[4]==value) && (this.board[7]==value)) ||
                ((this.board[2]==value) && (this.board[5]==value) && (this.board[8]==value)) ||
                ((this.board[0]==value) && (this.board[4]==value) && (this.board[8]==value)) ||
                ((this.board[2]==value) && (this.board[4]==value) && (this.board[6]==value));
            },
            checkGameEnded: function(){
                if (this.isBoardComplete()) {
                    this.successMessage = this.playerName(1) + ', you win!';
                    this.showSuccess = true;
                    this.gameEnded = true;
                }
                return false;
            },
            isBoardComplete:function(){
                var returnValue = true;
                this.board.forEach(function(element) {
                    if (element === 0) {
                        returnValue = false;
                        return;
                    }
                });
                return returnValue;
            },

						playerName: function(playerNumber){
                if(this.player1User != undefined && playerNumber == 1){
                    return this.player1User.name;
                }
                if(this.player2User != undefined && playerNumber == 2){
                    return this.player2User.name;
                }
                return 'Player '+playerNumber;
            }

					},
            // ----------------------------------------------------------------------------------------
            // GAME LOGIC - END
            // ----------------------------------------------------------------------------------------
				computed:{
						currentPlayer: function(){
                return this.playerName(this.currentValue);
            }
        },
        mounted(){
            if(this.$root.$data.player1){
                this.player1User = this.$root.$data.player1;
            }
        }
    }
</script>

<style>

</style>
