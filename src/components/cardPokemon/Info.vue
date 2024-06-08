<template>
    <figure id="box-pokemon">
        <h5>Pokedex: <span class="content-pokemon">{{ pokedex }}</span></h5>
        <ImageInfo :pokedexForUrl="pokedex" :description="name"/>
        <figcaption id="description-pokemon">
            <p>Name: <span class="content-pokemon">{{  name  }}</span></p>
            <a :href="aboutPokemon" class="name-pokemon-link" target="_blank">Clique aqui para mais informações sobre <span class="content-pokemon">{{ name }}</span></a>
        </figcaption>
        <div id="container-badges">
            <section id="box-badges">
                <BadgeType :type="type"/>
            </section>
        </div>
    </figure>
</template>
                    
<script>
import BadgeType from './BadgeType.vue';
import ImageInfo from './ImageInfo.vue'


export default {
    name: 'MyInfoInterest',
    components: {
        ImageInfo,
        BadgeType
    },
    props: {
        name: String,
        pokedex: String,
        type: Array
        
    },
    data() {
        return {
            aboutPokemon: `https://www.pokemon.com/br/pokedex/${this.pokedex}`
        }
    },
    mounted() {
        console.log(this.type)
    }
}
</script>

<style>

.name-pokemon-link {
    text-decoration: none;
    color: black;
    line-height: 20px;
}

.name-pokemon-link:hover {
    transition: .6s;
    color: rgb(84, 84, 233) !important;
}

.content-pokemon {
    color: var(--font-white);
    font-family: var(--font-card);
    font-weight: bold;
    display: block
}

#description-pokemon {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

#box-pokemon {
    border: 5px double rgb(236, 147, 162);
    min-width: 302px;
    width: 20%;
    text-align: center;
    font-family: var(--font-card);
    height: 400px;
    margin: 5px 10px;
    background-image: url('https://e1.pxfuel.com/desktop-wallpaper/258/592/desktop-wallpaper-pokemon-go-type-backgrounds-pokemon-background.jpg');
}

#box-badges {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    width: 85%;
    background-color: rgb(226, 226, 226);
    border-radius: 5px;
}

#container-badges {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 20%;
}
</style>