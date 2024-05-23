<template>
  <figure id="box-pokemon">
    <img :src="pokemon.image" alt="Imagem do articuno" />
        <figcaption id="description-pokemon">
            <h5>Pokedex: <span>{{ pokemon.pokedex }}</span></h5>
            <p>Name: <span>{{ pokemon.name }}</span></p>
        </figcaption>
  </figure>
</template>

<script>
export default {
    name: 'PokemonView',
    data() {
        return {
            pokemon: {
                pokedex: '144',
                name: 'Articuno',
                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/144.gif"
            }
        }
    }, 
    created() {
        setTimeout(() => {
            this.pokemon.pokedex = 97
            this.pokemon.name = 'Growlithe'
            this.pokemon.image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/58.gif';
        }, 2000)
    },
    updated() {
        setTimeout(() => {
            this.pokemon.pokedex = 151,
            this.pokemon.name = 'Mew',
            this.pokemon.image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/151.gif';
        }, 1000)
    }
}
</script>

<style scoped>
span {
    font-style: italic;
    font-weight: bold;
}

p, h5 {
    color: antiquewhite;
}

img {
    margin-bottom: 2.5em;
    height: 200px;
}

#description-pokemon {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

#box-pokemon {
    border: 5px groove pink;
    width: 15%;
    text-align: center;
    height: 400px;
    margin: 0 10px;
    background-image: url('https://e1.pxfuel.com/desktop-wallpaper/258/592/desktop-wallpaper-pokemon-go-type-backgrounds-pokemon-background.jpg');
}
</style>