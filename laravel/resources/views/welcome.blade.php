@include('header')

<div class="row justify-content-between">

  <!--Div Esquerda-->
  <div class="col-lg-4" style="border:10px solid green;">
    <h4>LOBBY</h4>
  </div>

  <!--Div Direita-->
  <div class="col-lg-8" style="border:10px solid black;">

    <h4>TABULEIRO DE JOGO</h4>

    <br>

    <div class="form-group row">
      <label for="nJogadores" class="col-6 col-form-label"><h5>Nº de Jogadores (1 a 4):</h5></label>
      <div class="col-4">
        <select class="form-control" id="nJogadores">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>
    </div>

    <br>

    <div class="form-group row">
      <label for="nLinhas" class="col-6 col-form-label"><h5>Nº de Linhas (Limite 6): </h5></label>
      <div class="col-4">
        <select class="form-control" id="nLinhas">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </select>
      </div>
    </div>

    <br>

    <div class="form-group row">
      <label for="nColunas" class="col-6 col-form-label"><h5>Nº de Colunas (Limite 6): </h5></label>
      <div class="col-4">
        <select class="form-control" id="nColunas">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </select>
      </div>
    </div>

    <br>

    <button type="button" class="btn btn-outline-success btn-block">Criar Jogo</button>
    <br>
    <br>


  </div>

</div>

@include('footer')
