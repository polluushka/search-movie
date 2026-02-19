<template>
    <div class="filters-container">

      <ui-filter :genres="genres" @filterData="getDataFilter"></ui-filter>
      <ui-sorting @sortData="getDataSort"></ui-sorting>
      
    </div>
    <list-movies v-if="loated" :movies="bestMovies" :genres="genres"></list-movies>
    <ui-pagination :countPages="countPages" @updateCountPage="openNewPage"></ui-pagination>
</template>

<script>

    import ListMovies from '../components/ListMovies.vue';
    import UiSorting from '../UIcomponents/UiSorting.vue';
    import UiFilter from '../UIcomponents/UiFilter.vue';
    import UiPagination from '../UIcomponents/UiPagination.vue';

    export default {
        components: {
            ListMovies,
            UiSorting,
            UiFilter,
            UiPagination
        },

        data() {
            return {
                urlBase: "https://api.themoviedb.org/3",
                bestMovies: [],
                genres: [],
                loated: false,
                domenFilter: '',
                genresFilter: '',
                ratingFilter: [],
                fromDateFilter: '',
                toDateFilter: '',
                typeSort: 'vote_average.desc',
                countPages: 1
            }
        },

        methods: {
            async getBestMovies() {
                const apiKey = import.meta.env.VITE_TMDB_KEY;
                const response = await fetch(`${this.urlBase}/movie/top_rated?api_key=${apiKey}&language=ru-RU&page=${this.countPages}`);

                if(response.ok) {
                    const data = await response.json();
                    this.bestMovies = data.results;
                } else {
                    console.log('kdjfghd')
                }

                if (this.genres.length > 0) this.loated = true;
            },

            async getDataGenres() {
                const apiKey = import.meta.env.VITE_TMDB_KEY;
                const response = await fetch(`${this.urlBase}/genre/movie/list?api_key=${apiKey}&language=ru-RU`);

                if(response.ok) {
                    const data = await response.json();
                    this.genres = data.genres;
                } else {
                    console.log('kdjfghd')
                }

                if (this.bestMovies.length > 0) this.loated = true;
            },

            async getFilterMovies() {
                this.domenFilter = '';
                if (this.genresFilter.length > 0) this.domenFilter += `&with_genres=${this.genresFilter}`;
                if (this.ratingFilter.length > 0) this.domenFilter += `&vote_average.gte=${this.ratingFilter[0]}&vote_average.lte=${this.ratingFilter[1]}`;
                if (this.fromDateFilter.length > 0) this.domenFilter += `&primary_release_date.gte=${this.fromDateFilter}`;
                if (this.toDateFilter.length > 0) this.domenFilter += `&primary_release_date.lte=${this.toDateFilter}`;
                if (this.typeSort.length > 0) this.domenFilter += `&sort_by=${this.typeSort}`;

                const apiKey = import.meta.env.VITE_TMDB_KEY;

                const response = await fetch(`${this.urlBase}/discover/movie?api_key=${apiKey}&with_genres=${this.domenFilter}&vote_count.gte=100&language=ru-RU&page=${this.countPages}`);

                if(response.ok) {
                    const data = await response.json();
                    this.bestMovies = data.results;
                } else {
                    console.log('kdjfghd')
                }
            
            },

            getDataFilter(genresSelected, ratingSelected, fromDate, toDate) {
                this.genresFilter = genresSelected.join(',');
                this.ratingFilter = ratingSelected;
                this.fromDateFilter = fromDate;
                this.toDateFilter = toDate;
                this.countPages = 1;
                this.getFilterMovies();
            },

            getDataSort(sorted) {
                this.countPages = 1;
                this.typeSort = sorted;
                this.getFilterMovies();
            },

            openNewPage(currentPage) {
                this.countPages = currentPage;
                if(this.domenFilter.length > 0) this.getFilterMovies();
                else this.getBestMovies();
            }
        },

        mounted() {
            this.getBestMovies();
            this.getDataGenres();
        }
    }

</script>

<style scoped>
    .filters-container{
        justify-content: end;
    }

    .filter-container{
        margin-right: 1rem;
    }
</style>