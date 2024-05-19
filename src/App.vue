<template>
  <div id="app">
    <PokemonView />
    <TeamData/>
  </div>
</template>

<script>
import PokemonView from './components/PokemonView.vue'
import TeamData from './components/TeamData.vue'


export default {
  name: 'App',
  components: {
    PokemonView,
    TeamData
  }
  
}
</script>

<style>
#app {
  background-color: brown;
  display: flex;
  flex-direction: row;
  padding: 10px;
}

html {
  background-color: black;
  border: 20px double grey;
  height: 95.8%;
}
</style>
