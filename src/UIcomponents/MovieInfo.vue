<template>
    <div class="main-movie-container">
        <div class="poster-container">
            <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`"
            v-if="movie.poster_path && movie.poster_path !== null"
            loading="lazy" alt="" class="poster">
            <i class="fa-solid fa-eye-slash" v-if="!movie.poster_path && movie.poster_path === null"></i>
        </div>
        <div class="movie-full-description">
            <div class="title-rating-line">
                <h1 class="title-movie">{{ movie.title }}</h1>
                <ui-rating :rating="this.movie.vote_average" :voteCount="movie.vote_count"></ui-rating>
            </div>

            <div class="params-group row-block">
                <div class="column-block">
                    <div class="block-param elem-column">
                        <p class="p-title">Жанры:</p>
                        <ul class="list-row-container">
                            <li class="list-row-elem" v-if="movie.genres.length > 0" v-for="genre in movie.genres">{{ genre.name }}</li>
                            <li class="list-row-elem" v-else>—</li>
                        </ul>
                    </div>

                    <div class="block-param">
                        <p class="p-title">Страна:</p>
                        <ul class="list-row-container">
                            <li class="list-row-elem" v-for="country in returnCountries">{{ country }}</li>
                        </ul>
                    </div>

                </div>

                <div class="column-block">
                        
                    <div class="block-param elem-column">
                        <p class="p-title">Длительность:</p>
                        <p class="p-text">{{ getFormattedRuntime(movie.runtime) }}</p>
                    </div>

                    <div class="block-param">
                        <p class="p-title">Дата релиза:</p>
                        <p class="p-text">{{ getFormattedDate(movie.release_date) }}</p>
                    </div>
                        
                </div>    
            </div>
                

            <div class="params-group">
                <p class="p-title">Слоган:</p>
                <p class="p-text" style="font-family: 'Montserrat-Italic'" v-if="movie.tagline">{{ movie.tagline }}</p>
                <p class="p-text" style="font-family: 'Montserrat-Italic'" v-else>—</p>

            </div>

            <div class="params-group">
                <p class="p-title">Аннотация:</p>
                <p class="p-text" v-if="movie.overview">{{ movie.overview }}</p>
                <p class="p-text" v-else>—</p>
            </div>

            <div class="params-group row-block">
                <div class="block-param">
                    <p class="p-title">Бюджет:</p>
                    <p class="p-text" v-if="movie.budget"> {{ (movie.budget).toLocaleString('ru-RU') }}$</p>
                    <p class="p-text" v-else>—</p>
                </div>
                <div class="block-param">
                    <p class="p-title">Сборы:</p>
                    <p class="p-text" v-if="movie.revenue"> {{ (movie.revenue).toLocaleString('ru-RU') }}$</p>
                    <p class="p-text" v-else>—</p>
                </div>
            </div>
                
        </div>
    </div>  
</template>

<script>

    import UiRating from './UiRating.vue';

    export default {
        components: {
            UiRating
        },

        props: {
            movie: {
                type: Object,
                recuired: true
            }
        },

        methods: {
        
            getFormattedDate(dateRelease) {
                if (dateRelease.length === 0) return '—';
                const date = new Date(dateRelease);
                return date.toLocaleDateString('ru-RU');
            },

            getFormattedRuntime(runtime) {
                if (runtime === 0) return '—';
                return (`${Math.floor(runtime / 60)}ч ${runtime % 60}мин`)
            },

        },

        computed: {
            returnCountries() {
                if (this.movie.production_countries.length === 0) return ['—'];
                const russification = new Intl.DisplayNames(['ru'], {type: 'region'});
                let countriesRu = this.movie.production_countries.map(country => {
                    return russification.of(country.iso_3166_1);
                });
                return countriesRu;
            },

        },

    }

</script>

<style scoped>
    .main-movie-container{
        margin-bottom: 1rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .poster-container{
        width: 25%;
        height: 30rem;
        background-color: var(--background-color);
        animation: pulse 1.2s infinite;
    }

    .poster {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .movie-full-description{
        width: 73%;
        display: flex;
        flex-direction: column;
        min-height: 100%;
        justify-content: space-between;
    }

    .title-movie{
        width: 70%;
    }

    .title-rating-line{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
    }

    .movie-rating-container {
        position: relative;
        font-size: 1.5rem;
    }

    .params-group{
        margin-bottom: 1rem;
    }

    .row-block{
        display: flex;
    }

    .p-title{
        font-size: 1.1rem;
        font-family: 'Montserrat-Bold';
        margin-bottom: 0.5rem;
    }

    .elem-column{
        margin-bottom: 1rem;
    }

    .block-param{
        margin-right: 3rem;
        
    }
</style>