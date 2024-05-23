<template>
  <header>
    <article>
      <h1>Pokemons</h1>
    </article>
    <nav>
      <a v-for="(generation, index) in generationsPokemons" :key="index">{{ generation }}ª Geração</a>
    </nav>
  </header>
</template>

<script>
export default {
    name: 'HeaderTitle',
    data() {
      return {
        generationsPokemons: ['1', '2', '3', '4' ]
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

  h1 {
    font-size: 2.5em;
  }
  
  a, article {
    color: var(--font-white);
    
  }

  a {
    cursor: pointer;
    font-size: 1.1em;
    margin: 0 2px;
    text-align: center;
    padding: 5px 30px;
    border-radius: 5px;
    transition: .6s;
    border: 1px solid var(--color-main);
  }

  a:hover {
    color: rgb(48, 48, 196);
    border: 1px solid rgb(48, 48, 196)
  }

  nav {
    width: 600px;
    display: flex;
    justify-content: space-around;
  }
</style>