<template>
    <div class="filter-container">
        <button class="filter-button filter-settings" @click="toogleHiddenMenu">
            <p>Фильтры</p>
            <i class="fa-solid fa-sliders"></i>
        </button>

        <div class="filter-menu-container hidden-menu">

            <p class="title-filter">Жанры</p>
            <div class="genres-filter-container">
                <button class="filter-button-menu" v-for="genre in genres" :id="`${genre.id}`"
                @click="setGenresFilter(genre.id)">{{ genre.name }}</button>
            </div>

            <p class="title-filter">Рейтинг</p>
            <p class="p-filter">Выберите диапазон</p>
            <div class="rating-filter-container">
                <button class="filter-button-menu one-width" v-for="rating in 10" :id="`rating-${rating}`"
                @click="setRatingFilter(`rating-${rating}`)">{{ rating }}</button>

            </div>

            <p class="title-filter">Дата выхода</p>
            <div class="date-filter-container">
                <div class="date-container">
                    <label for="from-date-filter" class="label-date-filter">От</label>
                    <input type="date" class="input-date-filter" id="from-date-filter"
                    v-model="fromDateFilter" name="from-date-filter">
                </div>

                <div class="date-container">
                    <label for="to-date-filter" class="label-date-filter">До</label>
                    <input type="date" class="input-date-filter" id="to-date-filter"
                    v-model="toDateFilter" name="to-date-filter">
                </div>

            </div>

            <ui-button @click="sendDataFilter" style="font-size: 0.75rem;">Найти</ui-button>
        </div>
    </div>
</template>

<script>
    import UiButton from './UiButton.vue';

    export default {

        emits: ['filterData'],

        props: {
            genres: {
                type: Array,
                required: true
            }
        },

        components: {
            UiButton,
        },

        data() {
            return {
                genresFilter: [],
                rangeRating: [],
                fromDateFilter: '',
                toDateFilter: '',
            }
        },

        methods: {
            toogleHiddenMenu() {
                const filterMenuContainer = document.querySelector('.filter-menu-container');
                filterMenuContainer.classList.toggle('hidden-menu');
            },

            setGenresFilter(idButton) {
                const buttonGenreFilter = document.getElementById(idButton);
                buttonGenreFilter.classList.toggle('active-button');
                if (buttonGenreFilter.classList.contains('active-button')) {
                    this.genresFilter.push(idButton);
                } else {
                    this.genresFilter.splice(this.genresFilter.indexOf(idButton), 1);
                }
                
            },

            setRatingFilter(idButton) {
                const buttonRatingFilter = document.getElementById(idButton);
                const letValueButton = Number(buttonRatingFilter.innerText);

                if (this.rangeRating.length < 2) {
                    this.rangeRating.push(letValueButton);
                    if (letValueButton !== 10) {
                        this.rangeRating.push(letValueButton + 0.9);
                    }
                    buttonRatingFilter.classList.add('active-button');
                } else {

                    if (Math.abs(letValueButton - this.rangeRating[0]) < Math.abs(letValueButton - this.rangeRating[1])) {
                        this.rangeRating.splice(0, 1, letValueButton);
                    } else {
                        this.rangeRating.splice(1, 2, letValueButton);
                    }

                }


                if (this.rangeRating.length === 2) {
                    for (let buttonNum = 1; buttonNum <= 10; buttonNum++) {
                        let button = document.getElementById(`rating-${buttonNum}`);
                        if (buttonNum >= this.rangeRating[0] && buttonNum <= this.rangeRating[1]) {
                            button.classList.add('active-button');
                        } else {
                            button.classList.remove('active-button');
                        }
                            
                    }
                }
                    
            },

            sendDataFilter() {
                this.$emit('filterData', this.genresFilter, this.rangeRating, this.fromDateFilter, this.toDateFilter);
            }
        }
    }
</script>

<style scoped> 

    .filter-container{
        width: 19%;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: end;
    }

    .filter-button{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        
    }

    .hidden-menu{
        display: none;
    }

    .filter-menu-container{
        width: 500px;
        z-index: 100;
        position: absolute;
        padding: 1rem;
        margin-top: 3rem;
        background-color: #181b22;
        border-radius: 5px;
        font-size: 0.75rem;
        color: #e6e6e6;
        transition: 0.3s;
    }

    .filter-menu-container:hover{
        background: #1c2128;
        box-shadow: 1px 1px 10px 5px rgb(24, 27, 34);
        transition: 0.3s;
    }

    .genres-filter-container{
        display: flex;
        flex-wrap: wrap;
    }

    .filter-button-menu{
        color: #e6e6e6;
        background: transparent;
        border-radius: 5px;
        margin: 0 0.5rem 0.5rem 0;
        padding: 0.5rem;
        border: 1px solid #e6e6e6;
        cursor: pointer;
        transition: 0.2s;
    }

    .filter-button-menu:hover{
        background-color: #e6e6e6;
        color: #181b22;
        transition: 0.2s;
    }

    .active-button {
        background-color: #e6e6e6;
        color: #181b22;
    }

    .title-filter {
        font-family: 'Montserrat-Bold';
        margin-bottom: 0.5rem;
    }

    .rating-filter-container{
        display: flex;
    }

    .one-width{
        width: 10%;
        display: flex;
        justify-content: center;
    }

    .p-filter{
        margin-bottom: 0.5rem;
    }

    .date-filter-container{
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
    }

    .date-container {
        display: flex;
        align-items: center;
        width: 49%;
    }

    .label-date-filter {
        margin-right: 0.5rem;
    }

    .input-date-filter {
        background: transparent;
        color: #e6e6e6;
        border: 1px solid #e6e6e6;
        border-radius: 5px;
        padding: 0.5rem;
        width: 80%;
    }

</style>