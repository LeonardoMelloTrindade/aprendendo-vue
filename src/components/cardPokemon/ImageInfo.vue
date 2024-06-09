<template>
  <img :src="url" :alt="description">
</template>

<script>
export default {
    name: 'ImageInfo',
    props: {
        pokedexForUrl: String,
        description: String
    },
    data() {
        return {
            url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokedexForUrl}.png`
        }
    },
    
}
</script>

<style scoped>

img {
    margin-top: 10px;
    height: 120px;
    width: 120px;
}

</style>