<template>

    <div class="item-movie-container" @click="openMoviePage">
        <div class="item-movie-content">
            <div class="movie-img-container">
                <ui-rating :rating="movie.vote_average" :voteCount="movie.vote_count"></ui-rating>
                <div class="icon-container" v-if="!movie.poster_path && movie.poster_path === null">
                    <i class="fa-solid fa-eye-slash"></i>
                </div>
                <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" 
                v-if="movie.poster_path && movie.poster_path !== null"
                loading="lazy" alt="" class="item-movie-img">
            </div>
            
            <div class="item-movie-title">
                <h3>{{ movie.title }}</h3>
            </div>
            <div class="item-movie-description">
                <p>{{ returnYearRelease }}</p>
                <ul class="list-row-container">
                    <li class="list-row-elem" v-if="movie.genre_ids.length > 0"
                    v-for="genre in getGenres(movie.genre_ids)">{{ genre.name }}</li>
                    <li class="list-row-elem" v-else>—</li>
                </ul>
            </div>

        </div>

    </div>

</template>

<script>

    import UiRating from '../UIcomponents/UiRating.vue';

    export default {

        components: {
            UiRating
        },

        props: {
            movie: {
                type: Object,
                required: true
            },

            genres: {
                type: Array,
                required: true
            }
        },

        data() {
            return {
                yearRelease: '',
                urlBase: 'https://api.themoviedb.org/3',
            }
        },

        methods: {
            getGenres(movieGenresId) {
                return movieGenresId.map(genreId => {
                    return this.genres.find(genre => genre.id == genreId);
                })

            },

            openMoviePage() {
                this.$router.push(`/search-movie/movie/${this.movie.id}`);
            }

        },

        computed: {
            returnYearRelease() {
                if(this.movie.release_date.length === 0 || this.movie.release_date === null) return '—';
                const releaseDate = new Date(this.movie.release_date);
                this.yearRelease = releaseDate.getFullYear();
                return this.yearRelease;
            },

        },

        mounted() {
            
        }
    }

</script>

<style scoped>
    .item-movie-container{
        height: 100%;
        width: 100%;
        border-radius: 10px;
        background-color: var(--surface-background);
        transition: 0.5s;
        cursor: pointer;
    }

    .item-movie-container:hover{
        transition: 0.5s;
        background-color: var(--surface-background-hover);
    }

    .item-movie-content{
        padding: 1rem;
    }

    .movie-img-container{
        position: relative;
        width: 100%;
        height: 25rem;
        background-color: var(--background-color);
        animation: pulse 1.2s infinite;
    }

    .item-movie-img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .item-movie-title{
        color: var(--title-color);
        margin: 0.5rem 0;
    }

    .item-movie-description p{
        margin-bottom: 0.5rem;
        color: var(--text-color);
    }

    .list-row-container {
        background-image: linear-gradient(90deg, var(--text-color) 80%, transparent 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
    }

    .icon-container {
        height: 100%;
    }

</style>