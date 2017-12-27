@extends('master')

@section('title', 'Vue.js App')

@section('content')
    <router-link to="/users">Users</router-link> -
    <router-link to="/departments">Departments</router-link> -
    <router-link to="/singleplayerMode">SinglePlayer Memory Game</router-link> -
    <router-link to="/multiplayerMode">Multiplayer Memory Game</router-link>

    <router-view></router-view>
@endsection

@section('pagescript')
<script src="js/vueapp.js"></script>

<!-- <script src="/js/manifest.js"></script>
<script src="/js/vendor.js"></script>
<script src="/js/vueapp.js"></script>
 -->
 @stop
