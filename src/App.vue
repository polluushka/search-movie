<template>
  <div class="container">

    <ui-header></ui-header>

    <div class="filters-container">
      <div class="search-button-container">
        <ui-search v-model="searchValue"></ui-search>
        <ui-button @click="searchMovie"><i class="fa-solid fa-magnifying-glass"></i></ui-button>
      </div>
      
      <ui-filter :genres="genres" @filterData="getDataFilter"></ui-filter>
      <ui-sorting @sortData="getDataSort"></ui-sorting>
      
    </div>
    

    <list-movies v-if="loated" :movies="movies" :genres="genres">

    </list-movies>

    <ui-pagination :countPages="countPages" @updateCountPage="openNewPage"></ui-pagination>
  </div>
</template>

<script>
  import ItemMovie from './components/ItemMovie.vue';
  import ListMovies from './components/ListMovies.vue';
  import UiHeader from './UIcomponents/UiHeader.vue';
  import UiSearch from './UIcomponents/UiSearch.vue';
  import UiFilter from './UIcomponents/UiFilter.vue';
  import UiSorting from './UIcomponents/UiSorting.vue';
  import UiButton from './UIcomponents/UiButton.vue';
  import UiPagination from './UIcomponents/UiPagination.vue';

  export default {
    components: {
      ItemMovie,
      ListMovies,
      UiHeader,
      UiSearch,
      UiFilter,
      UiSorting,
      UiButton,
      UiPagination
    },

    data() {
      return {
        urlBase: "https://api.themoviedb.org/3",
        movies: [],
        genres: [],
        searchValue: "",
        domenFilter: '',
        genresFilter: '',
        ratingFilter: [],
        fromDateFilter: '',
        toDateFilter: '',
        typeSort: '',
        loated: false,
        countPages: 1
        
      }
    },

    methods: {
      async getDataMovies() {
        const apiKey = import.meta.env.VITE_TMDB_KEY;
        const response = await fetch(`${this.urlBase}/movie/popular?api_key=${apiKey}&language=ru-RU&page=${this.countPages}`);

        if(response.ok) {
          const data = await response.json();
          this.movies = data.results;
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

        if (this.movies.length > 0) this.loated = true;
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
          this.movies = data.results;
        } else {
          console.log('kdjfghd')
        }
      
      },

      getDataFilter(genresSelected, ratingSelected, fromDate, toDate) {
        this.genresFilter = genresSelected.join(',');
        this.ratingFilter = ratingSelected;
        this.fromDateFilter = fromDate;
        this.toDateFilter = toDate;
        this.getFilterMovies();
      },

      getDataSort(sorted) {
        this.typeSort = sorted;
        this.getFilterMovies();
      },

      getSearchValue(search) {
        this.searchValue = search;
      },

      async searchMovie() {
        const apiKey = import.meta.env.VITE_TMDB_KEY;
        let response = '';
        if (this.searchValue.length > 0) {
          response = await fetch(`${this.urlBase}/search/movie?api_key=${apiKey}&query=${this.searchValue}&language=ru-RU&page=1`);
        } else {
          response = await fetch(`${this.urlBase}/movie/popular?api_key=${apiKey}&language=ru-RU&page=1`);
        }

        if(response.ok) {
            const data = await response.json();
            this.movies = data.results;
          } else {
            console.log('kdjfghd')
        }
        
      },

      openNewPage(currentPage) {
        this.countPages = currentPage;
        if(this.domenFilter.length > 0) this.getFilterMovies();
        else this.getDataMovies();
        
      }
    },

    computed: {

    },

    mounted() {
      this.getDataMovies();
      this.getDataGenres();
    }
  }
</script>

<style scoped>
  .filters-container{
    width: 100%;
    margin: 2rem 0 1rem 0;
    display: flex;
    justify-content: space-between;
  }

  .search-button-container{
    display: flex;
      width: 55%;
  }
</style>
