<template>
  <header>
    <article>
      <router-link id="title" to="/">Pokemons</router-link>
    </article>
    <nav>
      <router-link 
        v-for="(generation, index) in generationsPokemons" 
        :key="index" 
        :to="{ path: '/generation', query: { genPokemon: generation } }"
        class="nav-generation"
      >
        {{ generation }}
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
    name: 'HeaderTitle',
    data() {
      return {
        generationsPokemons: ['1ª Geração', '2ª Geração', '3ª Geração', '4ª Geração']
      }
    }
}
</script>

<style scoped>
  header {
    display: grid;
    grid-template-rows: repeat(2, 100px);
    justify-content: center;
    align-items: center;
    font-family: var(--font-header);
  }

  #title {
    font-size: 2.5em;
    text-decoration: none;
  }
  
  .nav-generation, #title {
    color: var(--font-white);
    
  }

  .nav-generation {
    cursor: pointer;
    font-size: 1.1em;
    margin: 0 2px;
    text-align: center;
    padding: 5px 30px;
    border-radius: 5px;
    transition: .6s;
    border: 1px solid var(--color-main);
    text-decoration: none;
  }

  .nav-generation:hover {
    color: rgb(48, 48, 196);
    border: 1px solid rgb(48, 48, 196)
  }

  nav {
    width: 600px;
    display: flex;
    justify-content: space-around;
  }

  article {
    display: flex;
    justify-content: center;
  }
</style>