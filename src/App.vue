<template>
  <main id="app">
    <HeaderTitle/>
    <!--
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
   -->
   <section id="view-pokemon" v-show="changevisiblityPokemons.show">
    <Info
    v-for="pokemon in pokemons" 
    :name="pokemon.namePokemon" 
    :pokedex="pokemon.pokedexId" 
    :key="pokemon.id" 
    v-show="pokemon.namePokemon !== 'Pikachu'"
    />
   </section>
   <section v-show="changevisiblityPokemons.hide">
      <h1 id="pokemons-off">Pokemons indisponíveis</h1>
   </section>
   
   <section v-show="pokemons.length > 0" id="box-btn-visibility">
    <VisibilityPokemon 
    @handlerVisibility="variableChangedVisibility"
    />
   </section>
   <router-view></router-view>
  </main>
</template>

<script>
import HeaderTitle from './components/Header.vue';
import Info from './components/cardPokemon/Info.vue';
import VisibilityPokemon from './components/VisibilityPokemon.vue';

export default {
  name: 'App',
  components: {
    Info,
    HeaderTitle,
    VisibilityPokemon
  },
  data() {
    return {
      pokemons: [
        {
          namePokemon: "Articuno",
          pokedexId: '144'
        },
        {
          namePokemon: "Mew",
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
      changevisiblityPokemons: {
        hide: Boolean,
        show: Boolean
      }

    }
  },
  methods: {
    initializeVisibilityPokemons() {
      this.changevisiblityPokemons.show = true;
      this.changevisiblityPokemons.hide = false;
    },
    variableChangedVisibility(visibility) {
      console.log(visibility)
      this.changevisiblityPokemons.show = visibility.showPokemon;
      this.changevisiblityPokemons.hide = visibility.hidePokemon;
    }
  }, 
  created() {
    this.initializeVisibilityPokemons();
  }
  
}
</script>

<style>
html {
  background-color: var(--color-main);
  border: 20px double grey;
  height: 95.8%;
}

h1 {
  text-align: center;
  color: aliceblue;
}

#view-pokemon{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
}

#pokemons-off {
  font-family: var(--font-header);
}

#box-btn-visibility {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;
}

</style>
