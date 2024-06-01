<template>
  <div>
    <header>
      <h1>{{ generation }}</h1>
    </header>
    <main>

    </main>
  </div>
</template>

<script>
  export default {
      name: 'GenerationScreen',
      computed: {
        generation() {
          return this.$route.query.genPokemon
        }
      }
  }
</script>

<style>

</style>