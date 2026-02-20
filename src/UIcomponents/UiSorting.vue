<template>
    <div class="sorting-container">
        <select name="sort" id="sort" class="sort-select filter-settings" :class="changeTheme"
        v-model="sortValue" @change="sendDataSort">
            <option value="popularity.desc">Сначала популярные</option>
            <option value="popularity.asc">Сначала непопулярные</option>
            <option value="vote_average.desc">Сначала лучшие</option>
            <option value="vote_average.asc">Сначала худшие</option>
            <option value="primary_release_date.desc">Сначала новые</option>
            <option value="primary_release_date.asc">Сначала старые</option>
        </select>
        <div class="mask-icon"></div>

    </div>
</template>

<script>

    export default {
        emits: ['sortData'],

        data() {
            return {
                sortValue: this.$route.path.includes('best') ? 'vote_average.desc' : 'popularity.desc',
                theme: localStorage.getItem('theme')
            }
        },

        methods: {
            sendDataSort() {
                this.$emit('sortData', this.sortValue);
            },

            getTheme() {
                this.theme = localStorage.getItem('theme');
            }
        },

        computed: {
            changeTheme() {
                if (localStorage.getItem('theme') === 'dark') return 'sort-icon-dark';
                else return 'sort-icon-light';
            }
        },

    }
    

</script>

<style scoped> 

    .sorting-container{
        width: 24%;
        display: flex;
    }

    .sort-select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        /* background-image: url('/src/assets/images/arrow-down-wide-short-solid-full.svg'); */
        background-repeat: no-repeat;
        background-size: 1.5rem;
        background-position: right 1rem center;
    }


    /* .sort-icon-dark {
        background-image: url("data:image/svg+xml;utf8,\<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 640'>\<path fill='%239aa0a6' d='M278.6 438.6L182.6 534.6C170.1 547.1 149.8 547.1 137.3 534.6L41.3 438.6C28.8 426.1 28.8 405.8 41.3 393.3C53.8 380.8 74.1 380.8 86.6 393.3L128 434.7L128 128C128 110.3 142.3 96 160 96C177.7 96 192 110.3 192 128L192 434.7L233.4 393.3C245.9 380.8 266.2 380.8 278.7 393.3C291.2 405.8 291.2 426.1 278.7 438.6zM352 544C334.3 544 320 529.7 320 512C320 494.3 334.3 480 352 480L384 480C401.7 480 416 494.3 416 512C416 529.7 401.7 544 384 544L352 544zM352 416C334.3 416 320 401.7 320 384C320 366.3 334.3 352 352 352L448 352C465.7 352 480 366.3 480 384C480 401.7 465.7 416 448 416L352 416zM352 288C334.3 288 320 273.7 320 256C320 238.3 334.3 224 352 224L512 224C529.7 224 544 238.3 544 256C544 273.7 529.7 288 512 288L352 288zM352 160C334.3 160 320 145.7 320 128C320 110.3 334.3 96 352 96L576 96C593.7 96 608 110.3 608 128C608 145.7 593.7 160 576 160L352 160z'/>\</svg>");
    }

    .sort-icon-light {
        background-image: url("data:image/svg+xml;utf8,\<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 640'>\<path fill='%23566074' d='M278.6 438.6L182.6 534.6C170.1 547.1 149.8 547.1 137.3 534.6L41.3 438.6C28.8 426.1 28.8 405.8 41.3 393.3C53.8 380.8 74.1 380.8 86.6 393.3L128 434.7L128 128C128 110.3 142.3 96 160 96C177.7 96 192 110.3 192 128L192 434.7L233.4 393.3C245.9 380.8 266.2 380.8 278.7 393.3C291.2 405.8 291.2 426.1 278.7 438.6zM352 544C334.3 544 320 529.7 320 512C320 494.3 334.3 480 352 480L384 480C401.7 480 416 494.3 416 512C416 529.7 401.7 544 384 544L352 544zM352 416C334.3 416 320 401.7 320 384C320 366.3 334.3 352 352 352L448 352C465.7 352 480 366.3 480 384C480 401.7 465.7 416 448 416L352 416zM352 288C334.3 288 320 273.7 320 256C320 238.3 334.3 224 352 224L512 224C529.7 224 544 238.3 544 256C544 273.7 529.7 288 512 288L352 288zM352 160C334.3 160 320 145.7 320 128C320 110.3 334.3 96 352 96L576 96C593.7 96 608 110.3 608 128C608 145.7 593.7 160 576 160L352 160z'/>\</svg>");
    } */


</style>