// src/router.js
import Vue from 'vue'
import Router from 'vue-router'
import Login from './pages/Login.vue'
import App from './App.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
        path: '/Home',
        name: 'Home',
        component: App
    }
  ]
})
