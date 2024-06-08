// src/router.js
import Vue from 'vue'
import Router from 'vue-router'
import GenerationScreen from './pages/GenerationScreen.vue'
import HomePokemon from './pages/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePokemon',
      component: HomePokemon

    },
    {
      path: '/generation',
      name: 'GenerationScreen',
      component: GenerationScreen
    }
  ]
})
