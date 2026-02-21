<template>
    <div class="list-movies-container">
        <div class="item-movie" v-for="movie in movies">
            <item-movie :movie="movie" :genres="genres">

            </item-movie>
        </div>
    </div>

</template>

<script>
    import ItemMovie from './ItemMovie.vue';

    export default {

        components: {
            ItemMovie
        },

        props: {
            movies: {
                type: Array,
                required: true
            },

            genres: {
                type: Array,
                required: true
            }
        },

    }

</script>

<style scoped>

    .list-movies-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
        margin-bottom: 1rem;
        
    }

    .item-movie {
        min-width: 0;
    }

</style>