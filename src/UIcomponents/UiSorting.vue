<template>
    <div class="sorting-container">
        <select name="sort" id="sort" class="sort-select filter-settings"
        v-model="sortValue" @change="sendDataSort">
            <option value="popularity.desc">Сначала популярные</option>
            <option value="popularity.asc">Сначала непопулярные</option>
            <option value="vote_average.desc">Сначала лучшие</option>
            <option value="vote_average.asc">Сначала худшие</option>
            <option value="primary_release_date.desc">Сначала новые</option>
            <option value="primary_release_date.asc">Сначала старые</option>
        </select>
    </div>
</template>

<script>

    export default {
        emits: ['sortData'],

        data() {
            return {
                sortValue: this.$route.path.includes('best') ? 'vote_average.desc' : 'popularity.desc'
            }
        },

        methods: {
            sendDataSort() {
                this.$emit('sortData', this.sortValue);
            }
        }

    }
    

</script>

<style scoped> 

    .sorting-container{
        width: 24%;
        display: flex;
    }

</style>