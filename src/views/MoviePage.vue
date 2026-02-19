<template>
    <div class="page-surface-container">

        <div class="load-animation-container" v-if="!loaded">
            <i class="fa-solid fa-circle-notch fa-spin"></i>
        </div>

        <movie-info v-if="loaded" :movie="movie"></movie-info>

        <list-cast :actors="actors" v-if="loaded && actors.length > 0"></list-cast>
        
        <trailers-block :videos="videos" v-if="loaded && videos.length > 0"></trailers-block>    
    </div>

    
</template>

<script>

    import ListCast from '../UIcomponents/ListCast.vue';
    import TrailersBlock from '../UIcomponents/TrailersBlock.vue';
    import MovieInfo from '../UIcomponents/MovieInfo.vue';

    export default {

        components: {
            ListCast,
            TrailersBlock,
            MovieInfo
        },

        data() {
            return {
                urlBase: 'https://api.themoviedb.org/3',
                movie: null,
                videos: [],
                actors: [],
                loaded: false,
            }
        },

        methods: {
            async getInfoMovie() {
                const apiKey = import.meta.env.VITE_TMDB_KEY;
                const idMovie = this.$route.params.id;
                const responseMovie = await fetch(`${this.urlBase}/movie/${idMovie}?api_key=${apiKey}&language=ru-RU`);
                
                if(responseMovie.ok) {
                    this.movie = await responseMovie.json();
                } else {
                    console.log('kdjfghd')
                }

                const responseVideos = await fetch(`${this.urlBase}/movie/${idMovie}/videos?api_key=${apiKey}&language=ru-RU`);

                if(responseVideos.ok) {
                    const data = await responseVideos.json();
                    this.videos = data.results;
                } else {
                    console.log('kdjfghd')
                }

                const responseActors = await fetch(`${this.urlBase}/movie/${idMovie}/credits?api_key=${apiKey}&language=ru-RU`);

                if(responseActors.ok) {
                    const data = await responseActors.json();
                    this.actors = data.cast;
                } else {
                    console.log('kdjfghd')
                }

                this.loaded = true;
            },

        },

        mounted() {
            this.getInfoMovie();
        }
    }

</script>

<style scoped>

    .page-movie-container{
        border-radius: 10px;
        background-color: var(--surface-background);
        padding: 1rem;
        margin: 1rem 0;
    }

</style>