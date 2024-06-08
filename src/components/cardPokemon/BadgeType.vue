<template>
    <div>
        <section :style="{ backgroundColor: `var(--${type[0]})` }" >
            {{ type[0] }}
        </section>
        <section v-show="type.length === 2" :style="{ backgroundColor: `var(--${type[1]})` }">
            {{ type[1] }}
        </section>
    </div>
  
</template>

<script>
export default {
    name: 'BadgeType',
    props: {
        type: Array
    }
}
</script>

<style scoped>

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin: 10% 0 0 0;
    }

    section {
        width: 120px;
        height: 30px;
        border: 1px solid black;
        border-radius: 10px;
        line-height: 30px;
        font-family: var(--font-card);
        cursor: default;
    }
    section:hover {
        transition: 0.3s;
        transform: scale(1.1);
    }
</style>