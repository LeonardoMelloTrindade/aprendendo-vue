<template>
  <main id="app">
  <HomePokemon></HomePokemon>
   <router-view></router-view>
  </main>
</template>

<script>
import HomePokemon from './pages/Home.vue'

export default {
  name: 'App',
  components: {
    HomePokemon
  }
}
</script>
