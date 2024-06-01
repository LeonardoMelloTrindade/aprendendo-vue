// src/router.js
import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import GenerationScreen from './pages/GenerationScreen.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/generation',
      name: 'GenerationScreen',
      component: GenerationScreen
    }
  ]
})
