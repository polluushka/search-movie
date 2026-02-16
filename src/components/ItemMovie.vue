<template>

    <div class="item-movie-container">
        <div class="item-movie-content">
            <div class="movie-img-container">
                <div class="movie-rating-container" :class="returnColorRating">
                    <p class="rating-p">{{ (Math.floor(this.movie.vote_average * 10) / 10).toFixed(1) }}</p>
                </div>
                <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" loading="lazy" alt="" class="item-movie-img">
            </div>
            
            <div class="item-movie-title">
                <h3>{{ movie.title }}</h3>
            </div>
            <div class="item-movie-description">
                <p>{{ getYearRelease }}</p>
                <ul class="genres-container">
                    <li class="genre-elem" v-for="genre in getGenres(movie.genre_ids)">{{ genre.name }}</li>
                </ul>
            </div>

        </div>

    </div>

</template>

<script>

    export default {

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

            }

        },

        computed: {
            getYearRelease() {
                const releaseDate = new Date(this.movie.release_date);
                this.yearRelease = releaseDate.getFullYear();
                return this.yearRelease;
            },

            returnColorRating() {
                const rating = (Math.floor(this.movie.vote_average * 10) / 10).toFixed(1);
                if (rating < 5) return 'bad-rating';
                if (rating >= 5 && rating < 6.5) return 'medium-rating';
                if (rating >= 6.5 && rating <= 7.5) return 'good-rating';
                if (rating > 7.5) return 'excellent-rating';
            }
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
        background-color: #181b22;
        transition: 0.5s;
    }

    .item-movie-container:hover{
        transition: 0.5s;
        background-color: #212530;
    }

    .item-movie-content{
        padding: 1rem;
    }

    .movie-img-container{
        position: relative;
        width: 100%;
        height: 25rem;
        background-color: #0f1115;
        animation: pulse 1.2s infinite;
    }

    .item-movie-img{
        width: 100%;
        height: 100%;
         object-fit: cover;
    }

    .item-movie-title{
        color: #e6e6e6;
        margin: 0.5rem 0;
    }

    .item-movie-description p{
        margin-bottom: 0.5rem;
        color: rgb(154, 160, 166);
    }

    .genres-container{
        width: 100%;
        overflow: hidden;
        display: flex;
        list-style-position: inside;
        background-image: linear-gradient(90deg, rgb(154, 160, 166) 80%, transparent 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
    }

    .genres-container .genre-elem{
        margin-right: 0.5rem;
        list-style: none;
    }

    .genres-container .genre-elem::before{
        content: "•";
        margin-right: 0.5rem;
    }

    .genres-container .genre-elem:first-child::before{
        content: none;
    }

    .star{
        width: 1rem;
    }

    .movie-rating-container{
        padding: 0.2rem 0.5rem;
        margin: 0.5rem;
        right: 0;
        position: absolute;
        display: flex;
        align-items: center;
        color: #e6e6e6;
    }

    .bad-rating {
        background-color: #b91c1c;
    }

    .medium-rating {
        background-color: #d97706;
    }

    .good-rating {
        background-color: #1f3a2a;
    }

    .excellent-rating {
        background-color: #059669;
    }
</style>