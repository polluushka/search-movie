<template>
    <div class="pagination-container">
        <div class="pages-container">
            <ui-button v-if="this.currentPage > 1"
             @click="openPreviousPage()"><i class="fa-solid fa-chevron-left"></i></ui-button>
            <button class="button-pagination" v-for="page in updatePaginationArray"
             @click="getPaginationArray(page)" :class="this.currentPage === page ? 'current-page-button' : ''">{{ page }}</button>
            <ui-button @click="openNextPage()"><i class="fa-solid fa-chevron-right"></i></ui-button>
        </div>
        

    </div>
</template>

<script>

    import UiButton from './UiButton.vue';

    export default {
        components: {
            UiButton
        },

        emits: ['updateCountPage'],

        // props: {
        //     countPages: {
        //         type: Number,
        //         required: true
        //     }
        // },

        data() {
            return {
                pagination: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                minPage: 1,
                maxPage: 9,
                currentPage: 1

            }
        },

        methods: {
            getPaginationArray(page) {
                this.currentPage = page;

                if (this.currentPage > 5) {
                    this.minPage = page - 4;
                    this.maxPage = page + 4;
                } else {
                    this.minPage = 1;
                    this.maxPage = 9;
                }
                this.$emit('updateCountPage', this.currentPage);
            },

            openNextPage() {
                this.currentPage++;
                this.getPaginationArray(this.currentPage);
                this.$emit('updateCountPage', this.currentPage);
            },

            openPreviousPage() {
                this.currentPage--;
                this.getPaginationArray(this.currentPage);
                this.$emit('updateCountPage', this.currentPage);
            }
        }, 

        computed: {
            updatePaginationArray() {
                this.pagination = [];
                for (let page = this.minPage; page <= this.maxPage; page++) {
                    this.pagination.push(page);
                }
                return this.pagination;
            }
        }
    }
</script>

<style>

.pagination-container{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
}

.button-pagination {
    margin: 0 0.5rem;
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
    background: transparent;
    border: 1px solid #e6e6e6;
    color: #e6e6e6;
    border-radius: 5px;
    transition: 0.3s;
}

.current-page-button,
.button-pagination:hover {
    background: #e6e6e6;
    color: #0f1115;
    transition: 0.3s;
}

.button-pagination:active {
    transform: translateY(2px);
}


</style>