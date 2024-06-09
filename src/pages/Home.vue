<template>
    <div id="container-all-pokemon">
      <HeaderTitle/>
      <section v-show="pokemons.length > 0" id="box-btn-visibility">
       <VisibilityPokemon 
       @handlerVisibility="variableChangedVisibility"
       />
      </section>
     <section id="view-pokemon" v-show="changevisiblityPokemons.show">
      <Info
      v-for="pokemon in pokemons" 
      :name="pokemon.namePokemon" 
      :pokedex="pokemon.pokedexId"
      :type="pokemon.type"
      :key="pokemon.id" 
      />
     </section>
     <section v-show="changevisiblityPokemons.hide">
        <h1 id="pokemons-off">Pokemons indisponíveis</h1>
     </section>
     
    </div>
  </template>
  
  <script>
  import HeaderTitle from '../components/Header.vue';
  import Info from '../components/cardPokemon/Info.vue';
  import VisibilityPokemon from '../components/VisibilityPokemon.vue';
  
  export default {
      name: 'HomePokemon',
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
            pokedexId: '144',
            type: ['Ice', 'Flying']
          },
          {
            namePokemon: "Mew",
            pokedexId: '151',
            type: ['Psychic', 'Mistic']
          },
          {
            namePokemon: "Growlithe",
            pokedexId: '58',
            type: ['Fire']
          },
          {
            namePokemon: "Bulbasaur",
            pokedexId: '1',
            type: ['Grass']
          }, 
          {
            namePokemon: "Pikachu",
            pokedexId: '25',
            type: ['Electric']
          },
          {
            namePokemon: 'Cinderace',
            pokedexId: '815',
            type: ['Fire'],
          },
          {
            namePokemon: 'Lucario',
            pokedexId: '448',
            type: ['Fighting']
          },
          {
            namePokemon: 'Mewtwo',
            pokedexId: '150',
            type: ['Psychic']
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
  
  #container-all-pokemon {
    border: 20px double grey;
  }
  
  </style>