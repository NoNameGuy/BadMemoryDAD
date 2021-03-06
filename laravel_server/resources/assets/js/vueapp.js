/*jshint esversion: 6 */

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import VueSocketio from 'vue-socket.io';

Vue.use(VueRouter);

//Vue.use(VueSocketio, 'http://192.168.10.10:8080');
Vue.use(VueSocketio, 'http://192.168.10.10:8080');

const user = Vue.component('user', require('./components/user.vue'));
const login = Vue.component('login', require('./components/login.vue'));
const logout = Vue.component('logout', require('./components/logout.vue'));
const register = Vue.component('register', require('./components/register.vue'));
const singleplayer_game = Vue.component('singlegame', require('./components/singleplayer_tictactoe.vue'));
const multiplayerGame = Vue.component('multiplayergame', require('./components/multiplayer_tictactoe.vue'));

const routes = [
  { path: '/', redirect: '/users' },
  { path: '/users', component: user },
  { path: '/login', component: login },

  { path: '/logout', component: logout },

  { path: '/register', component: register },
  { path: '/singletictactoe', component: singleplayer_game },
  { path: '/multitictactoe', component: multiplayerGame }
];

const router = new VueRouter({
  routes:routes
});

const app = new Vue({
  router,
  data:{
  }
}).$mount('#app');
