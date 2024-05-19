<template>
  <div id="app">
    <Info name="Articuno" pokedex="144"/>
    <Info name="Mew" pokedex="151" />
    <Info name="Growlithe" pokedex="58" />

  </div>
</template>

<script>
import Info from './components/cardPokemon/Info.vue'

export default {
  name: 'App',
  components: {
    Info    
  }
  
}
</script>

<style>
#app {
  background-color: brown;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
}

html {
  background-color: black;
  border: 20px double grey;
  height: 95.8%;
}
</style>
