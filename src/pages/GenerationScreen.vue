<template>
  <div>
    <Header/>
    <main>
      
      <h1>{{ generation }}</h1>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

  export default {
      name: 'GenerationScreen',
      components: {
        Header
      },
      computed: {
        generation() {
          return this.$route.query.genPokemon
        }
      }
  }
</script>

<style>

</style>