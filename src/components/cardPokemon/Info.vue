<template>
    <figure id="box-pokemon">
        <ImageInfo :pokedexForUrl="pokedex" :description="name"/>
        <figcaption id="description-pokemon">
            <h5>Pokedex: <span>{{ pokedex }}</span></h5>
            <p>Name: <span>{{  name  }}</span></p>
            <a :href="aboutPokemon" target="_blank">Clique aqui para mais informações sobre {{ name }}</a>
        </figcaption>
  </figure>
</template>

<script>
import ImageInfo from './ImageInfo.vue'


export default {
    name: 'MyInfoInterest',
    components: {
        ImageInfo
    },
    props: {
        name: String,
        pokedex: String,
        
    },
    data() {
        return {
            aboutPokemon: `https://www.pokemon.com/br/pokedex/${this.pokedex}`
        }
    }
}
</script>

<style>

span {
    font-style: italic;
    font-weight: bold;
}

p, h5 {
    color: antiquewhite;
}

img {
    margin-bottom: 2.5em;
}

#description-pokemon {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

#box-pokemon {
    border: 5px groove rgb(236, 147, 162);
    min-width: 200px;
    width: 15%;
    text-align: center;
    height: 400px;
    margin: 0 10px;
    background-image: url('https://e1.pxfuel.com/desktop-wallpaper/258/592/desktop-wallpaper-pokemon-go-type-backgrounds-pokemon-background.jpg');
}

</style>