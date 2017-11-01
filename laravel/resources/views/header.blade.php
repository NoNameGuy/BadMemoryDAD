<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <title>MemoryGame</title>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
        <link rel="stylesheet" href="{{ URL::asset('css/style.css') }}">

    </head>
    <body>
    <div>
      <nav class="navbar static-top navbar-dark bg-dark">
        <a class="navbar-brand" href="#">BadMemoryGame</a>
        <form class="form-inline my-2 my-lg-0">
          <li>
            <button class="btn btn-outline-success" type="submit">Login</button>
            <button class="btn btn-outline-success" type="submit">Registar</button>
          </li>
        </form>
      </nav>
    </div>
