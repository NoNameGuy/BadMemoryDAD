<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <title>MemoryGame</title>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">

        <link href="{!! asset('css/style.css') !!}" media="all" rel="stylesheet" type="text/css" />

    </head>
    <body>
    <div>
      <nav class="navbar static-top navbar-dark bg-dark">
        <a class="navbar-brand" href="#">BadMemoryGame</a>
        <form class="form-inline my-2 my-lg-0">
          <li>
            <button class="btn btn-outline-success" type="submit" href="{{route('login')}}">Login</button>
            <button class="btn btn-outline-success" type="submit" href="{{route('register')}}">Registar</button>
          </li>
        </form>
      </nav>

      <nav class="navbar static-top navbar-light" style="background-color: grey;">
        <a class="navbar-brand">Criar Novo Jogo</a>

            <div class="form-group row">
                <label for="nJogadores"><p>Jogadores:</p></label>
                <div class="col">
                  <select class="form-control" id="nJogadores">
                    <option>1</option>
                  </select>
                </div>

                <label for="nLinhas"><p>Linhas: </p></label>
                <div class="col">
                  <select class="form-control" id="nLinhas">
                    <option>1</option>
                  </select>
                </div>

                <label for="nColunas"><p>Colunas: </p></label>
                <div class="col">
                  <select class="form-control" id="nColunas">
                    <option>1</option>
                  </select>
                </div>
            </div>

          <button type="button" class="btn btn-success">Criar Jogo</button>

      </nav>
    </div>
