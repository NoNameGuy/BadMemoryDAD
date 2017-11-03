@include('header')

<div class="row">

  <div class="container">

    <div class="col-lg-12">

      <h4>Login</h4>

      <br><br>

      <form>

        <div class="form-group">
          <label for="inputEmail">Email address: </label>
          <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email">
        </div>

        <div class="form-group">
          <label for="inputPassword">Password</label>
          <input type="password" class="form-control" id="inputPassword" placeholder="Password">
        </div>

        <button type="button" class="btn btn-outline-success">Login</button>

      </form>

    </div>

  </div>

</div>

@include('footer')
