<template>
  <div>
      <div>
          <h3 class="text-center">{{ title }}</h3>
          </div> <!--<br>
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
      </div> -->
  </div>



</template type="text/javascript">


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
            player2User: undefined,
            board: [0,0,0,0,0,0,0,0,0]
        }
    }



<script>



</script>



<style>



</style>
