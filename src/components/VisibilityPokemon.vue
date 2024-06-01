<template>
    <button id="btn-change-content" @click="handleVisibilityPokemons">{{ handleContentBtn }}</button> 
</template>

<script>
export default {
    name: 'VisibilityPokemon',
    data() {
        return {
            handleContentBtn: String,
            showPokemon: Boolean,
            hidePokemon: Boolean
        }
    },
    methods: {
        handleVisibilityPokemons() {
            this.showPokemon = !this.showPokemon
            this.hidePokemon = !this.hidePokemon

            this.verifyTextBtn(this.showPokemon)
            this.$emit('handlerVisibility', {
                showPokemon: this.showPokemon,
                hidePokemon: this.hidePokemon
            })
        },
        verifyTextBtn(show) {
            this.handleContentBtn = show ? 'Ocultar Pokemons' : 'Ver Pokemons'
            console.log(this.handleContentBtn);
        }
    },
    created() {
        this.showPokemon = true;
        this.hidePokemon = false;
        this.handleContentBtn = 'Ocultar Pokemons';
    }
}

</script>

<style scoped>
button {
    background-color: rgb(236, 147, 162);
    width: 130px;
    height: 40px;
}



</style>