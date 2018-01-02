/*jshint esversion: 6 */

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

const user = Vue.component('user', require('./components/user.vue'));
const department = Vue.component('department', require('./components/departmentList.vue'));

const singleplayerMode = Vue.component('singleplayerMode', require('./components/singleplayerMode.vue'));
//const multiplayerMode = Vue.component('multiplayerMode', require('./components/multiplayerMode.vue'));

const routes = [
  { path: '/', redirect: '/users' },
  { path: '/users', component: user },
  { path: '/departments', component: department },

  { path: '/singleplayerMode', component: singleplayerMode },
  //{ path: '/multiplayerMode', component: multiplayerMode }

];

const router = new VueRouter({
  routes:routes
});

const app = new Vue({
  router,
  data:{
    player1:undefined,
    player2: undefined,
    departments: [],
  }
}).$mount('#app');
