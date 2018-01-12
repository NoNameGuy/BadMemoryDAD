<template>
	<div class="gameboard">
        <div>
            <h2 class="text-center">Game {{ game.gameID }}</h2>
            <br>
        </div>
        <div class="game-zone-content">
            <div class="alert" :class="alerttype">
                <strong>{{ message }} &nbsp;&nbsp;&nbsp;&nbsp;<a v-show="game.gameEnded" v-on:click.prevent="closeGame">Close Game</a></strong>
            </div>
						<div>
								<p><button class="btn btn-xs btn-success" v-on:click.prevent="startGame(game)">Start Game</button></p>
						</div>
            <div class="board">
                <div v-for="(piece, index) of game.boardImages" >
                    <img v-bind:src="pieceImageURL(piece)" v-on:click="clickPiece(index)">
                </div>
            </div>
            <hr>
        </div>
    </div>
</template>

<script type="text/javascript">
	export default {
        props: ['game'],
        data: function(){
			return {

            }
        },
        computed: {
            ownPlayerNumber(){
                if (this.game.player1SocketID == this.$parent.socketId) {
                    return 1;
                } else if (this.game.player2SocketID == this.$parent.socketId) {
                    return 2;
                }
                return 0;
            },
            ownPlayerName(){
                var ownNumber = this.ownPlayerNumber;
                if (ownNumber == 1)
                    return this.game.player1;
                if (ownNumber == 2)
                    return this.game.player2;
                return "Unknown";
            },
            adversaryPlayerName(){
                var ownNumber = this.ownPlayerNumber;
                if (ownNumber == 1)
                    return this.game.player2;
                if (ownNumber == 2)
                    return this.game.player1;
                return "Unknown";
            },
            message(){
                if (!this.game.gameStarted) {
                    return "Game has not started yet";
                } else if (this.game.gameEnded) {
                    if (this.game.winner == this.ownPlayerNumber) {
                        return "Game has ended. You Win.";
                    } else if (this.game.winner == 0) {
                        return "Game has ended. There was a tie.";
                    }
                    return "Game has ended and " + this.adversaryPlayerName + " has won. You lost.";
                } else {
                    if (this.game.playerTurn == this.ownPlayerNumber) {
                        return "It's your turn";
                    } else {
                        return "It's " + this.adversaryPlayerName + " turn";
                    }
                }
                return "Game is inconsistent";
            },
            alerttype(){
                if (!this.game.gameStarted) {
                    return "alert-warning";
                } else if (this.game.gameEnded) {
                    if (this.game.winner == this.ownPlayerNumber) {
                        return "alert-success";
                    } else if (this.game.winner == 0) {
                        return "alert-info";
                    }
                    return "alert-danger";
                }
                if (this.game.playerTurn == this.ownPlayerNumber) {
                    return "alert-success";
                } else {
                    return "alert-info";
                }

            }
        },
        methods: {
						startGame(game){
				        this.$socket.emit('start_game', {gameID: game.gameID});
				    },
            pieceImageURL (pieceNumber) {
                var imgSrc = String(pieceNumber);
                return 'img/' + imgSrc + '.png';
            },
            closeGame (){
                this.$parent.close(this.game);
            },
            clickPiece(game, index){
							if (this.game.boardImages[index] == "hidden") {
									this.$parent.play(this.game, index);
							}
							this.$socket.emit('play', {gameID: game.gameID, index: index});

            }
        }
    }
</script>

<style scoped>
.gameboard{
    border-style: solid;
    border-width: 2px 0 0 0;
    border-color: black;
}
</style>
