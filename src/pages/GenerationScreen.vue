<template>
  <div>
    <HeaderTitle/>
    <main>
      
      <h1>{{ generation }}</h1>
    </main>
  </div>
</template>

<script>
import HeaderTitle from '@/components/Header.vue';

  export default {
      name: 'GenerationScreen',
      components: {
        HeaderTitle
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