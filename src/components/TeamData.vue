<template>
    <section id="box-team">
        <h3>{{ team.name }}</h3>
        <img :src="team.badge" alt="Real Madrid's badge"/>
        <section id="box-titles">
            <h2>Quantidade de títulos:</h2>
            <p id="quantity-titles">{{ team.quantityTitles }}</p>
        </section>
    </section>
</template>

<script>
export default {
    name: 'TeamData',
    data() {
        return {
            team: {
            name: 'Real Madrid',
            quantityTitles: 97,
            badge: 'https://upload.wikimedia.org/wikipedia/pt/9/98/Real_Madrid.png'
        }
        }
    },
    created() {
        setTimeout(() => {
            this.team.name = 'Man City'
            this.team.quantityTitles = 29
            this.team.badge = 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/800px-Manchester_City_FC_badge.svg.png'

        }, 2000)
    }
}
</script>

<style>

#box-team {
    border: 5px groove pink;
    width: 15%;
    text-align: center;
    height: 400px;
}

#box-titles {
    margin-top: 20px;
}

img {
    height: 100px;
    width: 100px;
}

#quantity-titles {
    font-style: italic;
    font-weight: bold;
}

</style>