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
            url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${this.pokedexForUrl}.gif`
        }
    },
    
}
</script>

<style>

img {
    margin-top: 30px;
    height: 100px;
}

</style>