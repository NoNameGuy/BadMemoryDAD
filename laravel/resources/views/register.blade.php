@include('header')

<div class="row">

  <div class="container">

    <div class="col-lg-12">

      <h4>Registo</h4>

      <br><br>

      <form>

        <div class="form-group">
          <label for="inputEmail">Nome: </label>
          <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email">
        </div>

        <div class="form-group">
          <label for="inputEmail">Nickname: </label>
          <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email">
        </div>

        <div class="form-group">
          <label for="inputEmail">Email address: </label>
          <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="inputEmail">Confirmar Email: </label>
          <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email">
        </div>

        <div class="form-group">
          <label for="inputPassword">Password:</label>
          <input type="password" class="form-control" id="inputPassword" placeholder="Password">
        </div>
        <div class="form-group">
          <label for="inputPassword">Confirmar Password:</label>
          <input type="password" class="form-control" id="inputPassword" placeholder="Password">
        </div>

        <button type="button" class="btn btn-outline-success">Registar</button>
        <button type="button" class="btn btn-outline-danger">Limpar</button>

        <br><br>

      </form>

    </div>

  </div>

</div>

@include('footer')
