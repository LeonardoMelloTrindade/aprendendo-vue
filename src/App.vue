<template>
  <main id="app">
    <section id="view-pokemon"  v-if="pokemons.length !== 0">
    <Info 
    v-for="pokemon in pokemons" 
    :name="pokemon.namePokemon" 
    :pokedex="pokemon.pokedexId" 
    :key="pokemon.id" 
    v-show="pokemon.namePokemon !== 'Pikachu'"
    />
    
   </section>
   <section v-else class="warning-pokemon">
      <h1>Pokemons indisponíveis</h1>
   </section>
  </main>
   
</template>

<script>
import Info from './components/cardPokemon/Info.vue'

export default {
  name: 'App',
  components: {
    Info    
  },
  data() {
    return {
      pokemons: 
      [
        {
          namePokemon: "Articuno",
          pokedexId: '144'
        },
        {
          namePokemon: "New",
          pokedexId: '151'
        },
        {
          namePokemon: "Growlithe",
          pokedexId: '58'
        },
        {
          namePokemon: "Bulbasaur",
          pokedexId: '1'
        }, 
        {
          namePokemon: 'Pikachu',
          pokedexId: '25'
        }
    ],

    }
  }
  
}
</script>

<style>

html {
  background-color: black;
  border: 20px double grey;
  height: 95.8%;
}

#view-pokemon{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
}

#warning-pokemon {
  display: flex;
  justify-content: center;
  border: 5px groove rgb(233, 233, 127);
}

h1 {
  text-align: center;
  color: aliceblue;
}
</style>
